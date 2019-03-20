(function (win) {
  let evt = win.orientationchange ? 'orientationchange' : 'resize'
  function cal () {
    let winW = document.documentElement.clientWidth
    document.documentElement.style.fontSize = 10 * (winW / 350) + 'px'
  }
  win.addEventListener(evt, cal, false)
  win.addEventListener('DOMContentLoaded', cal, false)
})(window)
