const moment = require('moment');
const config = require('../../src/config/config');
const tokenService = require('../../src/config/passport');
const { userOne, admin } = require('./userAndPeoductFixture.fixture');

const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
const userOneAccessToken = tokenService.signJwt(userOne._id, accessTokenExpires);


module.exports = {
  userOneAccessToken
};
