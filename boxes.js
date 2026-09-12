// Bento Lab の箱データ（index.html と box.html で共用）
// Stripeの支払いリンクが出来たらここを書き換える
const STRIPE_LINK = "https://buy.stripe.com/aFa6oI2l56Z1a6q00RcjS0b";

const BOXES = [
  {box:"好きな作品で|語学を続ける",en:"Keep up a language with what you love",desc:"好きな作品のセリフでAB再生・録音・発音練習",cat:"学ぶ",badge:"free",featured:true,heroChar:"語",examples:[
    {name:"北斗の拳で日本語",url:"https://yukitchy.github.io/hokuto-nihongo/",note:"体験レッスン教材"},
    {name:"フリーレンで日本語",url:"https://yukitchy.github.io/hokuto-nihongo/frieren/",note:"生徒向け別作品版"},
    {name:"英語版（子ども向け）",url:"https://yukitchy.github.io/sota-english-gym/",note:"同じ箱で英語"},
  ]},
  {box:"推しの聖地で|案内してくれる人を|探す",en:"Find a local guide for your fandom",desc:"街ではなく「好きな作品」で現地ガイドを探せる名鑑",cat:"旅・遠征",badge:null,featured:true,heroChar:"推",examples:[
    {name:"アニメ聖地ガイド名鑑 OshiGuide",url:"https://yukitchy.github.io/oshi-guide/",note:null},
  ]},
  {box:"初めての国に着く前に|迷いを消す",en:"Arrive ready for a first trip",desc:"渡航前チェックと到着日の動き方を冒険の書の形で",cat:"旅・遠征",badge:null,featured:true,heroChar:"初",examples:[
    {name:"Japan: First Quest",url:"https://home.yuukipodcast.com/first-quest.html",note:"ツアーゲスト向け英語版"},
    {name:"家族5人の東京到着日プラン",url:"https://yukitchy.github.io/tokyo-arrival-day/",note:null},
    {name:"生徒向け来日サポート版（個別・非公開）",url:null,note:null},
  ]},
  {box:"旅の予定を1枚に|まとめて共有する",en:"Share the whole trip on one page",desc:"行程・宿・交通・持ち物を1ページに。遠征にも",cat:"旅・遠征",badge:null,examples:[
    {name:"熊本サウナ旅",url:"https://yukitchy.github.io/kumamoto-sauna/",note:null},
    {name:"ブルーノ・マーズ札幌公演の遠征ガイド",url:"https://yukitchy.github.io/bruno-mars-guide/",note:null},
    {name:"マンガ好きの7日間ツアー提案",url:"https://yukitchy.github.io/manga-week/",note:null},
    {name:"生徒の海外遠征版",url:"https://yukitchy.github.io/lance-flight-plan/",note:null},
  ]},
  {box:"チケット購入ヘルプ",en:"Help choosing seats before you buy",desc:"席番号を入れると見え方と見切れが分かる。買う前の迷いを消す",cat:"旅・遠征",badge:"free",featured:true,heroChar:"席",examples:[
    {name:"ZOZOマリンスタジアム版",url:"https://yukitchy.github.io/zozo-seat-guide/",note:null},
  ]},
  {box:"街歩きを|撮影ミッションにして|記事にする",en:"Turn a walk into photo missions",desc:"スポットを撮影ミッション化。撮った写真が記事の枠に入る",cat:"旅・遠征",badge:null,examples:[
    {name:"秋葉原48スポット",url:"https://quest.animesenseijp.com",note:null},
  ]},
  {box:"手が離せない作業を|声で案内する",en:"Hands-free voice guidance",desc:"数字を1つ入れると時間と量を計算して読み上げる",cat:"暮らし",badge:null,examples:[
    {name:"コーヒーのポアオーバー Drip Zine",url:"https://yukitchy.github.io/drip-zine/",note:null},
  ]},
  {box:"自分に合うものを|診断で見つける",en:"Find what fits you with a quiz",desc:"質問に答えるとタイプやおすすめが出る診断ページ",cat:"学ぶ",badge:"free",featured:true,heroChar:"診",examples:[
    {name:"AI相棒設定診断",url:"https://yukitchy.github.io/ai-party-shindan/",note:null},
    {name:"ラジオ128回からおすすめ回診断",url:"https://taiken.yuukipodcast.com",note:null},
  ]},
  {box:"日程調整を|一言で終わらせる",en:"Settle a date with one question",desc:"空き時間から候補を出して発行。相手はタップするだけ",cat:"仕事",badge:"paid",examples:[
    {name:"飲み会・打ち合わせ・収録の3プリセット",url:"https://yukitchy.github.io/itsunara/",note:null},
  ]},
  {box:"やる気の出ないタスクを|クエストにする",en:"Turn chores into quests",desc:"やることをクエスト受注書に変える掲示板",cat:"暮らし",badge:"paid",examples:[
    {name:"モンハン風クエスト掲示板",url:"https://yukitchy.github.io/quest-board/",note:null},
  ]},
  {box:"三行だけの日記を|続ける",en:"Keep a three-line diary",desc:"良いことを三行だけ書き残す日記サイト",cat:"暮らし",badge:"free",examples:[
    {name:"三行褒め日記",url:"https://yukitchy.github.io/home-nikki/",note:null},
  ]},
  {box:"落ち込んだ時に|波が引くのを待つ",en:"Ride out a low mood",desc:"落ち込みを「いつか波は引く」前提で受け止める",cat:"暮らし",badge:null,examples:[
    {name:"ナギ",url:"https://yukitchy.github.io/nagi/lp.html",note:null},
  ]},
  {box:"近所の困りごとを記録して|交渉材料にする",en:"Log neighborhood issues as evidence",desc:"苦情を記録に変えて対案にする仕組み",cat:"暮らし",badge:null,examples:[
    {name:"民泊の近所ホットライン",url:"https://yukitchy.github.io/minpaku-hotline/",note:null},
  ]},
  {box:"見つけた良いデザインを貯めて|自分の基準にする",en:"Bank good design into your own rules",desc:"街で見た良いデザインを撮って貯め、原則に育てる",cat:"仕事",badge:"paid",examples:[
    {name:"デザインバンク",url:"https://design.animesenseijp.com",note:null},
  ]},
  {box:"自分の番組を|1ページで聴かせる",en:"One page to play all your shows",desc:"配信中の番組を1ページに並べて聴ける",cat:"Podcast",badge:"free",examples:[
    {name:"ユウキの7番組",url:"https://program.yuukipodcast.com",note:null},
  ]},
  {box:"音声を読み物にして|後から読む",en:"Turn audio into readable pages",desc:"音声や字幕をハイライト付きの読み物に製本",cat:"Podcast",badge:"paid",examples:[
    {name:"Podcast文庫（9番組532話）",url:"https://bunko.yuukipodcast.com/",note:null},
    {name:"会議字幕の読み物棚",url:null,note:null},
  ]},
  {box:"録音から|議事録と引き継ぎ書を作る",en:"Minutes and handover docs from a recording",desc:"録音1本→まとめ→読み物。辞書と話者と立場を差し替える",cat:"仕事",badge:"paid",isKit:true,first:true,flow:{title:"ユウキの実例: 地元ラジオの収録60分 → 読み物まで",steps:[
    {t:"録音をドロップして話者を登録",d:"バーミヤンで録った60分のm4aを受付に放り込み、話者3人の名前と立場を入れて「受け付ける」。あとは待つだけ。",img:"art/flow/step1.jpg"},
    {t:"まとめが自動で出る",d:"3行サマリー・ハイライト・決定事項・TODO・出たアイデアまで1枚に。LINEに直貼りできるテキスト版も同時に出る。",img:"art/flow/step2.jpg"},
    {t:"対談の読み物ページになる",d:"同じ録音が、見出し付きのインタビュー記事に。参加者に送れば「あの話どこだっけ」が無くなる。",img:"art/flow/step3.jpg"}]},examples:[
    {name:"音声レジュメ生成キット（申し込み後にダウンロード）",url:null,note:null},
    {name:"書き手の立場＝税務",url:null,note:null},
    {name:"コンサル",url:null,note:null},
    {name:"第三者（既定）",url:null,note:null},
  ]},
];
