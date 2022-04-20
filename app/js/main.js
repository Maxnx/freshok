$(function () {
   
  $('.filter__title').on('click', function () {
    $(this).toggleClass('filter__title--active');
    $(this).next().toggleClass('filter__content--rolled-up');
    // $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.filters-btn').on('click', function () {
    $('.catalog__filters').addClass('catalog__filters--active');
    $('body').addClass('lock');
  });

  $('.filters-close-btn').on('click', function () {
    $('.catalog__filters').removeClass('catalog__filters--active');
    $('body').removeClass('lock');
  });

  $('.catalog-content__label-show').on('click', function () {
    $('.catalog-content__label-show').toggleClass('catalog-content__label-show--active');
  });

  $('.catalog-content__label-sort').on('click', function () {
    $('.catalog-content__label-sort').toggleClass('catalog-content__label-sort--active');
  });

  $('.catalog-content__filter-btn').on('click', function () {
    $('.catalog-content__filter-btn').removeClass('catalog-content__filter-btn--active');
    $(this).addClass('catalog-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product').addClass('product--list');
    $('.catalog-content__inner').addClass('catalog-content__inner--list');
  });

  $('.button-grid').on('click', function () {
    $('.product').removeClass('product--list');
    $('.catalog-content__inner').removeClass('catalog-content__inner--list');
  });

  var $range = $(".filter-price__input");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
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
    var sort = $('.catalog-content__label-sort');
    var show = $('.catalog-content__label-show');
    var filters = $('.catalog__filters');
    var filters_btn = $('.filters-btn');


    if (!filters_btn.is(e.target) && !filters.is(e.target) && filters.has(e.target).length === 0) {
      if (filters.hasClass('catalog__filters--active')) {
        filters.removeClass('catalog__filters--active');
        $('body').removeClass('lock');
      }
    }

    if (!show.is(e.target) && show.has(e.target).length === 0) {
      if (show.hasClass('catalog-content__label-show--active')) {
        show.removeClass('catalog-content__label-show--active');
      }
    }

    if (!sort.is(e.target) && sort.has(e.target).length === 0) {
      if (sort.hasClass('catalog-content__label-sort--active')) {
        sort.removeClass('catalog-content__label-sort--active');
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

  $(".product__close-btn").on('click', function () {
    this.closest(".cart__item").remove();
  });


  $(".cart__close-btn").on('click', function () {
    $(".cart").removeClass("cart--active");
    $('body').removeClass('lock');
  });

  $(".cart__clean-btn").on('click', function () {
    $(".cart__items").children().remove();
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
 

});
