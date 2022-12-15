$(document).ready(function(){

    // location_slider
    $('.location_slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3800,
        speed: 800,
        asNavFor: '.location_sldier_item',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        swipe: true, 
     });
     $(".location_sldier_item").slick({
      dots: false,
      arrows: false,
      prevArrow: $(""),
      nextArrow: $(""),
      fade: true,
      swipe: false,
    });

    // premium_slider
    $(".premium_slider").slick({
        dots: false,
        arrows: true,
        prevArrow: $(".premium_p"),
        nextArrow: $(".premium_n"),
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 800,
        // centerMode: true, //센터모드
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
       });

    //    brand_slider
       $(".brand_slider").slick({
        dots: false,
        arrows: false,
        prevArrow: $(""),
        nextArrow: $(""),
        autoplay: true,
        autoplaySpeed: 2800,
        speed: 800,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
       });
              

});
