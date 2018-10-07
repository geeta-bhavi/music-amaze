const redis = require('redis');
const dotenv = require('dotenv');
const bluebird = require('bluebird');

/**
 * Load environment variables from .env file, where keys and passwords are configured.
 */
dotenv.load({
  path: '.env.musicamaze'
});

const redisUrl = process.env.RACCOON_REDIS_URL;
const redisPort = process.env.RACCOON_REDIS_PORT;
const redisAuth = process.env.RACCOON_REDIS_AUTH;

bluebird.promisifyAll(redis.RedisClient.prototype);

redisclient = redis.createClient(redisPort, redisUrl);
if (redisAuth) {
  client.auth(redisAuth, function(err) {
    if (err) {
      throw err;
    }
  });
}

module.exports = redisclient;
