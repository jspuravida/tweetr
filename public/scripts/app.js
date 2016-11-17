/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {

  var tweetData =[
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
///////////////////CREATING NEW TWEETS
function renderTweets(tweets) {
  tweets.forEach(function (data) {
    createTweetElement(data);
    return;
  })
////////////////////////SAFEGUARDING TEXTFIELDS
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

////// FUNCTION FOR TURNING A TWEET INTO AN ELEMENT ///////
function createTweetElement(tweet) {

  var name = tweet.user.name;
  var avatar = tweet.user.avatars.small;
  var handle = tweet.user.handle;
  var content = tweet.content.text;
  var date = timeSince(tweet.created_at);
  var footerIcons = '<i class="fa fa-flag" aria-hidden="true"></i><i class="fa fa-retweet" aria-hidden="true"></i><i class="fa fa-heart" aria-hidden="true"></i>';

  // $(".tweeterName").append(name);
  // $(".avatar").attr('src', avatar)
  // $(".tweetHandler").append(handle);
  // $(".tweetMessage").append(content);
  // $(".footerDate").append(timeSince(date));

  $('.listOfTweets').append(
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

};



////////// CORRECT TIME STAMP FOR TWEET
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
};






}

renderTweets(tweetData);


  console.log('DOMContentLoaded has fired');
});


