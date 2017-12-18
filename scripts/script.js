var distanceY;

function init() {
    window.addEventListener('scroll', function(e){
            distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerbar = document.querySelector("#nav-menu");
            headerlogo = document.querySelector("#logo");
        if (distanceY > shrinkOn) {
            if (classie.has(headerlogo,"topLogo")) {
                classie.remove(headerlogo,"topLogo");
            }
            if (classie.has(headerbar,"topNav")) {
                classie.remove(headerbar,"topNav");
            }
        } else if(windowsize > 900){

            classie.add(headerlogo,"topLogo");
            classie.add(headerbar,"topNav");
        }
    });
}
window.onload = init();

var windowsize = $(window).width();

$(window).resize(function() {
  windowsize = $(window).width();
  if(windowsize<900)
  {
    if (classie.has(headerlogo,"topLogo")) {
        classie.remove(headerlogo,"topLogo");
    }
    if (classie.has(headerbar,"topNav")) {
        classie.remove(headerbar,"topNav");
    }
  }
});
