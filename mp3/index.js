$(function () {

    var arr = ["1543387557099.mp3", "Zwytest001.mp3"];               //把需要播放的歌曲从后往前排，这里已添加两首音乐，可继续添加多个音乐
    var myAudio = new Audio();
    myAudio.preload = true;
    myAudio.controls = true;
    myAudio.src = arr.pop();         //每次读数组最后一个元素
    myAudio.addEventListener('ended', playEndedHandler, false);
    myAudio.play();
    document.getElementById("audioBox").appendChild(myAudio);
    myAudio.loop = false;//禁止循环，否则无法触发ended事件
    function playEndedHandler() {
        myAudio.src = arr.pop();
        myAudio.play();
        console.log(arr.length);
        !arr.length && myAudio.removeEventListener('ended', playEndedHandler, false);//只有一个元素时解除绑定
    }






})