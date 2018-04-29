// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n(". . .");
	m("お父さんがほとんど家にいないのがいけないのね?");
	m("お手本になるような男性が近くにいないせいで、男とは何か、あなたは分からなくなっているんだわ...");

	Choose({
		"いいお手本だよ父さんは、ホント。": function(message){
			n(message);
			m("ニッキー、何をしようとあの人はあなたのお父さんなのよ。お父さんを愛しなさい。");
			My_Fault();
		},
		"人の心はそういうものじゃないよ。": function(message){
			n("人の心ってのはそういうものじゃないよ。どっちにしろ僕はバイになってたよ。");
			m("そんな事あなたに分かんないでしょ! あなた心理学者にでもなったつもり?!");
			My_Fault();
		},
		"ああ...そうかもね。": function(message){
			n(message);
			m("そうよ...");
			My_Fault();
		}
	});

}

function My_Fault(){
	
	Show("clock_time","clock_1930");

	n(". . .");
	m("私がいけないんだわ...");
	m("ああいうタイプの人に気をつけなさいと、もっと早く言ってあげるべきだったわ...");

	Show("mom","mom_cry");

	m("[すすり泣く]");
	m("ニッキー! かわいそうに!");

	Show("nicky","dinner_nicky_sit");

	Choose({
		"母さん...泣かないで...": Cry_1,
		"嘘泣きはやめろよ。": Cry_2,
		"[泣く]": Cry_3
	});
}

function Cry_1(message){

	$.crying = "sympathy";

	n(message);
	m("うっ...うっ...うっ...");
	n("ごめん。ジャックのこととか、嘘ついたこととか、ぜんぶ。");
	m("ううっ...ううっ...");
	n("ぜんぶ取り消すよ。");
	m("ぐすっ...");
	n("...ねえ...");
	What_Are_You();
}

function Cry_2(message){

	$.crying = "anger";
	Show("nicky","dinner_nicky_defiant");

	n(message);
	m("うっ...うっ...うっ...");
	n("ホント、わざとらしいよ。");
	m("ううっ...ううっ...");
	n("もう止めたら?!");
	m("ぐすっ...");
	n("止めろ。いますぐ。");
	What_Are_You();

}

function Cry_3(message){

	$.crying = "mocking";
	Show("nicky","dinner_nicky_outrage");

	n("しくしくしく。");
	m("うっ...うっ...うっ...");
	n("えーんえーん。");
	m("ううっ...ううっ...");
	n("うおおんうおおんえぐっえぐっえぐっあんぎゃああんぎゃあ。");
	m("ぐすっ...");

	Show("nicky","dinner_nicky_defiant");
	n("もう気が済んだ?");
	What_Are_You();

}

function What_Are_You(){

	m(". . .");
	m("ニッキー...結局あなたどうなの?");
	n("どうって、何が?");

	Show("nicky","dinner_nicky_sit");

	Show("mom","mom_sit");
	m("あなたは<i>どっち</i>なの?");

	Choose({
		"僕はバイセクシャルだ。": function(message){

			$.what_are_you = "bisexual";

			n(message);
			if($.admit_bisexuality){
				m("...それって、さっきも言ってたけど...");
			}
			n("女にも男にも性的に興味を持つ人ってことだよ。");
			m("どっちもなんておかしいわ。")
			m("どちらかを選ばないと。");
			n("そういうもんじゃないんだよ...とにかく。");
			Have_You_Had_Sex();

		},
		"よくわからないよ。": function(message){

			$.what_are_you = "confused";

			n(message);
			m("...そう。");
			m("ジャックにたぶらかされたのね、かわいそうに。");
			m("そのうちに治るわよね。");
			n(". . .");
			m("そう、そうよね...");
			Have_You_Had_Sex();

		},
		"僕はあんたの息子だ。くそっ。": function(message){

			$.what_are_you = "son";

			n(message);
			n(". . .");
			n("まだなんかあるか?");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m(". . .");
	m("ジャックとはセックスしたの?");
	Choose({
		"うん。": function(message){
			n(message);
			m("[ブッ]");
			Have_You_Had_Sex_2();
		},
		"いや。": function(message){
			n(message);
			m("嘘つかないで... メール見たのよ...");
			n("ちょっとエロいこと書いただけだろ、本当にはヤってない—");
			m("...写真も見たわ...");
			Have_You_Had_Sex_2();
		},
		"言いたくない。": function(message){
			n(message);
			m("そんな...やっぱりしたのね。");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n(". . .");
	m("あなた達のどっちが...女役なの?");

	Show("nicky","dinner_nicky_outrage");

	n("いい加減にしろ!");
	n("箸のどっちがスプーンでどっちがフォークかとか聞くか? 二本とも—");
	m("どっちなの?...");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"だいたいは僕が下だよ。":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"ジャックだよ、いつもは。":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("それっ...て、まだストレートに戻る可能性があるってことよね?...");
			m("だって...その...あなた、入れる方なんでしょ? その...");
			m("あなたの...");
			Throw_Up();
		},
		"どっちもやるよ。":function(message){
			$.top_or_bottom = "versatile";

			n(message);
			Throw_Up();
		}
	});
}

function Throw_Up(){

	PlaySound("sfx","dinner_vomit");

	Show("clock_time","clock_1940");
	Show("mom","mom_vomit");
	Show("table","dinner_table_2");
	Wait(1000);

	Choose({
		"うげ。": Father_Soon,
		"うげえ。": Father_Soon,
		"うげえええええええっ。": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m(". . .");
	m("お父さんがもうすぐ帰ってくるわ。");
	n("ご飯冷めちゃったよ。母さんが、その、戻したところ以外は。");
	m("お父さん遅かったし、きっと仕事で疲れて帰ってくるわ。");
	m("だから... 帰ってきたときに... お願い...");
	m("ぜんぶ秘密にしておいて。お父さんに言わないと約束して。");
	n(". . .");

	m("ジャックのこと、言っちゃだめよ。");

	switch($.what_are_you){
		case "bisexual":
			m("あなたがバイセクシャルだってこともよ。");
			break;
		case "confused":
			m("あなたが自分のセクシャリティがわからなくなってるってこともよ。");
			break;
		case "son":
			m("あなたがジャックとのことで、嘘をついていたってこともよ。");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("ジャックを女役にしているってことも。");
			break;
		case "bottom":
			m("ジャックとするとき、あなたが女役になってるってことも。");
			break;
		case "versatile":
			m("あなたとジャックが交代で女役になっているってことも。");
			break;
	}

	m("いいわね...?");

	Choose({
		"わかったよ。": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("いいわ。");
			m(". . .");
			m("帰ってきたわ。");
			Father_Soon_2();
		},
		"いや、だめだ。": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("ニッキー、だめ、お願いだから—");
			m("うそ、もう帰ってきたわ。");
			Father_Soon_2();
		},
		"母さんが言わないなら。": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("言わないわ。");
			n("約束するか?");
			m("ええ、約—");
			m("シーッ、お父さん帰ってきたわ。");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
