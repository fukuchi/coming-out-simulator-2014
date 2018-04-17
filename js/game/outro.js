// Then we broke up soon/X...
// Three stories (Lie / Truth / Half-truth) ... one interaction with each.
// Did you skip or not? Tie that into the sections.
// Your final choice, a whaaaaaat.

function Start_Outro(){

	// Just clear dialogue & stuff.
	queue(ClearScene,0);
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse_2");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	///////////////////////////////

	if($.breaking_up_soon){
		N("そして僕らは三日後に別れた。");
	}else{
		N("そして僕らは三週間後に別れた。");
	}

	// Weave - intro
	if($.main_menu_convo_1==1){
		p(". . .");
		N("言ったろ。この話はゲイのユニコーンで終わしはしないって。");
	}else if($.main_menu_convo_1==3){
		p(". . .");
		N("言ったろ。流血沙汰では終わりはしないって。涙も流れたし。");
	}else if($.main_menu_convo_2==1){
		p(". . .");
		N("君の言った通り、僕はダウナー系だったね。");
	}

	Choose({
		"胸が痛むよ。":function(message){
			p(message);
			N("痛みもじきに引くさ。だろ?");
			Closure();
		},
		"おいやめろよ、根に持つ奴だな。":function(message){
			p(message);
			N("否定はしないよ。");
			Closure();
		},
		"なんとなくそうじゃないかと思ってたよ...":function(message){
			p(message);
			N("そうだね... ジャックと僕も、そう思ってたよ。");
			Closure();
		}
	});

}

function Closure(){

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("げっ。");
	p("この吹き出しの色、君の親父さんのと同じ色じゃないか。嫌な気分だなこれ。");

	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("前にも言ったけど、ゲーム中のキャラクターは色々と変えてあるからね。");
	N("名前もぜんぶ変えてある。僕の以外はね。");
	N("僕の弟も出てこない。無関係だからね。");
	N("あと、父親をゲーム中に引っ張り出してるけど、本当は2010年より前に家を出てるんだ。");

	if($.main_menu_convo_2==3){
		N("君が言ったように、この「真実についてのゲーム」は、嘘だらけなんだよ。");
	}
	
	p("せめて、違う色にしてくれたって良かったんじゃないか?");
	N("あの夜から四年が経った...");
	N("その間に何が起きたと思う?");

	if($.main_menu_convo_2==2){
		N("大丈夫。最初に言ったように、正解なんてないんだから。");
	}

	$.coming_out_stories_left = 3;
	$.order_of_stories = [];

	Choose({
		"知るか。さっさと教えろよ。": function(message){
			p(message);
			N("いいよ、では何が起きたか教えてあげよう。");
			N("...そして何が起きて、それから何が起きたか。");
			p("なんだそりゃ。");
			Closure_Story();
		},
		"わかった、「きっとよくなる (It Gets Better&trade;)」?": function(message){
			p("あ、わかった。「きっとよくなる (It Gets Better&trade;)」キャンペーンみたいな話?");
			N("その通り! これから「何が起きたか」をバージョン違いで三つ話すけど、そのどれもがそれだ。");
			p("なんだそりゃ。");
			Closure_Story();
		},
		"お花と虹とユニコーン?": function(message){
			p(message);
			N("その通り! これから三つのバージョンの「何が起きたか」を話すけど、少くともその一つはそうだ。");
			p("だろうね。");
			Closure_Story();
		}
	});

}

function Closure_Story(){

	if($.coming_out_stories_left==3){
		N("カミングアウト後の物語、最初にどれから聞きたい?");
		N("大丈夫。最終的には三つとも聞くことはできるから。");
	}else if($.coming_out_stories_left==2){
		N("じゃ、次にどのバージョンを聞きたい?");
	}else if($.coming_out_stories_left==1){
		N("それでは最後の物語を話すよ...");
	}else{
		Finale_1();
		return;
	}

	$.coming_out_stories_left -= 1;

	var options = [];
	if(!$.told_story_lie) options["「嘘」"]=Tell_Me_A_Lie;
	if(!$.told_story_truth) options["「真実」"]=Tell_Me_A_Truth;
	if(!$.told_story_half_truth) options["「半分の真実」"]=Tell_Me_A_Half_Truth; 
	Choose(options);

}

