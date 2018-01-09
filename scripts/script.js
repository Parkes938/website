$(document).ready(function() {
  console.log("Form Script Running");
});

$('#contactform').one('submit', function() {
  
  var first = encodeURIComponent ($('#firstfield').val());
  var last = encodeURIComponent ($('#lastfield').val());
  var email = encodeURIComponent ($('#emailfield').val());
  var subject = encodeURIComponent ($('#subjectfield').val());
  var message = encodeURIComponent ($('#messagefield').val());
  var firstEntry = "entry.2093447866";
  var lastEntry = "entry.951463637";
  var emailEntry = "entry.993572906";
  var subjectEntry = "entry.1392860080";
  var messageEntry = "entry.1637301940";
  
  var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScv35MTP43cAWjy8sLdUQm8hAb12q63w6V4zL-Ui5PaUOOWNw/formResponse?";
  var submitRef = '&submit=7337784394560228092';
  var submitURL = (baseURL + firstEntry + '=' + first + '&' + lastEntry + '=' + last + '&' + emailEntry + '=' + email + '&' + subjectEntry + '=' + subject + '&' + messageEntry + '=' + message + submitRef);
  console.log(submitURL);
  $(this)[0].action = submitURL;
  $('#input-feedback').text('Thank You!');
});
