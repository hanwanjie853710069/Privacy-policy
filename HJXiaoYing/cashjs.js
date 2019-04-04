/**
 * Created by wangmumu on 2019/3/28.
 */
!(function(doc, win) {
  var docEl = doc.documentElement;
  var reCaculate = function() {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
  };
  reCaculate();
  win.addEventListener('orientationchange', reCaculate, false);
  win.addEventListener('resize', reCaculate, false);
  doc.addEventListener('DOMContentLoaded', reCaculate, false);

})(document, window);

var timer = null;

function displayDate(){

  clearInterval(timer);

  var content = document.getElementById('content');

  timer = setInterval(function(){
    //缓冲动画的速度参数变化值
    var speed = (a-odiv.offsetLeft)/10;
    //如果速度是大于0，说明是向右走，那么就向上取整
    speed = speed>0?Math.ceil(speed):Math.floor(speed);
    //Math.floor();向下取整
      content.style.marginTop = '2rem';

  },30);

}
