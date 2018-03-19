// Denounement
// j("That mode of communication?"); j("It's imprecise, impersonal, impossible to truly connect.");

// Recap what happened.
// Who's to blame.
// All coming towards --> Break up now, or try to stay together?

// Love you, X. Love you, Y.
// IMMEDIATELY CUT TO NOW - WE BROKE UP.

function Start_Jack_2(){

	/////// SET UP SCENE ////////

	Show("background","bedroom_2");
	Show("us","bedroom_us_2");
	Show("light","bedroom_light_2",{x:0,y:159});

	PlaySound("bg","bedroom_2",{loop:-1,volume:0.5});

	if($.punched){
		Show("punch","bedroom_punch",{x:256,y:404});
	}

	/////////////////////////////

	n("やあジャック。");
	if($.sadsack){
		j("やあニッキー。まだどうしようもなく悲観的な気分かい?");
	}else{
		j("やあニッキー。");
	}
	j("親へのカミングアウトはどうだった? うまくいったろ?");

	Choose({
		"メチャメチャだよ、ジャック...": function(message){
			n(message);
			j("そんな... 嘘だろ。");
			j("なぁ、冗談だろ? 何があった?");
			What_Happened();
		},
		"「最悪」ってほどではなかったよ。": function(message){
			n(message);
			j("えっ、まさか。");
			j("うまく行くと思ったんだよ... 何が... 何があったの?");
			What_Happened();
		},
		"黙っててくれ、ジャック。": function(message){
			n(message);
			j("な、うまく行くと思ってたよ!");
			n("違うんだ。ジャック、君とはもう逢えなくなる。");
			j("ちょっと待て。");
			j("おいおい、嘘だろ? 何があった?");
			What_Happened();
		}
	});

}

function What_Happened(){

	if($.punched){
		Choose({
			"親父に顔をぶん殴られた。": What_Happened_Abuse,
			"親に転校させられることになった。": What_Happened_School,
			"僕らのメールを全部見られた。": What_Happened_Texts
		});
	}else if($.father_oblivious==false){
		Choose({
			"二人とも僕を口汚く罵った。": What_Happened_Abuse,
			"転校しろって言われた。": What_Happened_School,
			"僕らのメールを全部見られた。": What_Happened_Texts
		});
	}else{
		n("ああ、親父は忘れっぽいし、しばらくは平気だろう。だけど母さんは...");
		if($.changing_schools){
			Choose({
				"僕を転校させようとしてる。": What_Happened_School,
				"知らない女の子と僕を会わせようとしてる。": What_Happened_Girl,
				"僕らのメールを全部読んだ。": What_Happened_Texts,
			});
		}else{
			Choose({
				"家庭教師を僕につけて放課後を潰すつもりだ。": What_Happened_School,
				"知らない女の子と僕を会わせようとしてる。": What_Happened_Girl,
				"僕らのメールを全部読んだ。": What_Happened_Texts,
			});
		}
	}

}

function What_Happened_Abuse(message){
	$.told_jack = "abuse";

	n(message);
	j("なんだって!");
	j("ニッキー、すぐに児童保護サービスに連絡するんだ。");
	n("はぁ?! いいよ、そこまでのことじゃないよ。");
	j("だっ... ならいいけど、せめて明日スクールカウンセラーに行くんだ。いいね?");
	n("ああ。");
	j(". . .");
	What_Happened_2();
}
function What_Happened_School(message){
	$.told_jack = "school";

	n(message);
	j("そんな!");
	j("なぜ?! なんでそんなことを?");
	n("それは、ジャックや今の学校は僕に悪い影響を与える、とかそんなところさ。僕らを離したがっているんだ。");
	j("そんな、嘘だろ...");
	What_Happened_2();
}
function What_Happened_Girl(message){
	$.told_jack = "girl";

	n(message);
	j("げ、マジか?");
	n("クレアとかいう名前の子だよ。家庭教師もやるってさ。");
	j("うげ、マジメかよ。で、親はその子とお前をくっつけようとしてるってことか?");
	n("そういうこと。"); 
	What_Happened_2();
}
function What_Happened_Texts(message){
	$.told_jack = "texts";

	n(message);
	j("そんな横暴な!");
	j("ちょっと待って、じゃあいま書いてるこのメールはどうすればいい?");
	n("なんとか隠せると思う。うちの親は新技術には疎いから。");
	j("...こんなの横暴だよ。");
	What_Happened_2();
}

