let answerElement = document.querySelector('#name');
let output ='<ul style="list-style: none;">';

let tweets = [
  { name: "三郎BOT", message: "21時でござる", tweetedAt: "2019-11-01 21:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png" },
  { name: "次郎", message: "悲しいので寝ます", tweetedAt: "2019-11-01 20:14:44", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "次郎", message: "33-4・・・・・", tweetedAt: "2019-11-01 20:13:03", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "太郎", message: "満腹度が回復した", tweetedAt: "2019-11-01 20:05:38", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "三郎BOT", message: "20時でござる", tweetedAt: "2019-11-01 20:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  },
  { name: "太郎", message: "もぐもぐ・・・", tweetedAt: "2019-11-01 19:50:22", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "ごはんつくった！", tweetedAt: "2019-11-01 19:48:01", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "お腹空いたなあ....", tweetedAt: "2019-11-01 19:30:59", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "太郎", message: "お腹空いたなあ", tweetedAt: "2019-11-01 19:08:01", avatar: "https://morimorihoge.github.io/teu2019f/images/mukiryoku_man.png" },
  { name: "次郎", message: "久々にやきうやったるで！パワプロやけどな！", tweetedAt: "2019-11-01 19:04:12", avatar: "https://morimorihoge.github.io/teu2019f/images/idol_fan_penlight_sougankyou.png" },
  { name: "三郎BOT", message: "19時でござる", tweetedAt: "2019-11-01 19:00:00", avatar: "https://morimorihoge.github.io/teu2019f/images/omocha_robot.png"  }
];

function Doall() {
  let output ='<ul style="list-style: none">';
  let answerElement = document.querySelector('#name');
  for (let i = 0; i < tweets.length; i++) {
    output = output + `<li><img src=" ${tweets[i].avatar}"<b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>`
  }
  output = output+'</ul>';
  answerElement.innerHTML = output;
}



function Dotaro() {
  let output ='<ul style="list-style: none">';
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name !== '太郎'){
      continue;
    }
    output = output + `<li><img src=" ${tweets[i].avatar}"<b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>`
  }
  output = output+'</ul>';
  answerElement.innerHTML = output;
}

function Doziro() {
  let output ='<ul style="list-style: none">';
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name !== '次郎'){
      continue;
    }
    output = output + `<li><img src=" ${tweets[i].avatar}"<b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>`
  }
  output = output+'</ul>';
  answerElement.innerHTML = output;
}

function Dotdo() {
  let output ='<ul style="list-style: none">';
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].name !== '三郎BOT'){
      continue;
    }
    output = output + `<li><img src=" ${tweets[i].avatar}"<b>${tweets[i].name}</b>:${tweets[i].message}<i>${tweets[i].tweetedAt}</i></li>`
  }
  output = output+'</ul>';
  answerElement.innerHTML = output;
}

