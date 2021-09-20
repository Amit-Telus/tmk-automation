const env = process.env.APP_ENV || "staging";
const config = require(`./${env}`);
config.env = env;
module.exports = config;
