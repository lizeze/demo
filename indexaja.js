var vsrc = '';
var project = "001";
var account = "";
var codeAction;
$(function () {
    maintitle();
    sjauserCode();
    indexHtml();
    m();
    firstNav();
    leftmove();
    buttonmove();
    menu();
    toggleclick();
    for (var i = 1; i < 6; i++) {
        var target = ".main-list" + i + " a";
        $("body").on("mouseover", target, function () {
            //			alert()
            var sf = '.main-list' + (i + 2);
            $(sf).remove()
        })
    }
})


function resetreload() {
    var truthBeTold = window.confirm("监测到您是第一次登陆，请修改原始密码");
    if (truthBeTold) {
        $(".resetpass").click();
    } else
        resetreload();

}
$(".resetpass").click(function () {
    if ($(".resetpass").attr("data-userclass") == 0) {
        $(".dropdown-toggle").click();
        var truthBeTold = window.confirm("您是统一身份认证用户，请到统一身份认证地址修改密码");
        if (truthBeTold) {
            window.open(unifiedHttp, "_blank");
        }
        return false
    }
});

function maintitle() {
    $.ajax({
        type: "GET",
        url: faceHttp + "title",
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (result) {
            $("#navbar-title").html(result);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常，请关闭tab页并重新打开！");
        }
    });
}

function indexHtml() {
    $.ajax({
        type: "GET",
        url: faceHttp + "homePage",
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (result) {
            var info = JSON.parse(result);
            $("#moshou").html(info.homepagetitle);
            $("#content-main iframe").attr("src", info.homepage);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常，请关闭tab页并重新打开！");
        }
    });
}

