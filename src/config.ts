import dotenv from 'dotenv';

const result = dotenv.config({path:"/Users/aravind-5668/Aravind/pet/finance/.env"});
//const result = dotenv.config();
console.log(result);
const config = {    
    refreshTokenExpire: (60 * 60 * 24) * 200,    // 200 days
    refreshTokenSecret: result.parsed["PASSWORD_HASH_SECRET"],
    accessTokenExpire: 60 * 20,
    accessTokenSecret: result.parsed["PASSWORD_HASH_SECRET"],
}

export default config;
