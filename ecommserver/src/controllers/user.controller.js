const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const {addUser}=require('../validators/user.validator');
const {applyRules}=require('../config/validator');
console.log(addUser,"aaaaaa");
const registerUser = catchAsync(async(req, res) => {
    console.log("request body", req.body);
    await applyRules(req.body,addUser);
    const token = await userService.registerUser(req.body);
    console.log("user created:::::", httpStatus.CREATED)
    res.status(httpStatus.CREATED).send({ token });
});

const loginUser=catchAsync(async(req,res)=>{
    console.log("request........",req.body);
    const token = await userService.login(req.body);
    console.log("token created:::::", httpStatus.CREATED)
    res.status(httpStatus.CREATED).send({ token });
    
})
module.exports={
    registerUser,
    loginUser
}