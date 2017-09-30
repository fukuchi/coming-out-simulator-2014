// Plot points:
// Trying to stay overnight.
// Reveal - hippie parents, reading poetry, ...(?)
// Threats -- date your tutor, changing school(?)
// He's distracting you. Movie & Hippies.
// Oh my god, you've been reading my texts!...

function Start_Dinner_3(){

	n("母さん。");

	Choose({
		"だからジャックと必死に勉強してるんだよ。": Tutor,
		"努力はしてるんだよ。本当だって。": Tutor,
		"そんなにひどくないって。": Tutor
	});

}

function Tutor(message){

	n(message);
	m("私はあなたのためを思ってるのよ。ジャックと一緒にいるのはあなたのためにならないわ。");

	if($.hippies){
		m("ジャックのご両親はよくない薬をやってるそうだし...");
		n("なんでそんなことを—");
	}else if($.im_a_poet){
		m("ジャックはちょっと夢想的すぎるわ。");
		n("なんでそんなことを—");
	}
	
	m("実は家庭教師を頼んでいるのよ。");
	n("...は?");

	if($.studying_subject!=$.studying_subject_2){
		m("その子が"+$.studying_subject+"と"+$.studying_subject_2+"を教えてくれるの。");
	}else{
		m("その子が"+$.studying_subject+"を教えてくれるの。");
	}

	m("名前はクレアっていうの。頭はいいし、可愛いくて、白人の娘よ。それに同い歳だし。");

	Choose({
		"それってジャックと付き合うなっていうこと?": Tutor_Seeing,
		"そいつと付き合えっていうの?": Tutor_Matchmake,
		"家庭教師の話は後にしない?": Tutor_Forget
	});

}

function Tutor_Seeing(message){
	n(message);
	m("いま、ジャックと「付き合う」って言った?");
	m("言い方に気をつけなさい。それじゃまるで...");
	
	Choose({
		"デートでもしてるみたいだって? そうだよ。": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...もしもし?");
			m(". . .");
			n("誰かいますかー?");
			m(". . .");
			Threat_School();
		},
		"「会う」って言いたかっただけだって。": function(message){
			n(message);
			m("いいわ、そこのところははっきりしてちょうだい。");
			n("わかった。");
			m(". . .");
			m("クレアはとても可愛いのよ。");
			n("そう。");
			m("それに胸も大きいのよ。");
			Threat_Tutor();
		},
		"違う違う、ただの友達。": function(message){
			n(message);
			m(". . .");
			m("そう。");
			m("別に疑ってる訳じゃないんけど...まぁいいわ。");
			n("友達だから。");

			if($.relationship=="friend"){
				m("「いい友達」...");
			}
			if($.relationship=="best friend"){
				m("「親友」...");
			}

			Threat_Tutor();

		}
	});
}

function Tutor_Matchmake(message){
	n(message);
	m("あら、そうしたいならもちろん応援するわよ!");
	n("そうじゃないって。");
	m("あら、恥かしがらなくてもいいのよ! いっちょまえの男になりたくないの?");
	m("孫の顔が早く見たいわ、私。");

	Choose({
		"やめてよ! まだ会ったこともないんだから!": function(message){
			n(message);
			m("すぐに会えるわよ!");
			m("明日うちに来るのよ!");
			n("はぁ? 明日はジャックと約束が—");
			m("あなたの服ちゃんとアイロンかけといたわよ。第一印象って大事だから。");
			Threat_Tutor();
		},
		"可能性は半々ってところかな。僕バイだし。": function(message){

			$.admit_bisexuality = true;

			n(message);
			m("え、バイ?...");

			Show("nicky","dinner_nicky_defiant");

			n("そう、バイセクシャル。");
			n("つまり、男にも女にも性的興味を持つ人のこと。");
			m(". . .");
			n(". . .");
			Threat_School();
		},
		"いや、子供なんて欲しくないよ。": function(message){
			n(message);
			m("そんなの、大きくなれば考えも変わるわよ。");
			m("子供を育てるってのは素敵なことよ。あなたも子供に尊敬されるようになるわ!");
			n("...ナルシストだね。");
			m("どうゆうこと?");
			n("別に。");
			m(". . .");
			Threat_Tutor();
		}
	});
}

function Tutor_Forget(message){
	n(message);
	m("だめよ、クレアには明日来てもらうようにもうお願いしてるもの。");
	n("はぁ?!");
	n("だめだって。明日はジャックと約束してるんだよ。");
	m(". . .");
	m("ジャックとの用事はいつまでかかるの?");

	Choose({
		"一晩中。": function(message){
			n(message);
			m(". . .");
			n(". . .");
			n("...もしもし?");
			n("そんな変なことじゃいあよ、友達のところに泊まりがけでいくなんてよくあることだろ。");
			m(". . .");
			Threat_School();
		},
		"夕方まで。": function(message){
			n(message);
			if($.lying_about_hanging_out){
				m("やっぱり。嘘だってわかってたわ。");
				n("は?");
			}else{
				m("...やっぱり。");
			}
			m("ジャックと遊びたいだけじゃない。");
			Threat_Tutor();
		},
		"一時間かそこら。": function(message){
			n(message);
			m("一時間で勉強できる訳ないじゃない。");
			if($.lying_about_hanging_out){
				m("やっぱり。嘘だってわかってたわ。");
				n("は?");
			}
			m("ジャックと遊びたいだけじゃない。");
			Threat_Tutor();
		}
	});
}

