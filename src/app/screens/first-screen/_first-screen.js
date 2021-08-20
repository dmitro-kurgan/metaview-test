const animation1 = document.querySelector('.anim-typewriter-1');
const animation2 = document.querySelector('.anim-typewriter-2');

function typeWriter(item, delay, duration, speed, dot) {
  const content = item.getAttribute('data-text');
  let elem;

  if (dot !== undefined) {
    dot = '<span class="anim-typewriter__symbol anim-typewriter__symbol--last">' + dot + '</span>';
  }

  elem = '<span class="anim-typewriter__symbol">' + content.split('').join('</span><span>') + '</span>' + dot;

  setTimeout(function () {
    $(elem).hide().appendTo(item).each(function (i) {
      $(this).delay(speed * i).css({
        display: 'inline',
        opacity: 0
      }).animate({
        opacity: 1
      }, duration);
    });
  }, delay);
}

typeWriter(animation1, 0, 75, 75);
typeWriter(animation2, 1500, 75, 75, '');
