(function ($) {
    "use strict";



    $('.client').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false

              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
              arrows:false
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
                      


      $(".slick-current").next().removeClass("middle");
      $(".slick-current").next().addClass("middle");

      $(".slick-next").click(function(){
        $(".slick-current").next().removeClass("middle");
        $(".slick-current").next().addClass("middle");
      })

      $(".slick-prev").click(function(){
        $(".slick-current").next().removeClass("middle");
        $(".slick-current").next().addClass("middle");
      })


     


      // $('.slider-for').slick({
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   arrows: true,
      //   fade: true,
      //   asNavFor: '.nav-slide'
      // });
      // $('.nav-slide').slick({
      //   slidesToShow: 5,
      //   slidesToScroll: 1,
      //   asNavFor: '.slider-for',
      //   dots: false,
      //   centerMode: true,
      //   focusOnSelect: true,
      //   arrows:false
      // });


        $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.nav-slide'
      });
      $('.nav-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        arrows:false
      });

      if ($(window).width() < 576) {
        $(".slick-current").next().removeClass("middle");
     }
     else {
        alert('More than 960');
     }


})(jQuery);	    