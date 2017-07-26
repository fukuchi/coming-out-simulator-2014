// PLOT BEATS:
// 1) In medias res talking about Inception
// 2) Thanks for movie, we still up to stay over tomorrow night?
// 3) You need to stop hiding... // Can't even CALL.
// Weave in previous bits of convo pieces.
// Also, FULL CIRCLE with the Inception!
// OKAY, TOO CONVOLUTED, CUT OUT THE DIFFERENT FAMILIES & TYPO parts.

function Start_Jack_1(){
	
	/////// SET UP SCENE ////////

	Show("background","bedroom");
	Show("us","bedroom_us_1");
	Show("light","bedroom_light_1",{x:0,y:159});

	PlaySound("bg","bedroom_1",{loop:-1});

	/////////////////////////////

	j("...それで彼はこう言ったんだ。");
	j("「エアラインごと買い取った」");
	j("あれは本当に素晴しかったよ!");
	n("そんなこと言ってたのか。");
	n("映画館でみんなが笑ってたから聞き逃がしちゃったよ。");
	j("今度は字幕つきで観るか、耳かきしてから観に来るんだな。");
	j("それで、あの終わり方はどう思う?");

	Choose({
		"ぜんぶがただの夢だった。": Inception_Dream,
		"主人公は現実世界に戻ってこれた!": Inception_Awake,
		"どっちでもいいさ。ヤツは好きなようにするよ。": Inception_Neither
	});

}

function Inception_Dream(message){

	$.inception_answer = "dream";

	n(message);
	j("なら主人公の救済のストーリーは、ぜんぶ嘘だったということ?");
	n("真っ赤なウソさ。");
	j("お前、ちょっとダウナー系だよな?");

	Choose({
		"そうさ、僕はどうしようもなく悲観的なんだ。": Sadsack,
		"ときどきはね...でも君といるときは違うよ。": function(message){
			$.im_a_poet = true;

			n(message);
			j("おおニッキー、詩人だねぇ。");
			n("マウスウォッシュあったらくれない?");
			n("人生で一番クサいセリフ言っちゃったよ。");
			j("残念ながら持ってないな。");
			n("ま、それよりさ...");
			Thanks();
		},
		"ただリアリストなだけだよ。": function(message){
			$.hippies = true;

			n(message);
			j("もう少しポジティブな見方をした方がいいんじゃないか?");
			n("それなら君はもうちょと現実を見た方がいいね。");
			n("ま、それよりさ...");
			Thanks();
		}
	});

}
function Inception_Awake(message){

	$.inception_answer = "awake";
	$.im_a_poet = true;

	n(message);
	n("そうじゃないと、ぜんぶがぜんぶ嘘だったことになっちゃうだろ。");
	n("嘘だらけの人生に何の意味があるの?");
	j("おおニッキー、詩人だねぇ。");
	j("映画よかったと思う?");

	Choose({
		"うん、もちろん。": function(message){
			n(message);
			Thanks();
		},
		"うーん、ちょっと混乱したけどね。": function(message){
			n(message);
			j("それこそがあの映画のテーマだよ。");
			n("そうか、それならたっぷり堪能できたよ。");
			n("ま、それよりさ...");
			Thanks();
		},
		"ブォーーーーーン": function(message){
			n(message);
			j("予告編のマネかよ。");
			j("イエス、の意味に受け取っておくよ。");
			Thanks();
		}
	});

}
function Inception_Neither(message){

	$.inception_answer = "neither";

	n(message);
	j("ん?");
	n("主人公は最後、コマが倒れるのかどうか、見もしなかった!");
	n("嘘でも真実でも、それが曖昧だということさえ、コブはもう気にしないことにしたんだ。");
	n("コブにとってはハッピーエンドだし、それで十分じゃないか。");
	j("お前はすごいポエマーか、すごいダウナーかのどっちかだな。");

	Choose({
		"僕はポエマーで、それに気付いてなかった。": function(message){

			$.im_a_poet = true;

			n("僕は詩人さ。");
			n("いままで考えもしなかったけどね。");
			j("君は奇跡を歌う詩人、僕が認めるから持てよ自信。");
			n("なんで突然踏む脚韻。");
			n("ま、それよりさ...");
			Thanks();

		},
		"まあね、僕はどうしようもなく悲観的なんだ。": Sadsack,
		"あるいはその両方。":function(message){

			$.hippies = true;
			$.im_a_poet = true;

			n(message);
			n("詩は苦痛であり、芸術は苦悩である。");
			j("うちの母さんみたいだ。");
			n("君んとこの親は<strong>よほどの</strong>ニューエイジヒッピーなんだな。");
			n("ま、それよりさ...");
			Thanks();

		}
	});

}

