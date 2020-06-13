const httpStatus = require('http-status');
const { user } = require('../models');
const ApiError = require('../utils/ApiError');
const passport = require('../config/passport');

const registerUser = async(userBody) => {
    try{
    console.log("save ",userBody);
    const userResult = await user.create(userBody);
    console.log(userResult,"entry data");
    let result=await passport.signJwt(userResult['id']);
    console.log("aaaa",result);
    return result;
}
    catch(err){
        console.log(err,"error");
        throw err;
    }
};
const getProductList= async() => {
    try {
        console.log("get All Documents");
        const allDoc = await range.find({});
        console.log("docs", allDoc);
        return allDoc;
    } catch (err) {
        console.log(err);
    }
};
module.exports = {
    registerUser,
    getProductList
};