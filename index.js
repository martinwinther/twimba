import { tweetsData } from './data';

const tweetInput = document.getElementById('tweet-input');
const tweetBtn = document.getElementById('tweet-btn');

// Click functionality
document.addEventListener('click', function (e) {
  if (e.target.dataset.reply) {
    console.log(e.target.dataset.reply);
  } else if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  } else if (e.target.dataset.retweet) {
    console.log(e.target.dataset.retweet);
  } else if (e.target.id === 'tweet-btn') {
    console.log(tweetInput.value);
  }
});

function handleLikeClick(tweetId) {
  console.log(tweetId);
  const targetTweetObj = tweetsData.filter(function (tweet) {
    return tweet.uuid === tweetId;
  })[0];

  if (!targetTweetObj.isLiked) {
    targetTweetObj.likes++;
  } else {
    targetTweetObj.likes--;
  }
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  renderTweets();
}

// Render tweets
function getFeedHtml() {
  let feedHtml = ``;
  tweetsData.forEach(function (tweet) {
    feedHtml += `
    <div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">T${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" 
                    data-reply="${tweet.uuid}"></i> 
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart" 
                    data-like="${tweet.uuid}"></i> 
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet" 
                    data-retweet="${tweet.uuid}"></i> 
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>`;
  });
  return feedHtml;
}

function renderTweets() {
  document.getElementById('feed').innerHTML = getFeedHtml();
}

renderTweets();
/*


*/
