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

	$('#contactform').one('submit',function(){
        var first = encodeURIComponent($('#firstfield').val());
        var last = encodeURIComponent($('#lastfield').val());
		var email = encodeURIComponent($('#emailfield').val());
        var subject = encodeURIComponent($('#subjectfield').val());
		var message = encodeURIComponent($('#messagefield').val());
        var first = "entry.2093447866";
        var last = "entry.951463637";
		var email = "entry.993572906";
        var subject = "entry.1392860080";
		var message = "entry.1637301940";
        var baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLScv35MTP43cAWjy8sLdUQm8hAb12q63w6V4zL-Ui5PaUOOWNw/formResponse;
        var submitRef = '&submit=7337784394560228092';
        var submitURL = (https://docs.google.com/forms/d/e/1FAIpQLScv35MTP43cAWjy8sLdUQm8hAb12q63w6V4zL-Ui5PaUOOWNw/formResponse/first=firstfield&entry.last=lastfield&entry.email=emailfield&entry.subject=subjectfield&entry.message=messagefield&submit=7337784394560228092;
		console.log(submitURL);
        $(this)[0].action=submitURL;
        $('#input-feedback').text('Thank You!');
    });