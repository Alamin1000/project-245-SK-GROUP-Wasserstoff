(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  // sticky-header
  {
  var wind = $(window);
  var sticky = $('#sticky-header');
  wind.on('scroll', function() {
      var scroll = wind.scrollTop();
      if (scroll < 5) {
          sticky.removeClass('sticky');
      } else {
          sticky.addClass('sticky');
      }
  });
  $(window).on('load resize',function(){
    $('.header-section').height($('.header-in').outerHeight());
    $('body').css('--header-height',$('.header-in').outerHeight() + 'px');
  });
  }


  // owl-carousel
  $('.brand-active').owlCarousel({
    loop:true,
    margin:50,
    responsiveClass:true,
    nav:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
  });



    // window-animation
    function windowAnimation(selector,actionClass,iteration){
      document.addEventListener('scroll', function(){
        let ticking = false;
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const once = iteration;
            const windPos = window.scrollY;
            const windHeight = window.innerHeight;
            const selectorS = document.querySelectorAll(selector);
            function actionScroll(){
              selectorS.forEach(elmN => {
                let thisIs = elmN;
                let thisHeight = thisIs.offsetHeight;
                let check = windPos > (thisIs.offsetTop - (windHeight * 0.7));
                let check2 = windPos > (thisIs.offsetTop - windHeight  + (thisHeight * 0.7));
                let checkEnd = (windPos + windHeight) < (thisIs.offsetTop);
                if(checkEnd && !once) {
                  thisIs.classList.remove(actionClass); //remove-first
                }
                if (check && check2){
                  thisIs.classList.add(actionClass); //then-add
                }
              })
            }
            if(selectorS.length){
              actionScroll();
            };
            ticking = false;
          });
          ticking = true;
        }
      })
    }
    windowAnimation('.wa-object','wa-visible',false);
     

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











