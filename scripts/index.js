
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

postShareButtonClick = $(function (){
    var buttonWrapper = $(".share-button"),
        button = $(".share-button > a"),
        icons = $(".share-button > .icon-wrapper"),
        close = $(".close-social-icons");
    
    function init(){
        button.on("click", toggle);
        close.on("click", closeIcons);
    }
    
    function toggle(e){
        if (buttonWrapper.hasClass("active")){
            closeIcons();
        } else{
            openIcons();
        }
        e.preventDefault();
    }
    
    function openIcons(){
        buttonWrapper.addClass("active");
        button.addClass("hidden");
        buttonWrapper.animate({width: "286"}, 500);
        icons.animate({left: "0"}, 500);
    }
    
    function closeIcons(){
        buttonWrapper.removeClass("active");
          button.removeClass("hidden");
        icons.animate({left: "-286"}, 0);
        buttonWrapper.animate({width: "178"}, 0);
    }
    
    init();
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