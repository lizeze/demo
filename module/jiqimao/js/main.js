var result = `
/* 现在开始画个哆啦A梦吧*/
/* 添加一个画板 */
.canvas { position: relative; }

/* 在画板中添加机器猫 */
.doraemon { position: relative; }

/* 现在开始画头部啦  */
.doraemon .head {
    width: 320px;
    height: 300px;
    position: relative;
    border-radius: 150px;
    background-color: #07bbea;
    border: 2px solid #555;
    z-index: 1;
}

/* 代码不够突出， 把代码高亮一下吧 */
.token.comment{color:slategray}
.token.selector{color:#690}
.token.punctuation{color:#999}
.token.property{color:#905}
.token.function{color:#DD4A68}

/* 开始画眼睛咯  */
.eyes { position: relative; z-index: 5; }

/*  这里是添加眼白  */
.eyes .eye {
    width: 72px;
    height: 82px;
    background-color: #fff;
    border: 2px solid #000;
    position: absolute;
    border-radius: 35px;
    top: 40px;
}

/*  这里是添加眼珠并且使眼珠会动哦  */

.eyes .eye::after {
    content: '';
    width: 14px;
    height: 14px;
    background-color: #000;
    display: block;
    position: absolute;
    top: 40px;
    border-radius: 50%;
    animation: eyesmove 5s linear infinite;
}

.eyes .left { left: 82px; }
.eyes .right { left: 156px; }
.eyes .left::after { left: 50px; }
.eyes .right::after { left: 7px; }

@keyframes eyesmove {
    60% { margin: 0; }
    70% { margin: -22px 0 0 0; }
    75% { margin: -22px 0 0 -5px; }
    80% { margin: -22px 0 0 5px; }
    87% { margin: -22px 0 0 0; }
    90% { margin: 0; }
}

/* 添加白脸底  */
.head .faces { position: relative; }

.faces .face {
    height: 195px;
    width: 265px;
    background-color: #fff;
    position: absolute;
    top: 75px;
    left: 25px;
    border-radius: 150px;
}

/* 鼻子哦 鼻子哦 */
.faces .nose {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: #c93300;
    border: 2px solid #000;
    position: absolute;
    top: 110px;
    left: 140px;
    z-index: 4;
}

/*  鼻子中间的线  */
.faces .nose-line {
    width: 3px;
    height: 100px;
    background-color: #000;
    position: absolute;
    top: 143px;
    left: 155px;
    z-index: 4;
}

/* 微笑的嘴巴  */
.faces .mouth {
    width: 220px;
    height: 400px;
    border: none;
    border-bottom: 3px solid #000;
    border-radius: 120px;
    position: absolute;
    top: -160px;
    left: 45px;
}

/* 胡须 */
.faces .whiskers {
    width: 220px;
    height: 80px;
    background-color: #fff;
    position: absolute;
    top: 120px;
    left: 45px;
    z-index: 2;
}

.whiskers .whisker {
    width: 60px;
    height: 2px;
    background-color: #000;
    position: absolute;
    left: 0;
}

.whiskers .right { left: 165px; }
.whiskers .top { top: 25px; }
.whiskers .middle { top: 45px; }
.whiskers .bottom { top: 65px; }
.whiskers .rotate160 { transform: rotate(160deg); }
.whiskers .rotate20 { transform: rotate(20deg); }

/*  铃铛  */
.neck {
    width: 230px;
    height: 20px;
    background-color: #c40;
    border: 2px solid #000;
    border-radius: 10px;
    position: absolute;
    top: 270px;
    left: 45px;
    z-index: 4;
}

.neck .bell {
    height: 40px;
    width: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #f9f12a;
    position: absolute;
    top: 5px;
    left: 90px;
}

.bell .bellTongue {
    width: 12px;
    height: 10px;
    background-color: #000;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 14px;
}

.neck .bell::after {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background-color: #f9f12a;
    border: 2px solid #333;
    position: absolute;
    top: 10px;
}

.neck .bell::before {
    content: '';
    display: block;
    width: 3px;
    height: 15px;
    background-color: #000;
    position: absolute;
    top: 27px;
    left: 18px;
}

/* 开始画身体了 */
.body {
    width: 220px;
    height: 165px;
    background-color: #07beea;
    border: 2px solid #333;
    position: absolute;
    left: 50px;
    top: 290px;
}

/* 口袋 */
.body .pocket {
    width: 170px;
    height: 170px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: 22px;
}

.body .pocket::after {
    content: '';
    display: block;
    width: 130px;
    height: 130px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    position: absolute;
    top: 20px;
    left: 19px;
}

.body .pocket::before {
    content: '';
    display: block;
    width: 134px;
    height: 60px;
    background-color: #fff;
    border-bottom: 2px solid #000;
    position: absolute;
    top: 28px;
    left: 19px;
    z-index: 1;
}

/* 手 */
.body .hand {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0px;
}

.body .hand.left { left: -72px; }
.body .hand.right { right: -72px; }

.body .hand .arm {
    width: 80px;
    height: 50px;
    background-color: #07bbea;
    border: 1px solid #000;
    z-index: -1;
    position: absolute;
    top: 0px;
}

.body .hand.left .arm { left: 20px; transform: rotate(145deg); }
.body .hand.right .arm { transform: rotate(35deg); }
.body .hand .arm::after {
    content: '';
    display: block;
    width: 60px;
    height: 60px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
}

.body .hand .write {
    width: 5px;
    height: 45px;
    background-color: #07bbea;
    border-radius: 2px;
    position: absolute;
}

.body .hand.left .arm::after { left: 50px; bottom: -7px; }

.body .hand.right .arm::after { right: -33px; bottom: -7px; }

.body .hand.left .write { top: -5px; left: 67px; }

.canvas .doraemon .body .hand.right .write { top: -5px; right: 67px; }

/* 脚 */
.footer { position: absolute; }

.footer .foot {
    width: 125px;
    height: 30px;
    background-color: #fff;
    border: 2px solid #333;
    border-radius: 80px 60px 60px 40px;
    position: absolute;
    top: 163px;
}

.footer .left { left: -25px; }
.footer .right { left: 115px; }
.footer .write {
    width: 28px;
    height: 10px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 60px 60px 0 0;
    border-bottom: none;
    position: absolute;
    top: 155px;
    left: 95px;
}

/* 这样的哆啦A梦你们喜欢么 */ 
`;

let timeout = 200;
let n = 0;

function ele(selector) {
  return document.querySelector(selector);
}

function writeCode(result, timeout) {
  return setInterval(() => {
    n += 1;
    ele('.code').innerHTML = Prism.highlight(result.substring(0, n), Prism.languages.css, 'css');
    ele('#styleTag').innerHTML = result.substring(0, n);
    ele('.code').scrollTop = ele('.code').scrollHeight;
    if (n >= result) {
      window.clearInterval(id);
    }
  }, timeout)
}

function resetSpeed(timeout) {
  ele('.speed').innerHTML = `速度：${6 - Math.floor(timeout / 40)}`;
  window.clearInterval(timerId);
  timerId = writeCode(result, timeout);
}

ele('.up').addEventListener('click', () => {
  if (timeout > 0) timeout -= 40;
  resetSpeed(timeout);
})

ele('.down').addEventListener('click', () => {
  if (timeout < 200) timeout += 40;
  resetSpeed(timeout);
})

var timerId = writeCode(result, timeout);