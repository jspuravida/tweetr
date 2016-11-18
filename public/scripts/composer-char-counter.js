var maxLength = 140;

$(function () {

  var $counter = $(".counter");
  var $button = $(".button");

  $('.text').keyup(function(event) {

    var length = $(this).val().length;
    checkTweetLength(event, length);

  });

  $('form').submit(function(event) {

    var length = $(this).find('.text').val().length;
    checkTweetLength(event, length);

  });

  function checkTweetLength(event, length) {

    if (length > 0 && length <= maxLength) {

      $counter.text(maxLength-length).css("color", "black");
      $button.prop('disabled', false);

    } else if (length > maxLength) {

      event.preventDefault();
      $counter.css("color", "red").text("Too many!");
      $button.prop('disabled', true);

    } else {

      event.preventDefault();
      $counter.css("color", "red").text("Nothing Entered");
      $button.prop('disabled', true);

    }
  }

});

