$(function () {

  $(".product__close-btn").on('click', function () {
    this.closest(".cart__item").remove(); 
  });
 
  $('.product-one__slide-img').on('click', function (e) { 
    $('.product-one__slider').toggleClass('product-one__slider--active');
    $(".product-one__slider-inner").slick('setPosition');
    $('body').toggleClass('lock');
  });

  $('.product-one__input').styler();

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: 'rgba(193, 193, 193, 0.3)',
    ratedFill: "#FFB800",
    spacing: "6px",
    readOnly: true,
    starSvg: '<svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-star"></use></svg>'
  });

  $(".comments__form-star").rateYo({
    starWidth: "16px",
    normalFill: 'rgba(193, 193, 193, 1)',
    ratedFill: "#FFB800",
    spacing: "6px",
    starSvg: '<button class="comments__form-star-btn" type="button"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-star"></use></svg></button>'
  });

  $('.filters__title').on('click', function () {
    $(this).toggleClass('filters__title--active');
    $(this).next().toggleClass('filters__content--rolled-up');
    // $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.filters-btn').on('click', function () {
    $('.catalog__filters').addClass('catalog__filters--active');
    $('body').addClass('lock');
  });

  $('.filters__close-btn').on('click', function () {
    $('.catalog__filters').removeClass('catalog__filters--active');
    $('body').removeClass('lock');
  });


  $('.product-one__close-btn').on('click', function () {
    $('.product-one__slider').removeClass('product-one__slider--active');
    $(".product-one__slider-inner").slick('setPosition');
    $('body').removeClass('lock');
  });


  $('.content-filters__label').on('click', function () {
    $('.content-filters__label').toggleClass('content-filters__label--active');
  });

  $('.content-filters__btn').on('click', function () {
    $('.content-filters__btn').removeClass('content-filters__btn--active');
    $(this).addClass('content-filters__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product').addClass('product--list');
    $('.catalog-content__inner').addClass('catalog-content__inner--list');
  });

  $('.button-grid').on('click', function () {
    $('.product').removeClass('product--list');
    $('.catalog-content__inner').removeClass('catalog-content__inner--list');
  });

  var $range = $(".price__input");
  var $inputFrom = $(".price__from-input");
  var $inputTo = $(".price__to-input");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 100;
  var to = 1000;

  $range.ionRangeSlider({
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });

  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);

  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  $('.user-nav__link--search').on('click', function () {
    $(".header-bottom__search-form").toggleClass("header-bottom__search-form--active");
  });

  $('.user-nav__link--cart').on('click', function () {
    $(".cart").addClass("cart--active");
    $('body').addClass('lock');
  });

  $(document).on('click', function (e) {
    var dropdown = $(".dropdown");
    var cart = $(".cart");
    var search = $(".header-bottom__search-form");
    var cart_link = $('.user-nav__link--cart');
    var search_link = $('.user-nav__link--search');
    var burger_btn = $('.burger-menu__btn');
    var burger_menu = $('.burger-menu__content');
    var sort = $('#label1');
    var show = $('#label2');
    var filters = $('.catalog__filters');
    var filters_btn = $('.filters-btn');
    var product_one_slider = $('.product-one__slider');
 

    if (!product_one_slider.is(e.target) && product_one_slider.has(e.target).length === 0) {
      if (product_one_slider.hasClass('product-one__slider--active')) {
        product_one_slider.removeClass('product-one__slider--active');
        $(".product-one__slider-inner").slick('setPosition');
        $('body').removeClass('lock');
      }
    }

    if (!filters_btn.is(e.target) && !filters.is(e.target) && filters.has(e.target).length === 0) {
      if (filters.hasClass('catalog__filters--active')) {
        filters.removeClass('catalog__filters--active');
        $('body').removeClass('lock');
      }
    }

    if (!show.is(e.target) && show.has(e.target).length === 0) {
      if (show.hasClass('content-filters__label--active')) {
        show.removeClass('content-filters__label--active');
      }
    }

    if (!sort.is(e.target) && sort.has(e.target).length === 0) {
      if (sort.hasClass('content-filters__label--active')) {
        sort.removeClass('content-filters__label--active');
      }
    }

    if (!burger_btn.is(e.target) && !burger_menu.is(e.target) && burger_menu.has(e.target).length === 0) {
      if (burger_menu.hasClass('burger-menu__content--active')) {
        burger_menu.removeClass('burger-menu__content--active');
        $('body').removeClass('lock');
      }
    }

    if (!search_link.is(e.target) && !search.is(e.target) && search.has(e.target).length === 0) {
      search.removeClass('header-bottom__search-form--active');
    }

    if (!cart_link.is(e.target) && !cart.is(e.target) && cart.has(e.target).length === 0) {
      if (cart.hasClass('cart--active')) {
        cart.removeClass('cart--active');
        $('body').removeClass('lock');
      }
    }

    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
      dropdown.removeClass('dropdown--active');
    }
  });

  $('.burger-menu__btn').on('click', function () {
    $("body").addClass('lock');
    $(".burger-menu__content").addClass("burger-menu__content--active");
  });

  $('.dropdown').on('click', function () {
    $(".dropdown").toggleClass("dropdown--active");
  });

  $(window).on('resize', function () {
    if ($(window).width() < 1320) {
      $('.product').removeClass('product--list');
      $('.catalog-content__inner').removeClass('catalog-content__inner--list');
    }

    if ($(window).width() < 769) {
      $(".header-bottom__search-input").attr("placeholder", "Я ищу...");
    }
    else {
      $(".header-bottom__search-input").attr("placeholder", "Найти в магазине ...");
    }
  });

  $('.burger-menu__close-btn').on('click', function () {
    $(".burger-menu__content").removeClass("burger-menu__content--active");
    $('body').removeClass('lock');
  });



  $(".cart__close-btn").on('click', function () {
    $(".cart").removeClass("cart--active");
    $('body').removeClass('lock');
  });

  $(".cart__clean-btn").on('click', function () {
    $(".cart__items").children().remove();
  });

  $('.related__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-right-arrow"></use></svg></button>',
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      },
    ],
  });

  $('.product-one__slider-inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-right-arrow"></use></svg></button>',
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: true,
    fade: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          swipe: true
        }
      },
    ],
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



  if (containerEl1 && containerEl2) {
    var config = {
      controls: {
        scope: 'local'
      }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
  }


});
