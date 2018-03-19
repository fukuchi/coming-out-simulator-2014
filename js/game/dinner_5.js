// Dad's home!
// Calm conversation about going to the movies.
// Mother brings up tutoring and/or school. (if you try to bring anyting up, it'll skip to this.)
// Argue or agree?
// Everything in the past hour comes crashing back.
// You can attempt to blame them, too. (but they justify it all)
// Agree (calm dinner) --- Stressed Dinner, storms off --- Punches you in the damn face.

function Start_Dinner_5(){

	PlaySound("sfx","dinner_door");
	
	f("ただいま母さん、ニッキー!");
	f("帰ったぞ!");
	
	Show("dad","dad_serious");

	m("お帰りなさい、あなた。");
	n("よう父さん、今日はどうした?");

	f("残業だよ。上司がちゃんと勤務評価につけてくれればいいんだが。");
	f("本当は Web ゲームで遊んでただけなんだけどな。ハハハッ!");
	n("あはは。");

	f("ニッキー、お前もちょっとは面白い Web ゲームを作ったらどうなんだ?");

	Choose({
		"十分面白いと思うけど...": function(message){
			n(message);
			f("なら、お前のセンスはちょっとおかしいんだな! ハッハッハ!");
			n(". . .");
			Casual();
		},
		"面白いばかりがゲームじゃないだろ。": function(message){
			n(message);
			f("おお、そうだ、もちろんその通りだ。");
			f("出来の悪いゲームは面白くないもんだ。ハッハッハ!");
			n(". . .");
			Casual();
		},
		"アートだ!": function(message){
			n(message);
			f("プッ。アートになんの意味がある?");
			f("次にお前は、素人まるだしのバカバカしい詩かなんかでも書くんだろう。");
			n(". . .");
			Casual();
		}
	});

}

function Casual(){
	
	f("おい母さん、その皿にかかってるのはなんのソースなんだい?");
	f("その...");

	Show("clock_time","clock_1950");

	Choose({
		"ゲロだよ。": function(message){
			
			n(message);

			$.grounded = 2;
			f("ニッキー! 一週間の外出禁止だ!");
			f("母さんの料理をそんな風にけなすもんじゃない。");
			f("母さんも自分が作った料理を食べているんだ。それ以上責めるなよ。ハッハッハ!");

			Casual_2();

		},
		"食べちゃダメだ! ヤバいって。": function(message){
			
			n(message);

			$.grounded = 1;
			f("ニッキー! 明日は外出禁止だ!");
			f("お前には敬意が足りない。母さんの料理を少しは敬えよ。");
			f("いくら見た目がひどくても、意外に食える、って可能性だってなくはないだろ? ハッハッハ!");

			Casual_2();

		},
		"味見してみたら?": function(message){
			
			n(message);

			$.grounded = 0;
			m("ニッキー...");
			f("どれ、それじゃ遠慮なく。");
			f("[一匙食べる]");
			f(". . .");
			n(". . .");
			m(". . .");
			f("おい、またずいぶんとマズく作ったな。ハッハッハ!");

			Casual_2();

		}
	});

}

function Casual_2(){
	
	m("あなた...");
	f("さて息子よ! 学校はどうだ、ん?");

	Choose({
		"うまくやってるよ。": function(message){

			n(message);

			f("ほんとか?");
			if($.studying_subject!=$.studying_subject_2){
				f($.studying_subject+"と"+$.studying_subject_2+"の成績はどうなんだ?");
			}else{
				f($.studying_subject+"の成績はどうなんだ?");
			}

			m("ニッキーとちょうどその話をしてたのよ。");
			Getting_A_Tutor();

		},
		"明日は友達のところで勉強するよ。": function(message){
			n(message);

			$.tried_talking_about_it = true;

			if($.grounded>0){

				if($.grounded==1){
					f("忘れたのか? 明日は外出禁止と言ったはずだぞ。");
				}
				if($.grounded==2){
					f("忘れたのか? 一週間の外出禁止と言ったはずだぞ。");
				}
				f("間抜けなところは母さんに似たんだな。ハッハッハ!");
				
				n("でも、僕...");

				$.grounded++;
				if($.grounded==2){
					f("まだ足りないようだな。お前は一週間外出禁止だ。");
				}
				if($.grounded==3){
					f("まだ足りないようだな。お前は二週間外出禁止だ。");
				}

			}

			m("勉強のことについて話しましょう...");
			Getting_A_Tutor();

		},
		"僕はバイでジャックとヤってるんだ。": function(message){
			$.tried_talking_about_it = true;

			Show("nicky","dinner_nicky_outrage");
			n("父さん、僕はバイ—");
			Show("nicky","dinner_nicky_sit");

			m("バイシクルで学校に行くって、来週から。");
			f("お、いいじゃないか。");
			f("少しは体重を落とさないと、女の子にモテないだろ?");
			f("太りやすいのは母さんに似たんだな。ハッハッハッ!");
			n("ハハハ...");
			m("その学校のことだけど...");
			Getting_A_Tutor();
		}

	});

}

