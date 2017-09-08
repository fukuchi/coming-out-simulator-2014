// is short
// What ARE you. Fake crying, and don't tell your dad
// Weave it

function Start_Dinner_4(){

	n(". . .");
	m("お父さんがほとんど家にいないのがいけないのね?");
	m("お手本になるような男性が近くにいないせいで、男とは何か、あなたは分からなくなっているんだわ...");

	Choose({
		"父さんはいいお手本だよホント。": function(message){
			n(message);
			m("ニッキー、何をしようとあの人はあなたのお父さんなのよ。お父さんを愛しなさい。");
			My_Fault();
		},
		"そんなことは関係ないよ。That's not how it works. I'd be bi anyway.": function(message){
			n("そんなことは関係ないよ。どっちにしろ僕はバイになってたよ。");
			m("そんな事あなたに分かんないでしょ! あなた心理学の専門家でもないでしょう?!");
			My_Fault();
		},
		"あの...そうかもね。": function(message){
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
		"I'm just confused.": function(message){

			$.what_are_you = "confused";

			n(message);
			m("...I know.");
			m("I'm sorry Jack confused you.");
			m("You're just going through a phase, it's okay.");
			n(". . .");
			m("It's okay. It's okay...");
			Have_You_Had_Sex();

		},
		"I'm your son, dammit.": function(message){

			$.what_are_you = "son";

			n(message);
			n(". . .");
			n("Isn't that enough?");
			Have_You_Had_Sex();

		}
	});
}

function Have_You_Had_Sex(){
	m(". . .");
	m("Did you have sex with Jack.");
	Choose({
		"Yes.": function(message){
			n(message);
			m("[DRY HEAVE]");
			Have_You_Had_Sex_2();
		},
		"No.": function(message){
			n(message);
			m("Please stop lying... I saw your texts...");
			n("We were just sexting, we didn't actually--");
			m("...and your photos...");
			Have_You_Had_Sex_2();
		},
		"I'm not saying.": function(message){
			n(message);
			m("oh my god... you did.");
			Have_You_Had_Sex_2();
		}
	});
}

function Have_You_Had_Sex_2(){

	n(". . .");
	m("Which... one of you is the woman?");

	Show("nicky","dinner_nicky_outrage");

	n("OH COME ON!");
	n("That's like asking which chopstick is the spoo--");
	m("Which one of you?...");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"I'm usually the bottom.":function(message){
			$.top_or_bottom = "bottom";

			n(message);
			Throw_Up();
		},
		"Jack is, mostly.":function(message){
			$.top_or_bottom = "top";

			n(message);
			m("Th-that... means you could still be straight! R-right?...");
			m("If... you know... you're the one who puts your...");
			m("your...");
			Throw_Up();
		},
		"We take turns.":function(message){
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
		"what.": Father_Soon,
		"whaaat.": Father_Soon,
		"whaaaaaaaaaaaaaaat.": Father_Soon
	});

}

function Father_Soon(message){

	n(message);

	Show("mom","mom_sit");

	m(". . .");
	m("Your father will be back soon.");
	n("The food's cold. Well, except for the spot you just uh, reversed, on.");
	m("Your dad's late. Must have been a stressful day at work.");
	m("So... please... when he's back...");
	m("Promise me you'll keep all this secret?");
	n(". . .");

	m("Don't tell him about Jack.");

	switch($.what_are_you){
		case "bisexual":
			m("Don't tell him you think you're bisexual.");
			break;
		case "confused":
			m("Don't tell him you're confused about your sexuality.");
			break;
		case "son":
			m("Don't tell him you lied to us so you could... do things with Jack.");
			break;
	}

	switch($.top_or_bottom){
		case "top":
			m("Don't tell him you make Jack a woman.");
			break;
		case "bottom":
			m("Don't tell him you act like a woman with Jack.");
			break;
		case "versatile":
			m("Don't tell him you and Jack both act like women.");
			break;
	}

	m("Okay?...");

	Choose({
		"Okay.": function(message){
			$.promise_silence = "yes";
			
			n(message);
			m("Okay.");
			m(". . .");
			m("Your father's here.");
			Father_Soon_2();
		},
		"No. Not okay.": function(message){
			$.promise_silence = "no";
			
			n(message);
			m("Nick, no no no, please--");
			m("Oh no. Your father's here.");
			Father_Soon_2();
		},
		"As long as you don't tell him, either.": function(message){
			$.promise_silence = "tit for tat";
			
			n(message);
			m("I won't.");
			n("Promise me you won't.");
			m("I pr--");
			m("Shhh. Your father's here.");
			Father_Soon_2();
		}
	});

}

function Father_Soon_2(){
	Show("nicky","dinner_nicky_sit");
	Start_Dinner_5();
}
