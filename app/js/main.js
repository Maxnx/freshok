$(function () {

  $(window).resize(function () {
    if ($(window).width() < 769) {
      $(".header-bottom__search-input").attr("placeholder", "Я ищу...");
    }
    else {
      $(".header-bottom__search-input").attr("placeholder", "Найти в магазине ...");
    }
  });

  $('.user-nav__link--search').on('click', function () {
    $(".header-bottom__search-form").toggleClass("header-bottom__search-form--active");
  });

  $('.burger-menu__close-btn').on('click', function () {
    $(".burger-menu__content").removeClass("burger-menu__content--active");
    $(".wrapper").removeClass("wrapper--overlay");
    $('body').removeClass('no-scroll');
  });


  $('.burger-menu__btn').on('click', function () {
    $(".burger-menu__content").addClass("burger-menu__content--active");
    $(".wrapper").addClass("wrapper--overlay");
    $('body').addClass('no-scroll');
  });

  $(".cart__clean-btn").on('click', function () {
    $(".cart__items").children().remove();
  });

  $(".product__close-btn").on('click', function () {
    this.closest(".cart__item").remove();
  });

  $(".cart__close-btn").on('click', function () {
    $(".cart").removeClass("cart--active");
    $(".wrapper").removeClass("wrapper--overlay");
    $('body').removeClass('no-scroll');
  });

  $('.dropdown').on('click', function () {
    $(".dropdown").toggleClass("dropdown--active");
  });

  $('.user-nav__link--cart').on('click', function () {
    $(".cart").addClass("cart--active");
    $(".wrapper").addClass("wrapper--overlay");
    $('body').addClass('no-scroll');
  });

  $('.slider__inner').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-right-arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ],
  });

  $('.brands__inner').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    ],
  });

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);






  $(function quantityProducts() {
    var $quantityArrowMinus = $(".product__counter-minus-btn");
    var $quantityArrowPlus = $(".product__counter-plus-btn");
    var $quantityNum = $(".product__counter-input");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      if ($quantityNum.val() < 100) {
        $quantityNum.val(+$quantityNum.val() + 1);
      }
      if ($quantityNum.val() >= 100) {
        $quantityNum.val(99);
      }
    }



  })();



});
