import Redis from "ioredis"
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
    maxRetriesPerRequest: 0,      // fail fast — don't retry 20 times per command
    enableOfflineQueue: false,    // don't queue commands while disconnected
    connectTimeout: 5000,         // 5s connection timeout
    lazyConnect: true,            // don't connect until first command
    retryStrategy: (times) => {
        if (times > 3) return null; // stop retrying after 3 attempts
        return Math.min(times * 500, 2000);
    },
});

// Prevent unhandled 'error' events from crashing the process
redis.on("error", (err) => {
    console.error("[Redis] Connection error:", err.message);
});
