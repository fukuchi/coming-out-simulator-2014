function Start(){

	$ = {};
	
	/////// SET UP SCENE ////////

	Show("background","coffeehouse");
	Show("cup","cup_steam",{x:44,y:359});
	Show("nicky","coffee_nicky_still");

	PlaySound("bg","coffeehouse",{loop:-1, volume:0.7});

	//////////////////////////////

	N("<b>COMING OUT SIMULATOR 2014</b>");
	N("「半分の真実」についての、半分本当のゲーム。");
	N("やあプレイヤー、このゲームへようこそ。なんてね。");
	N("さて、まずはなにをしたい?");

	Choose({
		"さっそくプレイしよう!": Play,
		"君は誰? (作者紹介)": function(){
			Credits("君は誰?");
		},
		"もうちょい詳しく。(このゲームについて)": function(){
			About("もうちょい詳しく。");
		}
	});

}

function SipCoffee(message){
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);
	PlaySound("sfx","coffee_sip");
	p(message);
	Show("nicky","coffee_nicky_still");
	Show("cup","cup_steam");
}

function Play(message){
	
	SipCoffee(message);

	// Asked neither
	if(!$.asked_about && !$.asked_credits){
		N("気が早いね!その調子!");
		N("「作者紹介」なんか読んで時間を無駄にしたくないと。他にも「このゲームについて」とか...");
		p("いいから。");
		N("わかったわかった。");
	}
	// Asked both
	if($.asked_about && $.asked_credits){
		p(". . .");
		p("これしか選択肢が残ってないのに、なんでわざわざクリックさせたの?");
		N("さあてね。");
	// Asked either
	}else if($.asked_about || $.asked_credits){
		N("よし、始めよう!");
	}

	N("あれは今から四年前、2010年のことだった...");
	p("四年前だって?!");
	N("...その日の晩に、僕の人生は永遠に変わってしまった。");

	N("さてプレイヤー君、この物語はどんな風に終わると思う?");

	Choose({
		"ゲイらしく、お花と虹とユニコーンがいっぱい?": function(message){
			$.main_menu_convo_1 = 1;

			p(message);
			N("よく分かったね。その通り、このゲームのエンディングはそんな感じだ。");
			p("マジ?");
			N("嘘。");
			Play_2();
		},
		"今みたいに、スタバでネットだろ。": function(message){
			$.main_menu_convo_1 = 2;

			p(message);
			N("ちょ、僕は今プログラム書いてるんだよ。かつて僕の身に起きた出来事を、こうやって君がいまプレイしているゲームとして作り変えているんだ。");
			p("へー、サボってるようにしか見えないけど。");
			N("お互い様だろ。");
			p("へいへい。");
			N("とにかく...");
			Play_2();
		},
		"流血沙汰の大惨事!": function(message){
			$.main_menu_convo_1 = 3;

			p(message);
			N("ハハッ、それに比べりゃこの物語はそこまで悲劇的じゃないってことになるかな。");
			N("もちろん、せいいっぱいに楽観的に考えて、ってことだけど。");
			p("血ィがー血ィがー");
			N("とにかく...");
			Play_2();
		}
	});

}

function Play_2(){

	if(!$.asked_about){
		N("君が「このゲームについて」を選んでいてくれたら、このゲームがとても個人的なストーリーについてのものだと、わかってもらえたんだけどね。");
		p("チッ。");
	}

	N("このゲームには、僕が両親や元カレと交わした会話を再現したものが含まれている。");
	N("もちろん、こう言えば良かった、ああ言うべきだった、そして絶対に言うべきでなかった言葉も、ゲームには入れてある。");
	N("どの言葉がそのどれにあてはまるかは、どうでもいい。");
	N("今となってはね。");

	Choose({
		"How can I win a game with no right answers?": function(message){
			$.main_menu_convo_2 = 2;

			p(message);
			N("Exactly.");
			p(". . .");
			Play_3();
		},
		"You're a bit of a downer, aren't you?": function(message){
			$.main_menu_convo_2 = 1;

			p(message);
			N("LIFE is a bit of a downer.");
			p("So that's a yes.");
			Play_3();
		},
		"This 'true' game is full of lies?": function(message){
			$.main_menu_convo_2 = 3;

			p(message);
			N("Even if the dialogue was 100% accurate, it'd still be 100% lies.");
			p(". . .");
			Play_3();
		}
	});

}

