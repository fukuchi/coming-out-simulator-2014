// PLOT POINTS:
// 1) Studying at Jack's
// 2) Suspecting Jack is gay
// 3) Trying to get you a private tutor (threatening your relationship)

function Start_Dinner_2(){

	m("おまたせ。");
	Show("mom","mom_sit");

	switch($.waiting_action){
		case "eat":
			m("あら、もう先に食べてたの? せっかちねぇ。");
			n("...まあね。");
			break;
		case "wait":
			m("先に食べてても良かったのに。ご飯冷めちゃうわよ。");
			n("...わかった。");
			break;
		case "play":
			m("ちょっと、食べ物で遊ぶなんて。子供じゃないんだから。");
			n("はいはい。");
			break;
	}

	m("お父さん遅くなるって。一時間ほどで帰ってくるそうよ。");

	Choose({
		"いいんじゃない。じゃあいただきます。": function(message){
			n(message);
			n("（モグモグ）");
			m(". . .");
			m("明日はどうするの?");
			Start_Dinner_2_1();
		},
		"二人に話したいことがあるんだけど。": function(message){
			n(message);
			m("いいわ、お父さんが帰ってきたら話してちょうだい。");
			n("そっか、そうだね。");
			m(". . .");
			n("（モグモグ）");
			m("それで、明日はどうするの?");
			Start_Dinner_2_1();
		},
		"まず母さんに話したいことがあるんだけど。": function(message){
			n(message);
			m("慌てないでニック。今日なにがあったか先に教えてちょうだい。");
			n("別になにも。");
			m("そう。じゃあ明日はどうするの?");
			Start_Dinner_2_1();
		}
	});

}

function Start_Dinner_2_1(){

	n("ああ、えーと、勉強。")
	n("うん、明日は勉強するよ。");
	m("何の勉強?");
	n("その...");

	Choose({
		"化学。": function(message){
			$.studying_subject = "化学";
			Start_Dinner_2_2(message);
		},
		"微積分。": function(message){
			$.studying_subject = "微積分";
			Start_Dinner_2_2(message);
		},
		"計算機科学。": function(message){
			$.studying_subject = "計算機科学";
			Start_Dinner_2_2(message);
		}
	});

}

function Start_Dinner_2_2(message){

	n(message);
	m("いいわね。");
	m($.studying_subject+"の成績、うんと良くなるといいんだけど。");
	n(". . .");
	m("お母さん、明日は図書館に用があるんだけど、");
	m("そこであなたに会えるかしら?");
	n("いや、それが...ジャックのところで勉強するんだ。");
	m("また?");
	m("いっつもジャックと一緒にいるのね。");

	Choose({
		"ただ勉強してるだけだよ。": function(message){
			$.relationship = "study";
			Buddy_1(message);
		},
		"ジャックは友達なだけじゃないんだよ。": function(message){
			
			$.relationship = "best friend";
			n("母さん、ジャックはその...友達なだけじゃないんだよ。");
			
			$.lying_about_hanging_out = true;
			m("あら、親友ってこと?");
			n("んーと、つまり...");
			m("勉強しないで二人でぶらぶらしてるんじゃないの。");
			n("ちゃんと勉強してるって!");
			m(". . .");
			m("Alright, just don't lie to me.");
			n("嘘じゃないよ。");
			Buddy_1_point_5();
		},
		"まあ、いい友達だからね。": function(message){
			$.relationship = "friend";
			Buddy_1(message);
		}
	});

}


///////////////////////////////////////
////// 2) SUSPECTING Jack IS GAY ///////
///////////////////////////////////////