function Getting_A_Tutor(){

	m("家庭教師のことについてニッキーに話してたのよ。");
	f("ああ! 例のクレアって娘か?");

	// Oh dang!
	Show("nicky","dinner_nicky_defiant");

	switch($.promise_silence){
		case "yes":
			n("母さん、そのことは話さないって約束だろ...");
			if($.tried_talking_about_it){
				m("<strong>あなたが</strong>先に話そうとしたでしょ。");
			}
			break;
		case "no":
			n("母さん、そのことは話さないって...");
			m("あなたは約束しなかったじゃない。");
			break;
		case "tit for tat":
			n("母さん、母さんが言わなきゃ僕も話さない、そういう約束だったじゃないか...");
			if($.tried_talking_about_it){
				m("<strong>あなたが</strong>言おうとしてたじゃない。");
			}
			break;
	}

	f("なんのことだ?...");
	f("俺はこの家の主人だ。二人とも、俺に隠しごとをするのは許さんぞ。");
	m("あの...ニッキーは、クレアのことを好きみたいなのよ。本当よ。");

	Choose({
		"はぁ? んなワケないだろ!": function(message){
			n(message);
			f("あら、そんな照れなくても。");
			Getting_A_Tutor_2();
		},
		"くそ、わかったよ。そういうことさ。": function(message){
			n(message);
			Getting_A_Tutor_2();
		},
		"僕には彼氏がいるんだ。": function(message){
			n(message);
			f("そうか、我が息子よ! お前もいよいよ「彼氏」になるんだな!");
			n("僕に彼氏<strong>が</strong>いるんだって。<strong>僕に</strong>—");
			Getting_A_Tutor_2();
		}
	});

}