function sjauserCode() {
    $.ajax({
        type: "GET",
        url: userCode,
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (result) {
            $(".username").attr("data-code", result);
            navtitle(result);
            renajx(result);
            $("#myModal5").find("input[data-rol='userCode']").val(result);
            if (result.userClass != 0) {
                firstCode(result);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("您尚未登录，稍后进入登录页面");

            //setTimeout(go, 1000);
            function go() {
                window.location.assign(portalserver);
            }
        }
    });
//			 var result="wzzhudan";
//			 navtitle(result);
//			 renajx(result);
}

function urlUser(url, user) {


    var url = document.URL;
    var index1 = url.lastIndexOf("=");

    var index2 = url.length;
    var cookie = url.substring(index1, index2);//后缀名

    var urlret = "";
    if (url != null) {
        var bool = url.indexOf("?");
        if (bool > 0) {
            urlret = url + "&conctid=" + user + "&cookie=" + cookie;
        } else {
            urlret = url + "?conctid=" + user + "&cookie=" + cookie;
        }
    }
    return urlret;
}

function navlisT(that, code, user) {
    $.ajax({
        type: "GET",
        url: faceHttp + "apps/" + code + "/menus?userCode=" + user,
        //url: "js/menu.json",
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (res) {
            var info = $.ET.toObjectArr(res);
            $(that).empty();
            var _ul = $("<ul>").addClass("level1").addClass('nav');
            var li1 = $("<li>").addClass("menuFirstone");
            li1.appendTo(_ul);
            $(info).each(function (i, item) {
                if (item.parentId == 0) {
                    var _li = $("<li>");
                    var _divs = $("<div>").addClass("fadiv");
                    var _a = $("<a>").addClass("current d" + item.sourceId).attr({
                        "data-id": item.sourceId,
                        "data-url": urlUser(item.url, user)//item.url+"?conctid = "+user
                    });
                    var _span = $("<span>").text(item.propertyValueName);
                    if (item.url != '') {
                        var _i = $("<g>").addClass("iconfontt");
                    } else {
                        var _i = $("<i>").addClass("iconfontt fa fa-angle-right");
                    }
                    _i.appendTo(_a);
                    _span.appendTo(_a);
                    _a.appendTo(_li);
                    _divs.appendTo(_li);
                    _li.appendTo(_ul);
                    $(_a).click(function () {
                        if (item.url != '') {
                            $('.main-list1').hide();
                        } else {
                            $('.main-list1').show();
                            navlisTson($(this).parent(), info, item.sourceId, 1, user);
                        }
                    });
                }
            })
            _ul.appendTo($(that));

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常，请关闭tab页并重新打开！");
        }
    });
}

var flagN = 1;

function navlisTson(that, info, id, flagNum, user) {
    $('.main-list' + flagNum).remove();
    var _ul = $("<ul>").addClass("level2").addClass("nav");
    //	 			if(that.find("ul").length>0){
    //	 				that.find("i").eq(0).removeClass("iconfontover fa-angle-down");
    //	 				that.find(".fadiv").empty();
    //	 			}else{
    that.parent().find('.active').find(".fadiv").empty();
    //	 				that.parent().find('.active').find("i").eq(0).removeClass("iconfontover fa-angle-down");
    that.parent().find('.active').removeClass('active');
    //	 				that.find("i").eq(0).addClass("iconfontover fa fa-angle-down");
    that.addClass("active")
    var divT = $('<div>').addClass('mainCon main-list' + flagNum);

    $(info).each(function (i, item) {
        if (item.parentId == id) {
            var _li = $("<li>");
            var _divs = $("<div>").addClass("fadiv");
            var _a = $("<a>").addClass("current d" + item.sourceId).attr({
                "data-id": item.sourceId,
                "data-url": urlUser(item.url, user)
            });
            var _span = $("<span>").text(item.propertyValueName)

            _span.appendTo(_a);
            _a.appendTo(_li);
            _divs.appendTo(_li)
            _li.appendTo(_ul);
            if (item.url != '') {
                var _i = $("<g>").addClass("iconfontt");
            } else {
                var _i = $("<i>").addClass("iconfontt fa fa-angle-right");
            }
            $(_a).click(function () {
                if (item.url != '') {
                    $('.main-list' + (parseInt(flagNum) + 1)).hide();
                } else {
                    $('.main-list' + (parseInt(flagNum) + 1)).show();
                    navlisTson($(this).parent(), info, item.sourceId, parseInt(flagNum) + 1);
                }
            })
            _i.appendTo(_a);
        }
    });
    if (info.length != 0) {
        _ul.appendTo(divT);
        divT.appendTo($('.category'))
    }

    //	 			}
}

function navtitle(user) {
    $.ajax({
        type: "GET",
        url: faceHttp + "apps?userCode=" + user,
        //url : "js/nn.json",
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (res) {
            var info = $.ET.toObjectArr(res);
            $(info).each(function (i, item) {
                var _li = $("<li>").addClass("js_toggle").attr("data-code", i);
                var _div = $("<div>").addClass("category-info list-nz");
                var _div2 = $("<div>").addClass("emptystyle");
                var _h3 = $("<h3>").addClass("category-name");
                var _a = $("<a>").addClass("current d" + item.sourceId).attr({
                    "data-id": item.sourceId,
                    "data-url": urlUser(item.url, user)//item.url + "?conctid" + user
                });
                var _img = $("<span>").css("background-image", "url(img/code" + i + ".png)").addClass("iconimg");
                var _span = $("<span>").text(item.appName).addClass("liname");
                var _divson1 = $("<div>").addClass("menu-item menu-in").attr("data-code", i);
                var _divson2 = $("<div>").addClass("area-bg");
                _img.appendTo(_a);
                _div2.appendTo(_a);
                _span.appendTo(_a);
                _a.appendTo(_h3);
                _h3.appendTo(_div);
                _div.appendTo(_li);
                _divson2.appendTo(_divson1);
                _divson1.appendTo(".main-list");
                _li.appendTo($('.category-list'));

                navlisT(_divson2, item.appCode, user);
            })
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常，请关闭tab页并重新打开！");
        }
    });
}

function renajx(user) {
    $.ajax({
        type: "GET",
        url: faceHttp + "users/" + user,
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (res) {
            var info = $.ET.toObjectArr(res)[0];
            var main = $("#form").find(".inpliststyle");
            $(".resetpass").attr("data-userclass", info.userClass);
            for (var i = 0; i < main.length; i++) {
                bb(main, i, info)
            }
            account = info.employeeId;
            $("#facemain").attr("/cas/faceScan/facScan.html?account=" + account);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常，请关闭tab页并重新打开！");
        }
    });
}

function firstCode(user) {
    $.ajax({
        type: "GET",
        url: pashttp + user + "/firstlogin",
        data: {},
        contentType: "application/json;charset=utf-8",
        dataType: "text",
        async: true,
        success: function (res) {
            codeAction = res;
            if (res == 'true') {
                resetreload();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg("网络异常");
        }
    });
}

function bb(main, i, info) {
    var code = main.eq(i).attr("data-rol");
    if (code == "userName") {
        $(".username").html(info[code]);
    }
    main.eq(i).val(info[code]);
}

function m() {
    $(".category").on("click", ">div a", function () {
        var did = $(this).attr("data-id");
        var url = $(this).attr("data-url");
        var nn = 0;
        var that = this;
        if (url != "" && url != "undefined" && url) {
            $(".main-list1").remove();
            $(".main-list2").remove();
            $(".main-list3").remove();
            $(".main-list4").remove();
            $('.category').css('margin-left', '-500px')
            $("#shadeIf").hide()
            $('#shadeIf1').hide()
            var name = $(that).find("span").html();
            $.ajax({
                type: "GET",
                url: userCode,
                data: {},
                contentType: "application/json;charset=utf-8",
                dataType: "text",
                async: true,
                success: function (result) {
                    if (result != '') {

                        showiframe(url, did, name);
                    } else {
                        layer.msg("您已断开连接，请重新登录");
                        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                        if (keys) {
                            for (var i = keys.length; i--;)
                                document.cookie = keys[i] + '=0;expires=' +
                                    new Date(0).toUTCString()
                        }
                        setTimeout(go, 5000);

                        function go() {
                            window.open(portalserver, "_self");
                        }
                    }
                },
                error: function (XMLHttpRequest,
                                 textStatus, errorThrown) {
                    layer.msg("您已断开连接，请重新登录");
                    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                    if (keys) {
                        for (var i = keys.length; i--;)
                            document.cookie = keys[i] + '=0;expires=' +
                                new Date(0).toUTCString()
                    }
                    setTimeout(go, 5000);

                    function go() {
                        window.open(portalserver, "_self");
                    }
                }
            });

            $(".menu-item").css("display", "none");
        }
    })
}

function firstNav() {
    $(".J_menuTaba").click(function () {
        $(this).siblings("span").removeClass("on");
        $(".spanDelate.disblock").removeClass("disblock");
        $(this).addClass("on");
        $("#content-main").find("iframe").hide();
        $("#content-main").find("iframe").eq(0).show();
    })
}

function showiframe(url, did, name) {
    var num = 0;
    for (var i = 0; i < $("#content-main").find("iframe").length; i++) {
        if ($("#content-main").find("iframe").eq(i).attr('src') == url) {
            num = 1;
        }
    }
    if (num == 0) {
        $(".spanDelate.disblock").removeClass("disblock");
        var _ad = '<span class="J_move dspan d' + did + '"><a data-id="d' + did + '" class="d' + did + '" onclick="aClick(this)">' + name + '</a><span class="spanDelate disblock" onclick="spanClick(this)">x</span></span>';
        $(".page-tabs-content").append(_ad);
        $(".dspan").removeClass("on");
        $(".movebiao").removeClass("movebiao");
        $("span.d" + did).addClass("on movebiao");
        $("#content-main iframe").hide();
        $("#content-main").append("<iframe id='d" + did + "' src='" + url + "' class='J_iframe' width='100%' height='100%'></iframe>");
        leftmove();
    } else {
        $(".page-tabs-content").find(".d" + did).remove();
        $(".spanDelate.disblock").removeClass("disblock");
        var _ad = '<span class="J_move dspan d' + did + '"><a data-id="d' + did + '" class="d' + did + '" onclick="aClick(this)">' + name + '</a><span class="spanDelate disblock" onclick="spanClick(this)">x</span></span>';
        $(".page-tabs-content").append(_ad);
        $(".dspan").removeClass("on");
        $(".movebiao").removeClass("movebiao");
        $("span.d" + did).addClass("on movebiao");
        $("#content-main iframe").hide();
        $("#d" + did).show();
    }
}

function buttonmove() {
    $(".nav-right").click(function () {
        var twidth = $(".content-tabs").width();
        var nwidth = 0;
        var len = $(".J_move").length;
        $(".J_move").each(function (i, item) {
            nwidth += $(this).outerWidth(true);
        });
        if (len > 5) {
            var _width = $(".J_move").eq(0).outerWidth(true);
            $(".J_move").eq(0).removeClass("J_move");
            var _left = $(".page-tabs").position().left;
            $(".page-tabs").animate({
                left: (_left - _width) + "px"
            }, 100)
        }
    })
    $(".nav-left").click(function () {
        var twidth = $(".content-tabs").width();
        var nwidth = 0;
        var _left = $(".page-tabs").position().left;
        if (_left < 0) {
            var prevspan = $(".J_move").eq(0).prev();
            prevspan.addClass("J_move");
            var _width = prevspan.outerWidth(true);
            $(".page-tabs").animate({
                left: (_left + _width) + "px"
            }, 100)
        }
    })
    $(".J_tabCloseAll").click(function () {
        $("#content-main").find("iframe").eq(0).nextAll().remove();
        $(".page-tabs-content").find(".dspan").eq(0).nextAll().remove();
        $(".page-tabs-content").find(".dspan").eq(0).click();
        $(".page-tabs").animate({
            left: "0px"
        }, 100)
    })
    $(".J_tabCloseOther").click(function () {
        $(".page-tabs-content").find(".dspan").each(function (i) {
            if (!$(this).hasClass("on") && i != 0) {
                var id = $(this).find("a").attr("data-id");
                $(this).remove();
                $("#content-main").find("#" + id).remove();
            }
        });
        $(".page-tabs").animate({
            left: "0px"
        }, 100)
    })
}

function menu() {
    $(".minimalize_sh").click(function () {
        if ($(this).attr("data-action") == "true") {
            $(this).find("img").attr("src", "img/dakai.png");
            $(this).attr("data-action", "false");
            $(".category").addClass("categorytwo");
            $("#page-wrapper").addClass("page-wrappertwo");
            $("#shadeIf").addClass("shadeIftwo")
            $(".category-name").find(".liname").slideUp();
        } else {
            $(this).find("img").attr("src", "img/guanbi.png");
            $(this).attr("data-action", "true");
            $(".category-name").find(".liname").slideDown(1000);
            $(".category").removeClass("categorytwo");
            $("#page-wrapper").removeClass("page-wrappertwo");
            $("#shadeIf").removeClass("shadeIftwo")
        }
    })

}

function toggleclick() {
    $(".dropdown-toggle").click(function () {
        if ($(this).attr("aria-expanded") == "true") {
            $("#shadeIf").hide();
        } else {
            $("#shadeIf").show();
        }
    })
    $(document).click(function () {
        if ($(".dropdown-toggle").attr("aria-expanded") == "false") {
            $("#shadeIf").hide();
        }
    })
}

function aClick(that) {
    if ($(that).parent().index() != 0) {
        $(".spanDelate.disblock").removeClass("disblock");
        $(that).parent().find(".spanDelate").addClass('disblock');
        var did = $(that).attr("class");
        $("#content-main iframe").hide();
        $("#" + did).show();
        $(that).parent("span").addClass("on").siblings("span").removeClass("on");
    }
}

function spanClick(that) {
    var inde = $(that).parent().index();
    var len = $(".page-tabs-content").find(".dspan").length;
    var oid = $(that).siblings("a").attr("data-id");
    var oaid = $(that).parent().prev("span").children("a").attr("data-id");
    var onaid = $(that).parent().next("span").children("a").attr("data-id");
    if ($(that).parent().hasClass("on")) {
        if (oaid) {
            $("#content-main").find("#" + oaid).css("display", "inline");
            $("#content-main").find("#" + oid).remove();
            $(that).parent("span").prev("span").addClass("on");
            $(that).parent("span").prev("span").find(".spanDelate").addClass("disblock");
            $(that).parent("span").remove();
            if (len == 2) {
                $("#content-main iframe").eq(0).css("display", "inline");
            }
        } else {
            if (onaid) {
                $("#content-main").find("#" + onaid).css("display", "inline");
                $("#content-main").find("#" + oid).remove();
                $(that).parent("span").next("span").addClass("on");
                $(that).parent("span").next("span").find(".spanDelate").addClass("disblock");
                $(that).parent("span").remove();
            } else {
                $("#content-main").find("#" + oid).remove();
                $(that).parent("span").remove();
            }
        }
    } else {
        $("#content-main").find("#" + oid).remove();
        $(that).parent("span").remove();
    }
    ;
    leftmove()
}

$("body").on("mouseenter", ".js_toggle", function () {
    //	$(".threeicon").show();
    $(".threeicon").css("top", $(this).offset().top + "px");
    $('.main-list1').remove();
    $('.main-list2').remove();
    $('.main-list3').remove();
    $('.main-list4').remove();
    $(".toggleHover").removeClass("toggleHover");
    $("#shadeIf1").hide();
    $(".js_toggle").find(".category-name span").css("color", "#8f969c");
    $(".js_toggle").find(".threeicon").hide();
    $(".iconimgHover").removeClass("iconimgHover");
    $(".main-list").children("div").hide();
    var codeid = $(this).attr("data-code")
    $(this).addClass("toggleHover");
    $("#shadeIf1").show();
    $(this).find(".iconimg").addClass("iconimgHover");

    //	$(this).find(".threeicon").show();
    $(this).find(".category-name span").css("color", "#fff");
    $(".main-list").children("div[data-code='" + codeid + "']").show();
});
$("body").on("mouseleave", ".js_toggle", function () {
    var that = this;
    $("body").on("mouseover", ".menu-item", function () {
        var codeid = $(this).attr("data-code");
        $(this).addClass("toggleHover");
        $("#shadeIf1").show();
        $(this).find(".iconimg").addClass("iconimgHover");
        $(this).find(".threeicon").show();
        $(this).find(".category-name span").css("color", "#fff");
        $(".main-list").children("div[data-code='" + codeid + "']").show();
        $('.main-list2').remove()
        //
        $(this).mouseleave(function () {
            if ($(this).parent().next().text() == '') {
                $(".threeicon").hide();
                var codeid = $(this).attr("data-code");
                $(that).removeClass("toggleHover");
                $("#shadeIf1").hide();
                $(that).find(".category-name span").css("color", "#8f969c");
                $(that).find(".threeicon").hide();
                $(that).find(".iconimg").removeClass("iconimgHover");
            }
        });
    });
});
$(".fsumbmit").click(function () {
    var oldPassword = $("input[data-rol='oldPassword']").val();
    var newPassword = $("input[data-rol='newPassword']").val();
    var confirm = $("input[data-rol='confirm']").val();
    var userCode = $(".username").attr("data-code");
    if (oldPassword == '') {
        layer.msg("原密码不能为空");
        return false;
    }
    if (newPassword == '') {
        layer.msg("请输入新密码");
        return false;
    }
    if (confirm == '') {
        layer.msg("请确认密码");
        return false;
    }
    if (newPassword != confirm) {
        layer.msg("输入密码不一致，请重新确认密码");
        return false;
    }
    var model = {
        "userCode": userCode,
        "oldPassword": oldPassword,
        "newPassword": newPassword,
        "confirm": confirm
    }
    var oarr = [];
    for (var p in model) {
        var obj = {};
        obj.name = p;
        if (model[p] == "") {
            obj.value = '';
        } else {
            obj.value = model[p];
        }
        ;
        oarr.push(obj);
    }
    ;
    var odata = {
        "collection": {
            "version": "1.0",
            "href": "/apps",
            "templates": [
                {
                    "data": oarr
                }
            ]
        }
    };
    $.ajax({
        type: "POST",
        url: pashttp + userCode + '/password',
        data: JSON.stringify(odata),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: true,
        success: function (result) {
            if (result.code == 0) {
                layer.msg('修改成功！');
                $(".backT").click();
            } else {
                layer.msg(result.collection.error.message + "  请重新填写");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            layer.msg('网络出错了');
        }
    });
});

$("#facemain").mouseover(function () {
    $(this).find("img").attr("src", "img/facehover.png");
})
$("#facemain").mouseleave(function () {
    $(this).find("img").attr("src", "img/faceico.png");
})

function leftmove() {
    var twidth = $(".content-tabs").width();
    var nwidth = 0;
    $(".J_move").each(function (i, item) {
        nwidth += $(this).outerWidth(true);
    });
    $(".J_movefirst").eq(0).prevAll().removeClass("J_move");
    $(".J_movefirst").eq(0).nextAll().addClass("J_move");
    var _width = $(".J_move").eq(0).outerWidth(true);
    var _left = $(".J_movefirst").position().left;
    $(".J_movefirst").removeClass("J_movefirst");
    _left = _left * (-1);
    if ((twidth - 160) < nwidth) {
        $(".J_move").eq(0).removeClass("J_move");
        $(".J_move").eq(0).addClass("J_movefirst");
        $(".page-tabs").animate({
            left: (_left - _width) + "px"
        }, 100)
        leftmove();
    } else {
        $(".J_move").eq(0).addClass("J_movefirst");
    }
}


function chongzhi() {
    $('.main-list2').remove()
    $("#shadeIf1").hide();
    $("#shadeIf").hide();
    $('.category').css('margin-left', '-1000px')
}

function data(main) {
    var mydate = new Date();
    var month = (mydate.getMonth() + 1) + "月" + mydate.getDate() + "日";
    var xinqi = mydate.getDay();
    switch (xinqi) {
        case 0:
            xinqi = "星期日";
            break;
        case 1:
            xinqi = "星期一";
            break;
        case 2:
            xinqi = "星期二";
            break;
        case 3:
            xinqi = "星期三";
            break;
        case 4:
            xinqi = "星期四";
            break;
        case 5:
            xinqi = "星期五";
            break;
        case 6:
            xinqi = "星期六";
            break;
    }
    var dat = '上午';
    var shi = mydate.getHours();
    var fen = mydate.getMinutes();
    if (shi > 12) {
        shi -= 12;
        dat = "下午";
    }
    if (shi < 10) {
        dat += "0" + shi + ":";
    } else {
        dat += shi + ":";
    }
    if (fen < 10) {
        dat += "0" + fen;
    } else {
        dat += fen;
    }
    $(main).find("span").html(month + "&nbsp;&nbsp;" + xinqi + "&nbsp;&nbsp;" + dat);
}