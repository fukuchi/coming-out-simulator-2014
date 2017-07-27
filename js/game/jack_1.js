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
			n("なら君はニューエイジヒッピーをやめて現実を見た方がいいね。");
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
	
	n("あのさ! 「インセプション」に連れてってくれてありがとう!");
	j("どういたしまして、ニッキー。");
	j("そのうち「インセプション」をパロった変な Web ゲーム作ればいいんじゃない?");
	n("あー、はいはい。");
	n("明日午後にまた会おうよ!");

	j("それなんだけど...");
	n("うちの親が外泊させてくれると本当はいいんだけど。");

	j("君は親に、僕らは勉強してたと嘘をついていたんじゃないのかい。本当は映画に行ってたのに。");
	n("中間試験前の一夜漬けを二人でするからとか言ってさ——えっ?");

	j("こんな風に隠し続けることはできないよ。");
	n("ジャック...");

	Choose({
		"親には絶対に、絶対に言わないよ。": function(message){
			$.coming_out_readiness="no";
			n(message);
			j("絶対に? なんで?");
			Hiding();
		},
		"そりゃもちろん本当のことを言えればいいさ。": function(message){
			$.coming_out_readiness="yes";
			n(message);
			Hiding();
		},
		"まだ心の準備ができていないんだ。": function(message){
			$.coming_out_readiness="maybe";
			n(message);
			j("なら一緒に準備をしよう。僕がついているさ。");
			Hiding();
		}
	});

}

function Hiding(){

	j("ニッキー、本当のことを隠し続けることは、君の魂を蝕んでいくんだ。");

	if($.inception_answer=="awake"){
		j("君、言っただろ。嘘だらけの人生に何の意味があるの?");
	}
	if($.inception_answer=="dream"){
		j("それは... 君言っただろ... 「真っ赤なウソ」?");
	}

	if($.sadsack){
		j("それに自分の事を、どうしようもなく悲観的、とも言ってたね。");
		j("冗談めかして言ってたけど違うね。僕には分かるんだ。");
	}

	n("ジャック、ちょっと待って。");
	j("僕は去年、自分の親にカミングアウトした。");
	if($.hippies){
		n("そうやって僕と比べるのはズルいよ。");
		n("さっきも言ったけど、君も親もニューエイジのヒッピーじゃないか。");
		n("家中が煙だらけだったけど、お香じゃなくてマリファナなんだろ。");
		j("おい! うちは二日にいっぺんしかクサはやらないよ!");
		n("どうだか。");
		j("そうじゃなくて、うちの親は僕のカミングアウトを理解してくれたってことなんだよ。");
	}else{
		j("親は理解してくれたよ。");
	}

	j("君はいまカナダに住んでいるんだ。LGBTに理解ある人達が沢山いるだろう。");
	j("君の親が理解してくれるかどうか、まだ確かめた訳じゃないんだろう?");

	Choose({
		"アジア系の親世代ってのはだいたいホモ嫌いなんだよ。": Hiding_2,
		"うんまあ... 聞いたことなかったと思うけど...": Hiding_2,
		"うちの親は勉強のこと以外なんにも理解してくれはしないよ。": Hiding_2
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
