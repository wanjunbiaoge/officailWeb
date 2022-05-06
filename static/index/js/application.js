(function (doc) {

  setTimeout(() => {
    var $ = function (el) {
      try {
        var item = doc.querySelectorAll(el);
        return item.length == 1 ? item[0] : item;
      } catch (err) {
        console.log(err)
      }
    }

    var info = console.info;

    var activeIndexEle = $('.active-index');

    var empile1 = new Empile($('.demo1>.container'), {
      autoplay: {
        delay: 4000,
        docHiddenOff: true,
      },
      waitForTransition: true,
      isClickSlide: true,
      navigation: {
        nextEl: $('.demo1 .btn-right'),
        prevEl: $('.demo1 .btn-left'),
      },
      on: {
        //卡片切换时执行
        slideChange: function () {
          //设置'当前显示的是第[xxx]张'元素的文本内容
          activeIndexEle.textContent = this.activeIndex + 1;
        }
      },
      pagination: {
        el: document.querySelector('.navigation'),
        clickable: true,
        bulletClass: 'dot',
        bulletActiveClass: 'active',
      },
      css: function (coord, absCoord) {
        var zIndex = 100 - absCoord,
          opacity = Math.pow(.92, absCoord).toFixed(3),
          scale = 'scale(' + Math.pow(.9, absCoord).toFixed(2) + ')',
          translateX = 'translateX(' + 170 * coord + 'px)';

        var transform = [translateX, scale].join(' ');
        return {
          zIndex: zIndex,
          opacity: opacity,
          transform: transform,
        }
      },

    });

    info(empile1);

  }, 2000)
})(document);
