let keys = {
    top: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ],
    center: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ],
    bottom: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ]
}
let hosts = {
    a: {
        url: 'https://www.amazon.cn/',
    },
    b: {
        url: 'https://www.baidu.com/'
    },
    c: {
        url: 'https://cn.vuejs.org/index.html',
        ico: 'https://cn.vuejs.org/images/logo.png'
    },
    d: undefined,
    e: undefined,
    f: undefined,
    j: {
        url: 'https://www.jd.com/'
    },
    x: {
        url: 'https://xiedaimala.com/'
    },
    q: {
        url: 'https://www.qq.com/'
    },
    g: {
        url: 'http://www.google.cn/'
    },
    i: {
        url: 'https://www.imooc.com/',
        
    },
    y: {
        url: 'https://www.youtube.com/'
    },
    s: {
        url: 'https://www.sina.com.cn/'
    },
    k: {
        url: 'https://www.kugou.com/'
    },
    m: undefined,
    o:{url:'https://open.weixin.qq.com/'},
    w:{url:'https://weixin.qq.com/',ico:'https://res.wx.qq.com/a/wx_fed/weixin_portal/res/static/img/1L3ryyg.png'},
    p:{url:'https://www.pptv.com/',ico:'https://sr1.pplive.cn/cms/84/55/1220081983b8ae3e259d874388c877f0.png'},
    l:{url:'http://www.lizeze.top/',ico:'http://www.lizeze.top/gitbook/images/favicon.ico'},
    v:{url:'https://www.v2ex.com/'}

}
for (let item in keys) {
    let div = document.createElement('div');
    let array = keys[item];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let kbd = document.createElement('kbd');
        kbd.id = element;
        kbd.className = 'key';
        let span = document.createElement('span');
        span.innerHTML = element;
        kbd.appendChild(span);
        if (hosts[element]) {
            let img = document.createElement('img');
            if (!hosts[element].ico)
                img.src = hosts[element].url + '/favicon.ico';
            else
                img.src = hosts[element].ico;
            kbd.appendChild(img);
            kbd.setAttribute('url', hosts[element].url);
        }
        div.appendChild(kbd);
    }
    main.appendChild(div);
}

$('.key').click(function () {
    let _ = this;
    if (_.getAttribute('url')) {
        window.open(_.getAttribute('url'));
    }
})
 $('#component-1').click(function(){
    setTimeout(function(){window.open('https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+$('#searchText').val())},1500)
 })