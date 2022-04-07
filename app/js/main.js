$(function () {

  
  $(".cart__clean-btn").on('click', function () { 
    $(".cart__items").children().remove();
  })

  $(".product__close-btn").on('click', function () { 
    this.closest(".cart__item").remove();
  })

  $(".cart__close-btn").on('click', function () {
    $(".cart").removeClass("cart--active");
    $(".wrapper").removeClass("wrapper--overlay");
  })

  $(".cart__close-btn").on('click', function () {
    $(".cart").removeClass("cart--active");
    $(".wrapper").removeClass("wrapper--overlay");
  })

  $('.dropdown').on('click', function () {
    $(".dropdown").toggleClass("dropdown--active");
  })

  $('.user-nav__link--cart').on('click', function () {
    $(".cart").addClass("cart--active");
    $(".wrapper").addClass("wrapper--overlay");
  })


  $('.slider__inner').slick({
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-left-arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="19" height="32"><use xlink:href="images/sprite.svg#icon-right-arrow"></use></svg></button>'
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
