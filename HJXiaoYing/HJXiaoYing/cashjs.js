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
