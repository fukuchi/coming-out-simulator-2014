function Start_Dinner_1(){

	/////// SET UP SCENE ////////

	Show("background","dinner");
	Show("clock","clock_ticking",{x:155,y:294});
	Show("clock_time","clock_1855",{x:155+5,y:294+37});
	Show("nicky","dinner_nicky_sit",{x:0,y:300});
	Show("dad",null,{x:0,y:300});
	Show("mom",null,{x:0,y:300});
	Show("table","dinner_table",{x:0,y:420});

	PlaySound("clock","dinner_ticking",{loop:-1});

	////////////////////////////

	Wait(2500);
	n("みんなどこ?...");
	n(". . .");

	Choose({
		"母さん?": Waiting_1,
		"父さん?": Waiting_1,
		"もしもーし?": Waiting_1
	});

}

function Waiting_1(message){
	
	$.what_you_called_out = message;
	n(message);

	n(". . .");

	Choose({
		"[食べ始める]": function(message){
			$.waiting_action = "eat";
			Waiting_2(message);
		},
		"[もうちょっと待つ]": function(message){
			$.waiting_action = "wait";
			Waiting_2(message);
		},
		"[ご飯をつついて遊ぶ]": function(message){
			$.waiting_action = "play";
			Waiting_2(message);
		}
	});

}

function Waiting_2(message){
	
	n(message);
	n(". . .");

	PlaySound("clock","dinner_meowing",{loop:-1});

	Show("clock","clock_meowing");
	Show("clock_time","clock_1900");
	Wait(1000);

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"ニャアニャア鳴くな、汝、猫時計よ。": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			if($.im_a_poet){
				m("あなた、お友達のところで詩でも習ってきたの?");
			}else{
				m("あら、それ詩なの?");
			}

			Show("nicky","dinner_nicky_sit");
			n("あ、母さん。");
			
			Waiting_End();
		},
		"ああもう、なんでこんなのがウチにあるんだよ?": function(message){
			n(message);

			Show("mom","mom_stand");
			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});

			m("あなたのお爺さんがくださったのよ。");

			Show("nicky","dinner_nicky_sit");
			n("あっ、母さん。");
			
			Waiting_End();
		},
		"ニャア! ニャア! ニャア!": function(message){
			
			n("ニャア。");
			n("ニャア!");

			Show("nicky","dinner_nicky_outrage");
			n("ニャアーッ!");

			Show("mom","mom_stand");

			m("ニック、なにしてるの?...");

			Show("clock","clock_ticking");
			PlaySound("clock","dinner_ticking",{loop:-1});
			Show("nicky","dinner_nicky_sit");

			n("ニャアー…んと、いたのか、母さん。");

			Waiting_End();
		}
	});

}

function Waiting_End(){
	Start_Dinner_2();
}