function Play_3(){

	N("You'll be playing as me, circa 2010.");
	if(!$.asked_credits){
		N("Because you skipped the Credits, my (not-yet-legal) name is Nicky Case. Just so you know.");
		p("Shush.");
	}

	var whatISay;
	switch($.main_menu_convo_1){
		case 1: whatISay = "This game doesn't end with gay unicorns. "; break;
		case 2: whatISay = "This game is a coming-out, a coming-of-age, a coming-to-terms. "; break;
		case 3: whatISay = "This game ends not in blood, but in tears. "; break;
	}
	switch($.main_menu_convo_2){
		case 1: whatISay += "Sorry for being a bit of a downer."; break;
		case 2: whatISay += "And there are no right answers."; break;
		case 3: whatISay += "And it's full of lies."; break;
	}
	N(whatISay);

	PlaySound("sfx","coffee_sip");
	Show("nicky","coffee_nicky_drink");
	Show("cup",null);

	p("Hey, I just said that!");

	// HACK - Just clear dialogue & stuff.
	Wait(1000);
	queue(ClearDialogue,0);

	Wait(500);
	Show("nicky","coffee_nicky_throw");
	PlaySound("sfx","coffee_throw");
	
	Wait(1000);
	Show("nicky","coffee_nicky_still_2");
	Wait(500);
	
	N("When you play...");
	N("Choose your words wisely.");
	N("Every character will remember everything you say. Or don't say.");
	p("Yeah. You even brought up my choices in this MAIN MENU.");
	N("Exactly.");

	N(". . .");
	N("Some things are hard not to remember.");
	
	Clear();
	Start_Jack_1();

}

function Credits(message){

	$.asked_credits = true;
	
	if($.asked_about){
		SipCoffee(message);
	}else{
		SipCoffee("君は誰?");
	}
	
	N("おっとこりゃ失礼。それでは自己紹介しよう。");
	N("僕の名前は Nicky Case。");
	N("法律上の名前はそうじゃないんだけど、これは僕の本当の名前だ。");

	p("イミフだな、おい。");
	if($.asked_about){
		p("それで、さっき君が言ったように、これは君自身の物語なのかい?");
	}else{
		p("それでこのゲームは君が作ったの?");
	}

	N("そう。この僕が「Coming Out Simulator 2014」の作者でありプログラマーだ。");

	if($.asked_about){
		p("ぜんぶ自分で??");
		p("前にも言ったけど、君さぁ...");
		p("かなりのナルシストだよ。");
		N("あ、本当にぜんぶを自分でって訳じゃないんだ。");
		N("効果音はいろんな無料素材を使っている。");
	}else{
		N("もっとも効果音はいろんな無料素材を使っている。");
	}

	N("たしかに僕はこのゲームに出ずっぱりだけど...");
	N("...このゲームのストーリー自体は、沢山の人にも関わるものでもあるんだ。");

	if($.asked_about){
		Choose({
			"よしわかった、さっさとプレイしよう! いますぐ!": Play
		});
	}else{
		Choose({
			"よくわかったから、プレイしてもいい?": Play,
			"なぜこのゲームを作ったの? (このゲームについて)": function(){
				About("なぜこのゲームを作ったの?");
			}
		});
	}

}

function About(message){

	$.asked_about = true;

	SipCoffee(message);

	if($.asked_credits){
		N("僕は僕の物語を伝えたかったんだ。");
	}else{
		N("このゲームは...");
		N("...会話シミュレーターみたいなものだけど、実のところは...");
		N("...とても個人的な物語なんだ。");
	}
	
	p("なるほど。ナルシストっぽいな。");
	N("ふん、そうかもね。");

	if($.asked_credits){
		p("違うか。ナルシストってのは本名を出したがるもんだし。");
		N("さっきのは本当の名前だって—");
		p("はいはい、わかったよナルちゃん。");
	}

	N("このゲームは #Nar8 Game Jam っていう大会用に作ったんだ。大会があると作ろうって気になるだろ? 締切もあるし。");
	p("どうせ最終日まで手をつけずにぼんやりしてたんだろ。");
	N("そうだよ。");
	N("ともかく、このゲームは著作権を放棄している。パブリックドメインなんだ。");
	N("僕は自分のセクシャリティもオープンにしてるくらいだから、ソースコードもオープンなのさ。");

	p("それ、うまいこと言ったつもり?");
	N("「僕のこと開発してみない?」っていうプログラマージョーク、どう?");
	p("やめとけ。");

	if($.asked_credits){
		Choose({
			"いいからさっさとゲームを始めようぜ。": Play
		});
	}else{
		Choose({
			"冗談はおいといて、もうプレイできる?": Play,
			"で、君は誰なんだい? (作者紹介)": function(){
				Credits("で、君は誰なんだい?");
			}
		});
	}

}
