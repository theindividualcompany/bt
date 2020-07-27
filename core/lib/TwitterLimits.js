const TwitterLimits = {
  'https://api.twitter.com/1.1/direct_messages/events/new.json': {
    ratelimit: 1000,
    recharge_mins: 3600,
    ratelimit_str: '1000 requests per 24 hours',
  },
  'https://api.twitter.com/1.1/followers/ids.json': {
    ratelimit: 15,
    recharge_mins: 15,
    ratelimit_str: '15 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/statuses/retweeters/ids.json': {
    ratelimit: 75,
    recharge_mins: 15,
    ratelimit_str: '75 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/statuses/retweets/': {
    ratelimit: 75,
    recharge_mins: 15,
    ratelimit_str: '75 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/friendships/lookup.json': {
    ratelimit: 15,
    recharge_mins: 15,
    ratelimit_str: '15 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/users/lookup.json': {
    ratelimit: 900,
    recharge_mins: 15,
    ratelimit_str: '900 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/account/verify_credentials.json': {
    ratelimit: 75,
    recharge_mins: 15,
    ratelimit_str: '75 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/statuses/user_timeline.json': {
    ratelimit: 900,
    recharge_mins: 15,
    ratelimit_str: '900 requests per 15 mins',
  },
  'https://api.twitter.com/1.1/statuses/mentions_timeline.json': {
    ratelimit: 75,
    recharge_mins: 15,
    ratelimit_str: '75 requests per 15 mins',
  },
}

module.exports = TwitterLimits
