import dotenv from 'dotenv';

//const result = dotenv.config();
const config = {
    refreshTokenExpire: (60 * 60 * 24) * 200,    // 200 days
    refreshTokenSecret: process.env.PASSWORD_HASH_SECRET,
    accessTokenExpire: 60 * 20,
    accessTokenSecret: process.env.PASSWORD_HASH_SECRET,
}

export default config;
