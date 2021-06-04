/*
const dotenv = require('dotenv');
dotenv.config();
/!*module.exports = {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
};*!/
const host = process.env.HOST
// Environment
module.exports = host

// Port
// export const PORT = process.env.PORT || 8000*/


const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) {
    throw result.error;
}

console.log("log value " + process.env.USERNAME);
const { parsed: envs } = result;
console.log(envs);
module.exports = envs;
