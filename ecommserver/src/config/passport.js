const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const { user } = require('../models');
const jwt = require('jsonwebtoken');
const passport =require('passport');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerify = async (payload, done) => {
  try {
    console.log("verifying jwt",payload)
    const userDetail = await user.findById(payload.id);
    console.log("userDetail",userDetail);
    if (!userDetail) {
      return done(null, false);
    }
    done(null, userDetail);
  } catch (error) {
    done(error, false);
  }
};
const signJwt=async(id)=>{
  console.log(id,"params:::::::::");
  let token = jwt.sign({id}, config.jwt.secret);
  return token

}
const token = (req, res, next) =>
    passport.authenticate('token', { session: false }, (err, user, info) => {
        
        console.log("user...",user,err);
        if (err || !user) {
            return res.status(401).json({ success: false, message: "You are not authorized to access this API" })
        }
        req.logIn(user, { session: false }, (err) => {
            if (err) return res.status(401).json({ success: false, message: "You are not authorized to access this API" });
            next()
        })
    })(req, res, next)
passport.use('token',new JwtStrategy(jwtOptions, jwtVerify));

//const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  token,
  signJwt
};