function Buddy_1(message){
	n(message);

	if($.relationship!="study"){
		$.lying_about_hanging_out = true;
		m("Oh. So you're just hanging out, not studying.");
		n("We ARE studying!");
		m(". . .");
		m("Alright, just don't lie to me.");
		n("I'm not.");
	}else{
		m("Okay. I'm just making sure.");
		n("Of... what?");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("Wait...");
	m("I thought you said you 'just study together'.");
	m("You didn't tell me you were friends.");
	$.lying_about_relationship = true;
	Choose({
		"Oops, I meant he's just a studymate.": callback,
		"Well, he can also be my friend...": callback,
		"No, I always said we were friends.": callback
	});
}

function Buddy_1_point_5(){

	m("Just... don't hang around him too much.");
	m("People might get the wrong idea.");

	Choose({
		"Oh. No, yeah, we're just friends.": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"The wrong idea might be the right idea.": Buddy_4,
		"What do you mean by... wrong idea?": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("Okay.");
	if($.lying_about_relationship){
		m("Just don't lie to me.");
		n("I won't.");
		m(". . .");
		m("But... about you hanging out with Jack.");
	}
	m("It's just that some people might assume things, since...");
	m("You know... he looks like...");
	m("A gay?");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("Just between mother and son, I think he might be... you know...");
	n("No, what?");
	m("A gay!");
	m("He looks and talks like a gay.");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("Oh, that's like a zen thing, right?");
	n("Um.");
	m("Zen is also about nature, and your classmate Jack, he...");
	m("...you know, doesn't seem natural?");
	Choose({
		"You think he's gay.": function(message){
			n(message);
			m("Yes!");
			m("You suspect it, too!");
			Buddy_Choice();
		},
		"Don't say that about my friend!": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("Okay.");
					m("Just don't lie to me.");
					n("I won't.");
					m(". . .");

					m("But yes, even you agree that it's bad to be seen as 'not natural'.");
					n("I never said--");
					m("And I'm just looking out for you! Because he acts like, you know...");
					m("A gay!");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("I'm just being honest.");
				m("But yes, even you agree that it's bad to be seen as 'not natural'.");
				n("I never said--");
				m("And I'm just looking out for you! Because he acts like, you know...");
				m("A gay!");
				Buddy_Choice();

			}

		},
		"What do you mean, he's not natural?": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("And since you say he's a 'good pal'...");
		m("People might think you're a gay like him, too.");
	}
	if($.relationship=="best friend"){
		m("And since you say he's your BEST friend...");
		m("People might think you're a gay like him, too.");
	}
	Choose({
		"Ha, he sure acts gay. Luckily, he's not.": function(message){
			n(message);
			m("See? You also think there's something not right about it.");
			n("...sure.");
			Buddy_Aftermath();
		},
		"What's wrong with being gay?!": function(message){
			n(message);
			m("Nothing! Nothing.");
			Buddy_Aftermath();
		},
		"Maybe... my friend might be gay.": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("Okay.");
					m("Just don't lie to me.");
					n("I won't.");
					m(". . .");
					Buddy_Aftermath();
				});
			}else{
				n(message);
				Buddy_Aftermath();
			}
			
		}
	});
}


function Buddy_Aftermath(){

	m("Don't get me wrong.");
	m("I'm not saying those kind of people are bad!");
	m("I just think... you should be careful around one of them.");
	m("Jack might, you know, try to recruit you.");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"what.": Buddy_Aftermath_2,
		"whaaat.": Buddy_Aftermath_2,
		"whaaaaaaaaaaaaaaat.": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	n("How do you even...");
	n("Ugh, nevermind.");
	m("Nick, I'm sorry you find me annoying.");
	n("No, mom, stop doing th--");
	m("Let's go back to talking about your grades.");
	m("Now, what did you say you were studying tomorrow?");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	n("Errrmmmmm...");

	Choose({
		"Compsci?": function(message){
			$.studying_subject_2 = "Computer Science";
			Grades_Start(message);
		},
		"Chemistry?": function(message){
			$.studying_subject_2 = "Chemistry";
			Grades_Start(message);
		},
		"Calculus?": function(message){
			$.studying_subject_2 = "Calculus";
			Grades_Start(message);
		}
	});

}


//////////////////////////////////////////
////// 3) A POSSIBLE PRIVATE TUTOR ///////
//////////////////////////////////////////

function Grades_Start(message){
	n(message);
	m(". . .");
	if($.studying_subject!=$.studying_subject_2){
		Grades_Start_1();
	}else{
		Grades_Start_2();
	}
}

function Grades_Start_1(){
	m("You first told me it was "+$.studying_subject+".");
	m("Now you tell me it's "+$.studying_subject_2+"?");
	$.lying_about_studying = true;
	n("Mom, I was just confus--");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("This is TWICE you've lied to me during this dinner.");
		n("I didn't lie about--");
	}
	m("Either way, your grades in both subjects are terrible.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("You hesitated for a moment there.");
	n("I was eating.");
	m("Okay.");
	if($.lying_about_hanging_out){
		m("I wonder if you're studying with Jack at all, or just always hanging out.");
		n("We study.");
	}
	m(". . .");
	m("Still, your grades in your "+$.studying_subject_2+" class are terrible.");
	n(". . .");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
