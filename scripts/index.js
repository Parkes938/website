
$(document).ready(function() {
	console.log('Initialising Sliders');
  $('.slider-parkes').slick({
    autoplay: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    variableWidth: true,
    adaptiveHeight: false,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
});

// $(document).ready(function() {
//   console.log('Initialising Sliders');
//   $('.slider-parkes').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-parkes-nav'
//   });
//   $('.slider-parkes-nav').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-parkes',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
//   });
// });