function Getting_A_Tutor_2(){
	
	f("お前も男になるときが来たな、息子よ!");
	f("俺もお前の歳だったら、母さんなんか放り投げてクレアの方を取るな。ハッハッ!");

	n("うわ、むっちゃキモ。");
	f("口の利き方に気をつけろよ? 張っ倒すぞこのガキが!");

	if($.changing_schools){
		m("ニッキーと、転校しましょうって話もしてたのよ。");
		m("クレアの通う学校へよ。");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("それにクレアは毎日、学校の後で"+$.studying_subject+"と"+$.studying_subject_2+"を教えてくれることになってるのよ。");
	}else{
		m("それにクレアは毎日、学校の後で"+$.studying_subject+"を教えてくれることになってるのよ。");
	}

	f("ニッキー、お前はどうなんだ。イエスかノーか?");
	m("ニッキーはもちろん—");
	f("母さんは黙ってろ。俺は息子に聞いてるんだ。");
	m(". . .");

	Show("dad","dad_threat");

	f("さて、ニコラス・リオウよ。");
	if($.changing_schools){
		f("お前は家庭教師の娘の尻を追って転校したいのかね?");
	}else{
		f("お前は学校の後で家庭教師の娘とお熱い時間を過ごしたいかね?");
	}

	n("そんな簡単な話じゃないんだよ。僕は—");
	f("あいまいな答で誤魔化すのは無しだぞ。");
	f("イエスか、ノーか。");

	n(". . .");

	Choose({
		"イエス。": Agree_With_Dad,
		"ノー。": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("...イエス。");

	f("ふむ。");
	f("お前達、人生の大きな決断をずいぶんと躍起になってするんだな。");
	f("そんなに焦って、一時間も経たずに決めて、しかも俺に黙って、だ。なにをそんなに急いでるんだ。");
	m(". . .");
	n(". . .");

	f("ニッキー、お前、なにかやらかしたな?");
	f("いったい何をやったんだ。");

	Choose({
		"中間試験を落としたんだよ。": function(message){
			
			n(message);

			f("...へぇ.");
			f("そうか、そしたら取り戻さないとな。");

			Show("dad","dad_serious");

			f("それか母さんみたいに教師にでもなるしかないな、ハハハ!");
			n(". . .");
			Agreeable_Ending();

		},
		"ジャックとセックスしたんだ。": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("[泣く]");
			f(". . .");
			Argument_Ending();

		},
		"クレアとセックスしたんだ。": function(message){
			
			n(message);
			
			m("...ニッキー!");
			f(". . .");
			f("やったな!!!");
			m("...あなた!");
			f("ちょっと待て、おい、まさか妊娠させたんじゃないだろうな?");
			n("いいや、そこまで馬鹿じゃないよ。");
			
			Show("dad","dad_serious");

			f("ならいい。下手すりゃ向こう二十年は子供の世話しないといけないところだ。俺みたいにな! ハッハッハ!");
			n("ハハ...");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("そういやニッキー。お前、ジャックとかいうヒッピーの友達と、クサかなんか吸っただろう!");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	f("さて!");
	f("今週末は映画に行かないか? 「インセプション」ってのがいいらしいぞ。");

	Choose({	
		"いいね! 観たかったんだよ。": function(message){
			n(message);
			f("なら計画を立てろ!");
			f("おいニッキー、その映画に誰が出てるか知ってるか?");
			n("ええと、レオナルド・ディカプリオ?");
			f("違う違う、エレン・ペイジのことさ。");
			f("クレアはちょっと彼女に似てるだろ?");
			n("かもね。");
			Dinner_Ending();
		},
		"ええと...違う映画にしようよ...": function(message){
			n(message);
			f("ん? インセプションはお前にゃちょっと難しいか?");
			n("そんな...");
			if($.studying_subject!=$.studying_subject_2){
				f("そりゃな、なんせ"+$.studying_subject+"と"+$.studying_subject_2+"を落とすくらいだもんな...");
			}else{
				f("そりゃな、なんせ"+$.studying_subject+"を落とすくらいだもんな...");
			}
			f("だけどな、ただの<strong>映画だぞ</strong>!");
			f("そこまで母さんの馬鹿を受け継いでる訳じゃあるまい? ハッハッ!");
			n("ハハハ...");
			Dinner_Ending();
		},
		"インセプションはもう観たよ。": function(message){
			n(message);
			f("おお、そうか...");
			f("特別なお友達のクレアちゃんとデートで観てきましたってか?");
			n("うん。");
			n("特別な友達とのデートさ。");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("...ノー。");

	f("なんだって?");
	n("違うんだ。母さんは僕を転校させて、ジャックにもう会わせないつもりなんだ。");
	f("ジャック?");
	n("僕の友達だよ。");

	Choose({
		"ボーイフレンドなんだ。": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("[泣く]");

			m("ジャックが息子をたぶらかしたのよ!");
			f("そのガキが選んだ人生だ、どうでもいい。だがニッキー、お前にその自由はないぞ。");
			Argument_Ending();
		},
		"母さんは奴がゲイだから嫌いなんだ。": function(message){

			n("母さんは奴がただゲイだってだけで嫌ってるんだ。");

			Show("mom","mom_cry");
			m("[泣く]");

			f("お前、母さんを泣かしたな。");
			if($.hippies){
				m("それにあの人の親は麻薬中毒なのよ!");
			}
			f("ジャックが選んだ人生だ、どうでもいい。だがニッキー、お前にその自由はないぞ。");
			Argument_Ending();
		},
		"母さんは奴がゲイだと思ってるんだ。": function(message){

			n("母さんは奴をゲイだと思いこんでいて、だから奴を嫌ってるんだ。");

			Show("mom","mom_cry");
			m("[泣く]");

			m("間違いなくゲイよ!");
			if($.hippies){
				m("それにあの人の親は麻薬中毒なのよ!");
			}
			f("ジャックが選んだ人生だ、どうでもいい。だがニッキー、お前にその自由はないぞ。");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n(". . .");

	if($.top_or_bottom=="top"){
		m("ジャックの方が女役なのよ、ニッキーじゃなくて...");
	}
	switch($.what_are_you){
		case "bisexual":
			m("ニッキーは完全にゲイじゃないのよ、女の子にもまだ興味があるってさっき言ったわよね?!");
			n(". . .");
			break;
		case "confused":
			m("ニッキーはさっき、まだよくわからないって言ってたわ!");
			f("ふん、明らかにそのようだな。");
			n(". . .");
			break;
		case "son":
			n("待てよ、さっきも母さんに言ったけど、僕はあんたらの息子だ。それで十分—");
			break;
	}
	
	f("ニッキー、お前は転校するんだ。");
	n(". . .");
	m("うう... うう... うう...");

	f("母さんと俺とで、お前のメールやらなんやら、抜き打ちで検査することにする。");
	n(". . .");
	m("うっ... うっ...");

	f("いいか、クレアに余分に金を払ってでも、お前をストレートに戻させてやる。絶対に、だ。");
	n(". . .");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("さっき私のこと、嘘泣きしてるって言ったのよ!");
		f("お前のことはどうでもいい、黙ってろ。");
	}
	if($.crying=="mocking"){
		m("私がさっき泣いてるとき、からかったのよ、私のことを!");
		f("お前のことはどうでもいい、黙ってろ。");
	}

	f("それでだ、ニッキー。");
	f("なにか言いたいことはあるか? もうおしまいか? どうだ?");

	Choose({
		"ああ。クソッタレだ、糞野郎。": function(message){

			n("ああ。");
			n("クソッタレだ。全部。");
			n("この糞野郎。");
			
			Show("nicky","dinner_nicky_outrage");
			n("二人とも糞だ、自分のことばかりで、ただのクソ—");
			
			Dinner_Ending_Punch();

		},
		"いや。罰を受け入れるよ。": function(message){

			n(message);
			f("よし。ちょっとは男らしいところを見せたな。");
			n(". . .");

			Show("dad","dad_serious");

			m("グスッ...");
			f("ちょっとバーにでも行って、ちっとはマシなものを食ってくる。");

			Show("dad",null);

			f("我が愛しの女房よ、お前の料理はクソだ。");
			PlaySound("sfx","dinner_door");

			m(". . .");
			
			Show("mom","mom_cry");

			m("うぎゃあああー!");
			
			Dinner_Ending();

		},
		"僕を傷つけることはできないよ。": function(message){

			n(message);
			f(". . .");
			m("あなた、やめて...");
			f("強く出たな、息子よ。");
			m("あなた、本当にやめて!");
			f("逃げ出すかと思ったが、まだ男らしいところも残ってるじゃないか。");
			m("やめて! 私のせいなのよ! 本当に—");
			f("後で腫れたところを冷やしとけよ。");
			m("あなた!");
			
			Dinner_Ending_Punch();

		}
	});

}

function Dinner_Ending_Punch(){

	Wait(500);

	queue(ClearDialogue,0);

	StopSound("clock");
	PlaySound("sfx","dinner_punch");

	Show("dad",null);
	Show("mom","mom_cry");
	Show("nicky","dinner_nicky_punched");
	Show("dinner_punch_arm","dinner_punch_arm",{x:0,y:300});
	
	$.punched = true;
	Dinner_Ending();	
	
}

function Dinner_Ending(){

	Wait(500);

	queue(ClearDialogue,0);

	Wait(500);

	PlaySound("clock","dinner_meowing",{loop:-1});
	Show("clock","clock_meowing");
	Show("clock_time","clock_2000");

	Wait(1000);

	Clear();
	Start_Jack_2();

}

