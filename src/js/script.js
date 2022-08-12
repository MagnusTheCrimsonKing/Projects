window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__nav'),
    menuItem = document.querySelectorAll('.menu__nav-item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__nav-active');
        })
    })
})
$(document).ready(function(){
    $('.menu__inner').slick({
        arrows: true,
        dots: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/menu/arrow-left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/menu/arrow-right.png"></img></button>',
        Infinity: true
    });
  });
  $(document).ready(function(){
    $('.industry__carousel').slick({
        speed: 1200,
        adptiveHeght: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/industry/arrow_left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/industry/arrow_right.png"></img></button>',
        Infinity: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]
    });
  });