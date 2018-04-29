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
	n("映画館じゃみんなが笑ってたから、聞き逃がしちゃったよ。");
	j("今度は字幕つきで観るか、耳かきしてから観に行くんだな。");
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
	n("ま、そのうちね。");
	n("じゃ、明日午後にまた会おうよ!");

	j("それなんだけど...");
	n("うちの親が外泊させてくれると本当はいいんだけど。");

	j("君は親に、僕らは勉強してたと嘘をついていたんじゃないのかい。本当は映画に行ってたのに。");
	n("中間試験前の一夜漬けを二人でするからとか言って...えっ?");

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
		j("冗談めかして言ってたけど違うね。僕にはわかるんだ。");
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
		"アジア系の親ってのはみんなホモ嫌いなんだよ。": Hiding_2,
		"うんまあ... 聞いたことなかったと思うけど...": Hiding_2,
		"うちの親は勉強以外、何も理解してくれないよ。": Hiding_2
	});

}

function Hiding_2(message){
	
	n(message);

	if($.coming_out_readiness=="no"){
		n("だから... 絶対に、絶対に言わないよ。");
	}

	j("君は親のことを信頼していないんだな。");
	j("いまだって、電話じゃなくてメール使ってるのは...");
	j("...親に聞かれるかもしれないと思ってるんだろ。");

	n("だってそうだろ!");

	j("こんなやり方じゃダメだ。");
	j("本当に理解しあうには、こんなのは不正確で、不実で、不可能だ。");

	if($.im_a_poet){
		n("へぇ、どうやら君も僕みたいに詩人だったんだな。");
	}else{
		n("そこまでひどくないよ...");
	}

	if($.coming_out_readiness=="yes"){
		j("「本当のことを言えればいい」と言ってただろ。");
		j("言っちゃいなよ。");
	}else{
		j("ニッキー。");
	}
	j("親に伝えるんだ。今夜。");

	Choose({
		"今夜?! 無茶言うなよ。": Hiding_3,
		"うん... やってみるよ。": Hiding_3,
		"ちょっと探りを入れてみるくらいなら...": Hiding_3
	});

}

function Hiding_3(message){
	
	n(message);
	j(". . .");
	n("親をあんまりパニくらせたくないんだ。");
	n("明日の夜に君の家に行くことを納得させるには、");
	n("一緒に勉強しに行く、って言った方がいいんだよ。");
	j(". . .");
	n("晩御飯の時間だ。もう下に行くよ。");

	j("なぁ... お前の言う通りだ。");
	n("ん?");
	j("あの映画の終わり方について、さ。");
	switch($.inception_answer){
		case "dream": j("主人公は真っ赤なウソ、夢の中に囚われているんだ。"); break;
		case "awake": j("主人公は現実に戻ってきて、現実の家族と再会したんだ。"); break;
		case "neither": j("主人公が幸せなら、真実はどっちでもいいんだ。"); break;
	}
	n("ああ。");
	j("よし。");
	if($.coming_out_readiness=="maybe"){
		j("心の準備がまだなら、はやく準備ができるといいな。");
	}
	j("うまくいくといいな。またメールくれよ。");

	var insult = "";
	if($.hippies) insult+="ニューエイジヒッピー";
	if($.im_a_poet) insult+="詩人";
	n("じゃあね。");
	if(insult!=""){
		n(insult+"さん。");
	}else{
		n("お馬鹿さん。");
	}

	Jack_1_End();

}

function Jack_1_End(){
	Clear();
	Start_Dinner_1();
}
