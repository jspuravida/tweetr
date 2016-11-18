/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {

//========USING TOGGLE ON THE COMPOSE BUTTON
$( ".new-tweet ").hide();


$( ".composeButton" ).click(function() {
  $( ".new-tweet" ).toggle( "slow", function() {
    $( " .text ").focus()
  })
})



///////////////////CREATING NEW TWEETS
function renderTweets(tweets) {
  $listOfTweets = $('.listOfTweets');
  $listOfTweets.empty();
  tweets.forEach(function (data) {
    $tweet = createTweetElement(data);
    $listOfTweets.prepend($tweet);
  })
}


////// FUNCTION FOR TURNING A TWEET INTO AN ELEMENT ///////
function createTweetElement(tweet) {

  ////////////////////////SAFEGUARDING TEXTFIELDS
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  var name = tweet.user.name;
  var avatar = tweet.user.avatars.small;
  var handle = tweet.user.handle;
  var content = tweet.content.text;
  var date = timeSince(tweet.created_at);
  var footerIcons = '<i class="fa fa-flag" aria-hidden="true"></i><i class="fa fa-retweet" aria-hidden="true"></i><i class="fa fa-heart" aria-hidden="true"></i>';


  tweet = $(
    `<article class="tweet">
      <header>
        <img class="avatar" src="${avatar}">
        <div class="tweeterName">${name}</div>
        <div class="tweetHandler">${handle}</div>
      </header>
      <div class="tweetMessage">${escape(content)}</div>
      <footer>
        <div class="footerDate">${date}</div>
        <div class="footerIcons">${footerIcons}
        </div>
      </footer>
    </article>`
  );
  return tweet;
};

$('')

//========== STAY ON PAGE, SERIALIZE STRING
$('form[action="/tweets"]').on( "submit", function( event ) {
  event.preventDefault();
  var tweetInput = $(this);

  $.ajax({
    method: 'POST',
    url: tweetInput.attr('action'),
    data: tweetInput.find("textarea").serialize()
  }).done(function () {
    loadTweets();
    $('textarea').val('');
  });
});

//======= FUNCTION FOR FETCHING TWEETS
function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    dataType: 'json',
    success: function(tweetData) {
      renderTweets(tweetData);
    }
  });
}
loadTweets();

////////// CORRECT TIME STAMP FOR TWEET
function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / (365 * 24 * 60 * 60));
  if (interval > 1) {
    return interval + " years";
  }
  interval = Math.floor(seconds / (30 * 24 * 60 * 60));
  if (interval > 1) {
    return interval + " months";
  }
  interval = Math.floor(seconds / (24 * 60 * 60));
  if (interval > 1) {
    return interval + " days";
  }
  interval = Math.floor(seconds / (60 * 60));
  if (interval > 1) {
    return interval + " hours";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes";
  }
  return Math.floor(seconds) + " seconds";
};





console.log('DOMContentLoaded has fired');

});


