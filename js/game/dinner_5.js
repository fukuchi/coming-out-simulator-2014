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
	
	f("You're becoming a man, son!");
	f("If I were your age, I ditch your mother and chase Claire, too! Haha!");

	n("That's totes weird, dude.");
	f("Talking back? Careful, I'll box your ears, boy!");

	if($.changing_schools){
		m("We were also thinking about changing schools for Nick.");
		m("Maybe to Claire's school.");
	}
	if($.studying_subject!=$.studying_subject_2){
		m("Claire will be tutoring Nick every day after school in "+$.studying_subject+" and "+$.studying_subject_2+".");
	}else{
		m("Claire will be tutoring Nick every day after school in "+$.studying_subject+".");
	}

	f("Nick, how does all this sound? Yes or no?");
	m("He loves the ide--");
	f("Shut up, Qi. I asked my son.");
	m(". . .");

	Show("dad","dad_threat");

	f("Mister Nicklaus Liow.");
	if($.changing_schools){
		f("You want to change schools to chase your hot tutor girlfriend?");
	}else{
		f("You want to spend all your after-school hours with your hot tutor girlfriend?");
	}

	n("It's complicated, I--");
	f("No pansy middle-of-the-road answers.");
	f("Yes. Or. No.");

	n(". . .");

	Choose({
		"Yes.": Agree_With_Dad,
		"No.": Argue_With_Dad
	});

}

function Agree_With_Dad(){
	
	n("...Yes.");

	f("Hm.");
	f("You two seem to have made this big life decision very eagerly!");
	f("So eagerly, in fact, you made it in less than an hour, and tried to hide it from me. What a sudden change.");
	m(". . .");
	n(". . .");

	f("Nick, you did something naughty, didn't you?");
	f("What did you do.");

	Choose({
		"I failed my midterms.": function(message){
			
			n(message);

			f("...Oh.");
			f("Yeah, you need to get your grades back up.");

			Show("dad","dad_serious");

			f("Or you'll be stuck in a teaching job like your mother! Haha!");
			n(". . .");
			Agreeable_Ending();

		},
		"I had sex with Jack.": function(message){
			
			n(message);
			
			Show("mom","mom_cry");
			m("[sob]");
			f(". . .");
			Argument_Ending();

		},
		"I had sex with Claire.": function(message){
			
			n(message);
			
			m("...Nick!");
			f(". . .");
			f("   Nnnnnniiiiiiiiice.");
			m("...Dear!");
			f("Wait, uh, you didn't get her pregnant, did you?");
			n("No. I'm not stupid.");
			
			Show("dad","dad_serious");

			f("Good. Otherwise you'd be stuck for the next two decades raising a kid, like me! Haha!");
			n("Ha ha.");
			Agreeable_Ending();

		}
	});

}

function Agreeable_Ending(){

	$.father_oblivious = true;

	f("For a moment there, Nick, I thought you'd been smoking pot with your hippie classmate Jack, or something!");

	Show("nicky","dinner_nicky_sit");
	n(". . .");
	f("So!");
	f("Who wants to watch a movie this weekend? I hear Inception is good.");

	Choose({	
		"Let's watch it! I haven't seen it yet.": function(message){
			n(message);
			f("Then it's a plan!");
			f("Hey Nick, you know who's acting in the movie?");
			n("Um. Leonardo DiCaprio?");
			f("No no, Ellen Page.");
			f("Doesn't Claire look a little bit like her?");
			n("I guess.");
			Dinner_Ending();
		},
		"Uh... let's do a different movie...": function(message){
			n(message);
			f("What, Inception too complicated for you?");
			n("Hey...");
			if($.studying_subject!=$.studying_subject_2){
				f("Sure, I understand if you failed "+$.studying_subject+" and "+$.studying_subject_2+"...");
			}else{
				f("Sure, I understand if you failed "+$.studying_subject+"...");
			}
			f("But come on, this is a <i>movie</i>!");
			f("You can't have inherited that much stupid from your mother's side! Haha!");
			n("Ha ha.");
			Dinner_Ending();
		},
		"Oh, I already saw Inception.": function(message){
			n(message);
			f("Oh ho, I see...");
			f("You went on a little movie date with your special friend Claire, didn't you?");
			n("Yeah.");
			n("A date with my special friend.");
			Dinner_Ending();
		}
	});

}

function Argue_With_Dad(){

	n("...No.");

	f("Excuse me?");
	n("No. Mom's doing this so I can't see Jack anymore.");
	f("Jack.");
	n("My friend.");

	Choose({
		"My boyfriend.": function(message){
			
			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			m("Jack did this to our son!");
			f("That kid chose his lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		},
		"Mom hates him, coz he happens to be gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			f("You made your mother cry.");
			if($.hippies){
				m("And his parents are drug addicts!");
			}
			f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		},
		"Mom hates him, coz she THINKS he's gay.": function(message){

			n(message);

			Show("mom","mom_cry");
			m("[sob]");

			m("Jack IS gay!");
			if($.hippies){
				m("And his parents are drug addicts!");
			}
			f("Jack chose that lifestyle, but I will not have it be yours, Nick.");
			Argument_Ending();
		}
	});

}

function Argument_Ending(){

	$.father_oblivious = false;

	n(". . .");

	if($.top_or_bottom=="top"){
		m("Jack acts like the woman, not him...");
	}
	switch($.what_are_you){
		case "bisexual":
			m("Nick's not fully gay, he told me himself he's still attracted to girls!");
			n(". . .");
			break;
		case "confused":
			m("Earlier Nick told me he was just confused!");
			f("Oh, clearly he is.");
			n(". . .");
			break;
		case "son":
			n("Look, like I told Mom just now, I'm your SON, isn't that enou--");
			break;
	}
	
	f("Nick, you're changing schools.");
	n(". . .");
	m("huuu... huuu... huuu...");

	f("Your mother and I will do random checks on your texts and emails.");
	n(". . .");
	m("owww... owww...");

	f("I swear, if I have to pay Claire extra to make you realize you're straight, I will.");
	n(". . .");

	Show("mom","mom_sit");
	if($.crying=="anger"){
		m("When I was crying earlier, he accused it of being fake!");
		f("Qi, shut up. We're not talking about you.");
	}
	if($.crying=="mocking"){
		m("When I was crying earlier, he was mocking it!");
		f("Qi, shut up. We're not talking about you.");
	}

	f("So Nick.");
	f("Would you like to say anything, anything at all, about all that?");

	Choose({
		"Yes. Fuck this, and fuck you.": function(message){

			n("Yes.");
			n("FUCK this.");
			n("And FUCK you.");
			
			Show("nicky","dinner_nicky_outrage");
			n("Fuck BOTH of you, you narcissistic slimy pieces of SHI--");
			
			Dinner_Ending_Punch();

		},
		"No. I accept my punishment.": function(message){

			n(message);
			f("Good. At least you're taking this like a man.");
			n(". . .");

			Show("dad","dad_serious");

			m("sniff...");
			f("I'm going out to the bar, and getting something actually edible to eat.");

			Show("dad",null);

			f("Honey sweetie dear? Your cooking is shit.");
			PlaySound("sfx","dinner_door");

			m(". . .");
			
			Show("mom","mom_cry");

			m("BAWWWWW");
			
			Dinner_Ending();

		},
		"You can't hurt me.": function(message){

			n(message);
			f(". . .");
			m("Dear, no...");
			f("Mighty strong words, son.");
			m("Honey, please don't!");
			f("At least you're standing up to me. Like a man.");
			m("Please! It's my fault! Don't--");
			f("Ice keeps the swelling down.");
			m("DEAR!");
			
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

