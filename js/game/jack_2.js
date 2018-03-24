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

	n("わかるだろ... うちの親と話すのは, なんていうか...");
	n("あれがコミュニケーションか?");
	n("不明瞭で、不毛で、不可解で。話し合いになんかなるもんか。");

	j(". . .");
	j("それでどうする?");

	Choose({
		"親が決めたことは無視するよ。": function(message){
			n(message);

			if($.told_jack=="texts"){
				n("メールアドレスは変えて、電話するときも転送用の番号にかけるよ。");
				n("そうすればもう僕らの会話をスパイすることもできなくなる。");
			}else if($.told_jack=="girl"){
				n("クレアにはぜんぶ伝えるよ。もしかしたら、僕らのことを助けてくれるかもしれないし。");
			}else{
				n("とにかく、なんとかするさ...");
			}

			What_Now_2();
		},
		"スクールカウンセラーのところに行くよ。": function(message){
			n("明日、スクールカウンセラーのところへ行くよ。");

			if($.told_jack=="abuse"){
				n("約束したしね。君に言われて。");
			}else if($.told_jack=="school"){
				n("今いる学校の、ね。いつ転校させられるのか、まだわからないし。");
			}else{
				n("それか、誰かこのことを言えそうなところに。");
			}

			What_Now_2();
		},
		"家を出るつもりだ。": function(message){
			n(message);

			n("逃げ出す、って訳じゃないよ。君のところに逃げ込むこともできるかもしれないけど。");
			n("そうじゃなくて、アメリカに行って、インターンシップか、奨学金でも狙おうかと思ってるんだ。");
			n("とにかく連中から遠いところに行きたいんだ。");
			What_Now_2();
		}
	});

}

function What_Now_2(){

	j("そうじゃなくて、僕らはどうなる?");
	n("ジャック...");
	j("これからどうする? どうなる?");
	n(". . .");

	Choose({
		"別れよう。": function(message){
			$.breaking_up_soon = true;

			n(message);

			j("おい、嘘だろ、考え直そう...");
			n("君のためなんだ。こんなことに君を巻き込みたくないんだよ。");
			j("せめて、「ずっと友達でいよう」なんて書かないでくれ。");
			n("ずっと友達でい");
			n(". . .");
			j("だって、そうだろう。友達なのは当然じゃないか。当たり前だろ。");
			n(". . .");
			What_Now_3();
		},
		"ずっと一緒にいよう。": function(message){
			n("ずっと一緒にいよう。できる限り。");

			j(". . .");
			j("僕らにできる限り、ずっと。");
			n(". . .");
			What_Now_3();
		},
		"わからない。": function(message){
			$.breaking_up_soon = true;

			n(message);

			j(". . .");
			What_Now_3();
		}
	});

}

function What_Now_3(){

	n("夜も遅い。");
	n("もう寝るよ。今日はたっぷり寝たいんだ。");
	j("わかった。");
	j(". . .");
	j("ニッキー、愛してるよ。");
	n("僕も愛しているよ、ジャック。");
	
	var insult = "";
	if($.hippies) insult+="ニューエイジヒッピー";
	if($.im_a_poet) insult+="詩人";
	if(insult!=""){
		n(insult+"さん。");
	}else{
		n("お馬鹿さん。");
	}

	The_Game_Ends();

}

function The_Game_Ends(){
	Wait(500);
	Start_Outro();
}

