import Redis from "redis";

export const redisClient = Redis.createClient();

const DEFAULT_EXPIRATION = 3600;

export const getOrSetCache = (key, callback) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, async (err, data) => {
      if (err) return reject(err);

      if (data) {
        return resolve(JSON.parse(data));
      }

      const freshData = await callback();
      redisClient.setex(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));

      resolve(freshData);
    });
  });
};