function Threat_Tutor(){
	
	Show("nicky","dinner_nicky_defiant");
	
	n(". . .");
	m("クレアには、毎日学校の後に来てもらうことにしたわ。明日から。");

	Choose({
		"毎日?! 友達との時間は?!":function(message){
			n(message);
			m("ニッキー、私だってあなたの友達よ。");
			n(". . .");
			m("クレアだって友達になれるわ。友達以上になるかもよ。");
			n(". . .");
			n("それで話は終わり?");
			m("ええと...もうひとつ。");
			Plot_Twist();
		},
		"わかったよ。けど週末は自由だよね?": function(message){
			n(message);
			m("いいわ。");
			n("オーケー、それならもういいよ。");
			m("...そうね。");
			n(". . .");
			m("それと...もうひとつ。");
			Plot_Twist();
		},
		"クレアと勉強したくないって言ったら?": function(message){
			n("もし"+message);
			m("あら、彼女と遊びたいっていうならそれでもいいわよ。");
			m("なんにせよ男を磨いてくれるのなら。");
			n("うげ。");
			m("あ。");
			m("それともうひとつ。");
			Plot_Twist();
		}
	});

}

function Threat_School(){

	$.changing_schools = true;
	
	m("あなたの通う学校、変えた方がいいわ。");

	Show("nicky","dinner_nicky_outrage");

	n("なんだって?!");
	m("ジャックのことだけじゃなくて、いまの学校、あなたにとってあまり良くないと思うの。");
	n("本気で言ってるの?");
	m("カナダの雰囲気そのものが、あなたをおかしくしてるんだわ。");

	Show("nicky","dinner_nicky_defiant");

	Choose({
		"アジア的価値観の方がおかしいだろ。": function(message){
			n("それは違うよ。そのアジア的価値観の方が時代遅れなんだよ。");
			m("生意気なことを言わないで!");
			m("あなただってアジア人なのよ!");
			n(". . .");
			Plot_Twist();
		},
		"自分の子によくそんなこと言えるな!": function(message){
			n(message);
			m("生意気なことを言わないで!");
			m("私はあなたの母親よ。親として当然のことをしてるだけじゃない!");
			n(". . .");
			Plot_Twist();
		},
		"どこの学校に行ったって、同性愛者はいるよ。": function(message){
			n(message);
			m("生意気なことを言わないで!");
			m("言葉に気を付けなさい。学校を止めさせて自宅学習にすることだって考えたわよ。");
			n(". . .");
			Plot_Twist();
		}
	});

}

function Plot_Twist(){

	m("あなた、昨日ジャックと勉強してたことにしてるけど、");
	m("こっそり映画を観に行ってたでしょう。");

	Show("nicky","dinner_nicky_sit");
	n(". . .");

	Show("clock_time","clock_1920");

	Choose({
		"ふざけんな、メールのぞいたのかよ。": function(message){
			n(message);
			m("そうよ。あなたジャックと一緒じゃないときの方が、頭が回るんじゃない?");
			Plot_Twist_2();
		},
		"違うってば、勉強してたよ。": function(message){
			n(message);
			m("あら、ずいぶんと強気ね。");
			m("あなたのジャックとのメール読んだわよ。");
			Plot_Twist_2();
		},
		"なんでそう思ったの?": function(message){
			n(message);
			m("あなたのジャックとのメール読んだのよ。");
			Plot_Twist_2();
		}
	});

}

function Plot_Twist_2(){

	n(". . .");
	m("晩御飯の直前に、あなたの部屋に行ってみたのよ。");

	// Dinner_1
	m("あなたが「"+$.what_you_called_out+"」って叫んでたとき、お母さんはあなたの電話のロックを外したの...");
	m("それで、あなたとジャックが何を話してたのか、全部読んだわ。");
	m("私はあなたの親よ。親として当然じゃない。");

	n(". . .");

	if($.im_a_poet){
		m("クサい詩?");
	}
	if($.hippies){
		m("マリファナがどうしたとか?");
	}
	if($.im_a_poet || $.hippies){
		m("どうして自分の親に嘘をつくの?");
		m("他にいったい何を隠れてやってるのよ?");
	}

	Choose({
		"これはただの悪い夢なんだ。": function(message){
			n(message);
			m("あなた達が観てた「デセプション（欺瞞）」とかいう映画みたいに?");
			n("僕らが...あれは「インセプション」だってば。");
			m("そんなのどうだっていいわ。");
			Plot_Twist_3();
		},
		"ごめん。本当にごめん。": function(message){
			n(message);
			m("あなたのことは許してあげる。");
			m("自分の子供ですもの、もちろん許してあげるわ。");
			Plot_Twist_3();
		},
		"一生恨むぞ。": function(message){
			n(message);
			m("別にそれでいいわ。");
			m("私はあなたのことを愛してるわよ、ニッキー。");
			Plot_Twist_3();
		},
	});

}

function Plot_Twist_3(){
	Start_Dinner_4();
}