function Is_Last_Story(){
	if($.coming_out_stories_left==0){
		if($.asked_about && $.asked_credits){
			p("またかよ、一つしか選択肢がないのにそれをクリックさせ...");
		}else{
			p("これしか選択肢が残ってないのに、なんでわざわざクリックさせたの?");
			N("さあてね。続けるよ?");
		}
	}
}



function Tell_Me_A_Lie(message){

	$.told_story_lie = true;
	$.order_of_stories.push("lie");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("いいだろう。");
	Is_Last_Story();

	N("僕は家を飛び出した。カバンいっぱいに食べられるセクシー下着だけ詰め込んでね。");
	if($.im_a_poet){
		N("カナダ中をあてどもなくさまよった。放浪者向けのアマチュア詩を書いて食いつなぎながら。");
	}else{
		N("カナダ中をあてどもなくさまよった。たいして面白くもないWebゲームを作って食いつなぎながら。");
	}
	N("花を食べた。虹を追いかけた。ホモのユニコーンと友達になった。");
	p(". . .");
	N("最後にアラスカで、ボニーとクライドって名前のバイのカップルに出会ったんだ。");
	N("ボニーは30半ばの肉食系女で、クライドは40ちょいのエロおやじ。どっちも若いペットを探してたのさ。");

	// FAMILY WITH BENEFITS
	// Weave in -- top or bottom

	Choose({
		"君の下着は衣食両用だったんだね。": function(message){
			$.outro_convo_lie = 1;
			p(message);
			N("発想が柔軟だろ。カバンのスペースを倍に使えるんだ。");
			Tell_Me_A_Lie_2();
		},
		"この話はフラクタルで不埒だな。": function(message){
			$.outro_convo_lie = 2;
			p(message);
			N("僕が語ってるんだ。僕がルールさ。");
			Tell_Me_A_Lie_2();
		},
		"...「エロおやじ」ね。": function(message){
			$.outro_convo_lie = 3;
			p(message);
			N("正確には「ホモエロおやじ」だな。");
			Tell_Me_A_Lie_2();
		}
	});
}
function Tell_Me_A_Lie_2(){
	
	N("彼らは僕を養子に迎えて、フルタイムのお稚児さんにしたって訳さ。");

	if($.outro_convo_lie==1){
		p("...なるほど。そこでも君の、その、柔軟性が役立ったんだな。");
	}

	switch($.top_or_bottom){
		case "top": N("わかるだろ、僕は彼らを「女」にして、楽しませてもらったよ。"); break;
		case "bottom": N("わかるだろ。僕はもっぱら「女」役を楽しんだ。"); break;
		case "versatile": N("わかるだろ、僕らは交わりばんこで「女」役になって楽しんでたんだ。"); break;
	}

	N("彼らは僕を愛情こめて育ててくれて、そうして僕は大人になった。");

	switch($.outro_convo_lie){
		case 2: p("フラクタルよろしく、話の細部を掘り起こしていくとさらに不埒な話が出てくるんだろうな。"); break;
		case 3: p("...「エロおやじ」。"); break;
	}

	N("彼らは僕の新しい家族だった。");
	N("家族... セフレならぬ「セファミ」ってところだけど。");

	p(". . .");

	Closure_Story();

}





