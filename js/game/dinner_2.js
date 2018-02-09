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
			m("わかったわ、嘘じゃないのね。");
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
		m("勉強しないで二人でぶらぶらしてるんじゃないの。");
		n("ちゃんと勉強してるって!");
		m(". . .");
		m("わかったわ、嘘じゃないのね。");
		n("嘘じゃないよ。");
	}else{
		m("そう、やっぱりね。");
		n("やっぱりって...なにが?");
	}

	Buddy_1_point_5();
}

function Buddy_Caught_Lying_1(message,callback){
	n(message);
	m("あら...");
	m("「ただ勉強してるだけ」って言ってたじゃない。");
	m("友達だなんて初めて聞いたわ。");
	$.lying_about_relationship = true;
	Choose({
		"あ、いや、ただの勉強仲間ってことだよ。": callback,
		"だから、友達でもあるんだって...": callback,
		"そんなことないよ、友達だって前から言ってたよ。": callback
	});
}

function Buddy_1_point_5(){

	m("あのね...ジャックとあんまり一緒にいないで欲しいの。");
	m("みんなが勘違いするかもしれないし。");

	Choose({
		"ちょっと、アイツはただの友達だって。": function(message){
			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,Buddy_2);
			}else{
				Buddy_2(message);
			}
		},
		"勘違いじゃないかもしれないよ。": Buddy_4,
		"勘違いって...どういうこと?": Buddy_3
	});

}

function Buddy_2(message){
	n(message);
	m("そう。");
	if($.lying_about_relationship){
		m("嘘じゃないでしょうね。");
		n("違うって。");
		m(". . .");
		m("でも...ジャックと遊んでるんでしょう。");
	}
	m("誰かがそう思うかもしれないってことよ。つまり...");
	m("彼はその...ほら...");
	m("ゲイみたいでしょう?");
	Buddy_Choice();
}

function Buddy_3(message){
	n(message);
	m("ここだけの話だけど、彼はその...ほら...");
	n("なんだよ?");
	m("ゲイだってことよ!");
	m("見た目とか喋り方とか、いかにもゲイっぽいじゃない。");
	Buddy_Choice();
}

function Buddy_4(message){
	n(message);
	m("あら、なんだか禅みたいね。");
	n("ん...");
	m("禅って要するに自然ってことよね。でもジャックは、その...");
	m("...なんというか、自然じゃないでしょ?");
	Choose({
		"あいつがゲイだって言いたんだろ。": function(message){
			n(message);
			m("そう、それ!");
			m("あなたもそう思うでしょ!");
			Buddy_Choice();
		},
		"友達のことをそんな風に言うなよ!": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){

					n(message);
					m("いいわ。");
					m("とにかく嘘はつかないで。");
					n("つかないよ。");
					m(". . .");

					m("それはともかく、あなただって「自然じゃない」と思われない方がいいのは、わかるでしょう。");
					n("そんなことは一言も—");
					m("あなたのために言ってるのよ! だって彼は、ほら...");
					m("ゲイなのよ!");
					Buddy_Choice();

				});
			}else{

				n(message);
				m("思ったことを正直に話しているのよ。");
				m("とにかく、あなただって「自然じゃない」と思われない方がいいのは、わかるでしょう。");
				n("そんなことは一言も—");
				m("あなたのために言ってるのよ! だって彼は、ほら...");
				m("ゲイなのよ!");
				Buddy_Choice();

			}

		},
		"自然じゃないって、なにを言いたいの?": Buddy_3
	});
}

function Buddy_Choice(){
	if($.relationship=="friend"){
		m("あなたはジャックのことを「友達」って言ってるから...");
		m("みんなもあなたのことをゲイだと思うかもしれないわ。");
	}
	if($.relationship=="best friend"){
		m("あなたはジャックのことを「親友」って言ってるから...");
		m("みんなもあなたのことをゲイだと思うかもしれないわ。");
	}
	Choose({
		"あいつはゲイの真似してるだけだよ。": function(message){
			n("ちょっと、あいつはゲイの真似してるだけだよ。大丈夫、ゲイじゃないよ。");
			m("そう、ならいいんだけど。やっぱりあなたもゲイは不自然と思うわよね。");
			n("...もちろん。");
			Buddy_Aftermath();
		},
		"ゲイだとなにかいけないの?": function(message){
			n(message);
			m("いや、そういう訳じゃないんだけど。");
			Buddy_Aftermath();
		},
		"もしかしたら...僕の友達はゲイなのかも。": function(message){

			if($.relationship=="study" && !$.lying_about_relationship){
				Buddy_Caught_Lying_1(message,function(message){
					n(message);
					m("まあいいわ。");
					m("とにかく嘘はつかないで。");
					n("つかないよ。");
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

	m("勘違いしないでね。");
	m("私はなにもゲイが悪いことだと言ってるんじゃないの。");
	m("私はただ...あなたに気をつけて欲しいのよ。");
	m("ジャックは、きっと、あなたを誘おうとしてるわ。");

	Show("clock_time","clock_1910");
	Show("nicky","dinner_nicky_defiant");

	Choose({
		"えっ?": Buddy_Aftermath_2,
		"ええっ?": Buddy_Aftermath_2,
		"ええええええええええっ?": Buddy_Aftermath_2
	});
}

function Buddy_Aftermath_2(message){
	
	n(message);

	n("いったいどうしてそんな...");
	n("いや、もういい。");
	m("ニッキー、変なこと言ってごめんなさい。");
	n("母さん、もういいから—");
	m("成績の話に戻しましょう。");
	m("さっき、明日はなんの勉強するって言ってたかしら?");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	n("えーっと...");

	Choose({
		"計算機科学?": function(message){
			$.studying_subject_2 = "計算機科学";
			Grades_Start(message);
		},
		"化学?": function(message){
			$.studying_subject_2 = "化学";
			Grades_Start(message);
		},
		"微積分?": function(message){
			$.studying_subject_2 = "微積分";
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
	m("あなたさっきは"+$.studying_subject+"をやるって言ってたけど、");
	m("いま「"+$.studying_subject_2+"」って言った?");
	$.lying_about_studying = true;
	n("母さん、いまのはただの—");
	if($.lying_about_hanging_out || $.lying_about_relationship){
		m("今日これで二度目よ、あなたが嘘ついたの。");
		n("嘘じゃないって—");
	}
	m("どっちにしたって、その両方とも、ひどい成績じゃない。");
	n(". . .");
	Grades_Explaining();
}

function Grades_Start_2(){
	m("いまちょっと考えなかった?");
	n("ご飯を食べてただけだよ。");
	m("いいわ。");
	if($.lying_about_hanging_out){
		m("ジャックと本当に勉強してるのか、それとも遊び歩いているのか...");
		n("勉強してるって。");
	}
	m(". . .");
	m("だって、"+$.studying_subject_2+"の成績、ひどいもんじゃない。");
	n(". . .");
	Grades_Explaining();
}

function Grades_Explaining(){
	Start_Dinner_3();
}
