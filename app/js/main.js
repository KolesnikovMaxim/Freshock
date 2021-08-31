$(function () {
      $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slider__prev"><img src="images/svg/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slider__next"><img src="images/svg/arrow-right.svg" alt="arrow-right"></button>',
        responsive: [
          {
            breakpoint: 769,
            settings: {
            arrows: false,
            }
          }, 
        ]
      })
      });