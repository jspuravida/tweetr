$(function () {
  console.log('DOMContentLoaded has fired');

var maxLength = 140;
$('.text').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('.counter').text(length);

  if (length < 0) {
    $(".counter").text(length).css("color", "red");
  }
});
});