function Sadsack(message){
	
	$.sadsack = true;

	n(message);
	j("ああ、ごめん変なこと言って。");
	j("今日のデートで少しは元気出たかい?");
	n("もちろん!");
	Thanks();

}

function Thanks(){
	
	n("So yeah! Thanks for taking me out to watch Inception!");
	j("My pleasure, Nicky.");
	j("You should parody Inception in that odd web game of yours!");
	n("Mmm, maybe maybe.");
	n("Let's meet again tomorrow evening!");

	j("Although...");
	n("Hope I can convince the parents to let me out overnight.");

	j("I wish you didn't tell your mom and dad we were just studying, when we were actually at the cinema.");
	n("I'll pretend we'll be cramming for the midterms all nigh-- huh?");

	j("You can't keep hiding like this.");
	n("Jack...");

	Choose({
		"They can never, ever know.": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("Really, never?");
			Hiding();
		},
		"I wish I could tell them, too.": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"I'm not ready to tell them yet.": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("I can help you be ready.");
			Hiding();
		}
	});

}

function Hiding(){

	j("Nicky, hiding like this is eating away at your soul.");

	if($.inception_answer=="awake"){
		j("Like you said, what's the point of living a lie?");
	}
	if($.inception_answer=="dream"){
		j("It's... how'd you put it... 'a big fat lie'?");
	}

	if($.sadsack){
		j("When you said just now you're a sadsack?");
		j("I know you weren't joking. Not really.");
	}

	n("Jack, come on.");
	j("I came out to my parents last year.");
	if($.hippies){
		n("That's NOT a fair comparison.");
		n("LIKE I SAID, you and your parents are a bunch of new-age hippies.");
		n("When I'm at your place, I can't tell if all the smoke is incense or marijuana.");
		j("Hey! We only smoke weed every other day!");
		n("Heh.");
		j("The point is, my parents supported my coming out.");
	}else{
		j("And they were very supportive!");
	}

	j("You're in Canada now. A lot of people here are LGBT friendly.");
	j("How do you know your parents won't be supportive of you, too?");

	Choose({
		"Asian parents are usually very homophobic.": Hiding_2,
		"I don't know... I guess I haven't tried...": Hiding_2,
		"They don't support anything but STUDYING.": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("Again... They can never, ever know.");
	}

	j("You have trust issues.");
	j("You're even texting me instead of calling...");
	j("...because you think your parents might listen in.");

	n("They would!");

	j("This mode of communication.");
	j("It's imprecise, impersonal, impossible to truly connect.");

	if($.im_a_poet){
		n("Heh. You're an amateur poet like me, apparently.");
	}else{
		n("It's not too bad...");
	}

	if($.coming_out_readiness=="yes"){
		j("You yourself just said you wish you could tell them.");
		j("Tell them.");
	}else{
		j("Nicky.");
	}
	j("Tell them about us. Tonight.");

	Choose({
		"Tonight?! Heck no.": Hiding_3,
		"Sigh... I'll try my best.": Hiding_3,
		"I'll just carefully hint at it.": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("I don't want to freak them out too much.");
	n("Still need to convince them to let me stay at your place tomorrow night.");
	n("I'll tell 'em I'm studying with you again.");
	j(". . .");
	n("It's dinnertime. I'm heading downstairs now.");

	j("Hey... I agree.");
	n("Huh?");
	j("With your thoughts on the movie ending, that is.");
	switch($.inception_answer){
		case "dream": j("I think Cobbs was still dreaming, living a lie."); break;
		case "awake": j("I think Cobbs reconnected with his real family, in the real world."); break;
		case "neither": j("I think it doesn't matter, as long as Cobbs is happy."); break;
	}
	n("Oh.");
	j("Okay.");
	if($.coming_out_readiness=="maybe"){
		j("Hope you changed your mind about being 'not ready to tell them yet'.");
	}
	j("Good luck. Text me in an hour.");

	var insult = "";
	if($.hippies) insult+=" new-age hippie";
	if($.im_a_poet) insult+=" amateur poet";
	n("See ya.");
	if(insult!=""){
		n("You"+insult+".");
	}else{
		n("You goof.");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
