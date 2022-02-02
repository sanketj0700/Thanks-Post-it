const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const dotenv = require('dotenv');

dotenv.config();

const authorizeAccessToken = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.DOMAIN}/.well-known/jwks.json`
    }),
    //audience: process.env.AUDIENCE,
    issuer: `https://${process.env.DOMAIN}/`,
    algorithms: ["RS256"]
  });

  module.exports = {
      authorizeAccessToken,
  };