function Tell_Me_A_Truth(message){

	$.told_story_truth = true;
	$.order_of_stories.push("truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("それじゃあ始めようか。");
	Is_Last_Story();

	N("僕はジャックのアドバイスに従って、インセプションをパロった「変な Web ゲーム」を作った。\"Reimagine :The Game:\"ってのがそれだ。");
	switch($.inception_answer){
		case "awake": N("コブは最後に現実世界に戻れたって言わなかったっけ。"); break;
		case "dream": N("結局のところ、あの映画はぜんぶがただの夢だ、って言わなかったっけ。"); break;
		case "neither": N("コブにとってあれが夢なのか現実なのかは、今でもやっぱりどうでもいいって思うよ。"); break;
	}
	N("\"Reimagine :The Game:\" はネットで悪名を轟かせたね! 僕のポートフォリオのいいネタになったよ。");
	N("数ヶ月後、ベイエリアでエレクトロニック・アーツ(EA)でのインターンシップに受かることができた。カナダの家族からは遠く離れてね。");

	Choose({
		"うへっ、エレクトロニック・アーツ...?": function(message){
			$.outro_convo_truth = 3;
			p(message);

			N("はいはい、わかってる、わかってるって。");
			N("あんなアート臭い系クソインディーゲームを作ってしまった罪深さは十分自覚しているよ。");
			p("しっかり悔い改めろよ、クソ。");
			Tell_Me_A_Truth_2();
		},
		"それにベイエリアならLGBTにもっと優しいしな。": function(message){
			$.outro_convo_truth = 2;
			p(message);

			N("だからみんな「ゲイエリア」って呼んでるんだ。");
			p("えーと... 誰もそんな風に呼んでないだろ。");
			Tell_Me_A_Truth_2();
		},
		"EA! いいね。「シムズ」作ったところだろ?": function(message){
			$.outro_convo_truth = 1;
			p(message);

			N("その通り! でも僕はそれには関わってなくて、僕がいたチームは Web 版の—");
			N("[禁則事項]");
			p("えっ...");
			Tell_Me_A_Truth_2();
		}
	});

}
function Tell_Me_A_Truth_2(){
	
	N("EA の後、僕はインディーにまた戻った。");
	N("でも EA で知り合った友達とは連絡を取り続けてて、ベイエリアにとどまっていた。");

	N("僕の技術は向上した。");
	N("社会的にも成長した。");
	N("そして... こんな感じで僕自身のアイデンティティも形作り始めた。");

	switch($.outro_convo_truth){
		case 1: p("なるほどね。僕は「禁則事項」ゲームの方も気になるけどね。"); break;
		case 2: p("でも真面目な話、誰も「ゲイエリア」なんて言わない。"); break;
		case 3: p("でも真面目な話、エレクトロニック・アーツ。うげぇ。"); break;
	}

	Closure_Story();

}





function Tell_Me_A_Half_Truth(message){
	$.told_story_half_truth = true;
	$.order_of_stories.push("half-truth");

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");

	N("仰せの通りに。");
	Is_Last_Story();

	N("クレアは、運命というのは皮肉なもので、やっぱりバイセクシャルだったんだ。");
	N("僕らは"+$.studying_subject+"の勉強の合間に、お互いの境遇について語り合った。");

	p("そりゃ皮肉が効いてるね!");

	N("クレアも自分の性的指向については自分でもよくわかってなくてね、僕のように。");
	N("僕らはそんなに経験を積んでなかった。クレアは女としか付き合ったことがなかったし、僕はジャックだけだ。");

	// CLAIRE AND I HELPED EACH OTHER EXPLORE OURSELVES, LESS GUILT, MORE EXPERIENCE.
	// Weave in -- studying what

	Choose({
		"君とそっくりだな、逆だけど...": function(message){
			$.outro_convo_half_truth = 1;
			p(message);
			N("うーん、逆だったらそっくりにはならないんじゃない?");
			p("俺の言ってる意味はわかってるだろ。");
			N("ともかく、クレアと僕はそれぞれの経験について教え合った。");
			Tell_Me_A_Half_Truth_2();
		},
		"お互いに相手の世界を教え合った?": function(message){
			$.outro_convo_half_truth = 3;
			p(message);
			Tell_Me_A_Half_Truth_2();
		},
		"ついにはセクシーな時間を一緒に過ごすようになった?": function(message){
			$.outro_convo_half_truth = 2;
			p(message);
			N("いや。彼女は妹みたいなもんだった。セックスの相手としてみなさない方の妹ね。");
			p("お前... そこわざわざ断わらなくていいよ。");
			N("ともかく、クレアと僕はそれぞれの経験について教え合った。");
			Tell_Me_A_Half_Truth_2();
		}
	});

}
function Tell_Me_A_Half_Truth_2(){
	
	N("ついでにテクも教え合ったんだろ!");
	N("ああ... 指で相手を誘う仕草とか、上あごのところで相手のを上手に刺激する方法とか。");
	p("そこまで細かく言えとは言ってないだろ...");

	if($.changing_schools || !$.father_oblivious){
		N("最終的に、僕は彼女の学校へ転校した。");
	}

	N("We were best friends. We still are! We've now both moved to the US, far away from our hateful families.");
	N("Together, we helped each other overcome our insecurities, and discover who we were...");
	N("Proud bisexual sluts.");

	p("What a touching story. I think.");
	
	N("And of course, we wingman/wingwoman for each other.");

	p(". . .");

	Closure_Story();

}





function Finale_1(){
	
	N("And that's the last of the post-coming-out stories!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);
	
	Show("cup",null);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");

	Wait(1000);
	Show("nicky","coffee_nicky_still_2");

	//////////////////////////

	N("Dear player, I couldn't help but notice...");
	if($.order_of_stories[0]=="truth"){
		N("You went straight for the Truth first.");
	}else if($.order_of_stories[2]=="truth"){
		N("You saved the Truth for last.");
	}else if($.order_of_stories[0]=="lie"){
		N("You wanted to hear the Lie first.");
	}else{
		N("You saved the Lie for last.");
	}
	N("What does that say about you?...");
	p(". . .");

	p("You know... usually when a game gives you multiple endings, they don't do them ALL AT ONCE.");
	N("Hah! You thought these were ENDINGS?");

	Choose({
		"Let me guess... This Is Just The Beginning?": function(message){
			p(message);
			N("This is just the begi-- oh. Okay, yeah.");
			Finale_2();
		},
		"Well yeah. This game's over, right?": function(message){
			p(message);
			N("True... but the story, which is my story, my life, continues.");
			Finale_2();
		},
		"oh god how long IS this damn game.": function(message){
			p(message);
			N("Don't worry. Your next choice is the very last one, I swear.");
			Finale_2();
		}
	});

}

function Finale_2(){

	Show("nicky","coffee_nicky_packup_1");

	N(". . .");
	N("You know, if I could go back and relive all my other possible choices...");
	N("... which in a sense, I did, by writing this game...");
	N("... I wouldn't change a thing.");

	Show("nicky","coffee_nicky_packup_2");

	// SERIOUSNESS.
	PlaySound("sfx","laptop_shut");
	PlaySound("bg","bedroom_1",{loop:-1, volume:0.4});

	p("? ? ?");

	if($.punched){
		N("My texts getting read. Being forced to change schools. Getting punched in the face.");
	}else if($.father_oblivious==false){
		N("My texts getting read. Being forced to change schools. All the verbal abuse.");
	}else if($.changing_schools){
		N("My texts getting read. Being forced to change schools. The attempted 'gay rehab' with Claire.");	
	}else{
		N("My texts getting read. No more after-school hours to myself. The attempted 'gay rehab' with Claire.");
	}

	N("In a Stockholm Syndrome sort of sense... I'm grateful for it all.");

	Choose({
		"what.": Finale_3,
		"whaaat.": Finale_3,
		"whaaaaaaaaaaaaaaat.": Finale_3
	});

}

function Finale_3(message){

	p(message);

	PlaySound("sfx","laptop_pack");
	Show("nicky","coffee_nicky_packup_3");

	N("Yes, really!");
	N("I wouldn't have been so motivated to forge my own life... if my previous life wasn't total utter shit.");

	PlaySound("sfx","laptop_pack_2");
	Show("nicky","coffee_nicky_packup_4");

	N("Later in 2010, Dan Savage launched the It Gets Better&trade; campaign.");
	N("My three stories... Lie, Truth, Half-Truth... they're all at least true about one thing.");
	N("It does get better.");

	p(". . .");

	N("And...");
	N("At the end...");
	N("Of this long, stupid, painful game...");
	N("Where I played against people who should have been on my side...");

	p(". . .");

	N("I won.");
	N(". . .");
	N("I won.");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	// CUTSCENE -- MY NEW BOYFRIEND
	Wait(1000);
	
	PlaySound("sfx2","laptop_pack");
	Show("nicky","coffee_nicky_date_1");
	Wait(1000);
	
	PlaySound("sfx","step_2");
	Show("nicky","coffee_nicky_date_2");
	Wait(1000);
	
	PlaySound("sfx","step_1");
	Show("nicky","coffee_nicky_date_3");
	Wait(1000);
	
	PlaySound("sfx","step_2",{volume:0.75});
	Show("nicky","coffee_nicky_date_4");
	Wait(1000);

	PlaySound("sfx","step_1",{volume:0.5});
	Show("nicky",null);
	Wait(1000);

	PlaySound("sfx","step_2",{volume:0.25});
	Choose({
		"REPLAY?": Finale_4
	});

}
function Finale_4(message){
	
	p(message);
	N("Real life has no replays.");

	Wait(800);
	queue(function(){
		document.getElementById("game").setAttribute("screen","blank");
	},1000);
	//queue(ClearScene,0); // coz the sound's cool!
	queue(function(){
		document.getElementById("game").setAttribute("screen","credits");
	},0);


}


