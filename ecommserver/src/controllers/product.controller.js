const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const {addProduct,fetchProduct}=require('../validators/product.validator');
const {applyRules}=require('../config/validator');

const addProductCart = catchAsync(async(req, res) => {
    console.log("request body", req.body);
    await applyRules(req.body,addProduct);
    const prod = await productService.addProduct(req.body);
    console.log("user created:::::", prod,httpStatus.CREATED)
    res.status(httpStatus.CREATED).send({ prod });
});
const getProductList = catchAsync(async(req,res) => {
        const allDocs = await productService.getProductList();
        console.log(allDocs);
        res.status(httpStatus.OK).send({ allDocs });
});

const fetchProductCart=catchAsync(async(req,res)=>{
    console.log(req.query)
    await applyRules(req.query,fetchProduct);
    let allDoc=await productService.fetchProduct(req.body);
    console.log(allDoc);
    res.status(httpStatus.OK).send({ allDoc });
})



module.exports = {
    addProductCart,
    getProductList,
    fetchProductCart
};