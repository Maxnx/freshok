$(function () {

  $('.dropdown').on('click', function () {
    $(".dropdown").toggleClass("dropdown--active");
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
 

});
