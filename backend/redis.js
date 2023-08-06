const redis = require("redis");
require("dotenv").config();


const redisClient = redis.createClient({
  url: process.env.REDIS_URL,
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
});

(async () => {
  try {
    await redisClient.connect();
  } catch (expection) {
    console.log(expection);
  }
})();

module.exports = redisClient;