function What_Happened_2(){
	
	n("で、いまのは今日起きたクソみたいな三つの出来事の、一つ目だよ。");
	j("ニッキー...");
	j("本当に、本当にごめん。");
	j("カミングアウトなんかさせるんじゃなかった。僕がバカだったよ。");

	Choose({
		"そうだね、バカだった。": function(message){
			$.blame = "jack";

			n(message);
			n("もし君が「おおニッキー、カミングアウトして君の魂を解放するんだ」とか言わなきゃ、こんなことには...");
			j(". . .");
			n("ごめん。こんな事言えるの、君くらいなんだ。");
			n("もうどうすればいいのか分からないんだよ。");
			What_Now();
		},
		"違うさ、悪いのはうちの親だ。": function(message){
			$.blame = "parents";

			n(message);
			n("奴らは僕らのメールを読んだ。もう僕が何を言ったところで何も変わらないよ。");
			if($.told_jack!="texts"){
				j("えっ! 君の親はメールまで読んだのか?!");
			}else{
				j("古い考え方に縛られ続けているってことか。悲しいね。");
				n("同情する気にはなれないな。");
			}
			What_Now();
		},
		"いや、ぜんぶ僕が悪いんだ。": function(message){
			$.blame = "nicky";

			n(message);
			n("僕の電話をパスコードロックしておくべきだったんだ。それかメールを暗号化しておくか、もっとうまく隠しておけば...");
			if($.told_jack!="texts"){
				j("メールも読まれたって?...");
			}
			j("ニッキー、君が自分の親を信用していたのは当然だ。親なんだから。君の両親こそが、君を裏切ったんだ。君のせいじゃない。");
			n("うん...");
			What_Now();
		}
	});

}

function What_Now(){

	j(". . .");

	n("You know... talking with my parents, it's like...");
	n("That mode of communication?");
	n("It's imprecise, impersonal, impossible to truly connect.");

	j(". . .");
	j("What now?");

	Choose({
		"I'm going to sabotage my parents' plans.": function(message){
			n(message);

			if($.told_jack=="texts"){
				n("I'll set up a new email and virtual phone number to talk with you.");
				n("This way they can't spy on our communications anymore.");
			}else if($.told_jack=="girl"){
				n("I'll tell Claire everything. With any luck, she'll help me fight back.");
			}else{
				n("I'll figure out a way, somehow...");
			}

			What_Now_2();
		},
		"I'll visit the school counselor tomorrow.": function(message){
			n(message);

			if($.told_jack=="abuse"){
				n("Like I promised. Like you made me promise.");
			}else if($.told_jack=="school"){
				n("My current school, that is. I don't know how soon they'll be transferring me.");
			}else{
				n("At least they'll be someone else I can lash out on.");
			}

			What_Now_2();
		},
		"I'm getting out of this house.": function(message){
			n(message);

			n("Not running away, I mean. Although if I did I could crash at your place.");
			n("But anyway. I'm going to try to get an internship or scholarship in the US.");
			n("And get far, far away from these people.");
			What_Now_2();
		}
	});

}

function What_Now_2(){

	j("No, I mean... what now, between us?");
	n("Jack...");
	j("What do we do? What... What happens?");
	n(". . .");

	Choose({
		"We have to break up.": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("No, no no...");
			n("I can't do this to you, Jack. I can't pull you down with me.");
			j("At least, don't type 'we can still be friends'.");
			n("we can still be frie");
			n(". . .");
			j("Because, of course we're friends. Of course we are.");
			n(". . .");
			What_Now_3();
		},
		"We stick together as long as we can.": function(message){
			n(message);

			j(". . .");
			j("As long as we can.");
			n(". . .");
			What_Now_3();
		},
		"I don't know.": function(message){
			$.breaking_up_soon = true;

			n(message);

			j(". . .");
			What_Now_3();
		}
	});

}

function What_Now_3(){

	n("It's late.");
	n("There's a lot I need to sleep on, now.");
	j("Okay.");
	j(". . .");
	j("I love you, Nicky.");
	n("I love you too, Jack.");
	
	var insult = "";
	if($.hippies) insult+=" new-age hippie";
	if($.im_a_poet) insult+=" amateur poet";
	if(insult!=""){
		n("You"+insult+".");
	}else{
		n("You goof.");
	}

	The_Game_Ends();

}

function The_Game_Ends(){
	Wait(500);
	Start_Outro();
}

