const httpStatus = require('http-status');
const { product } = require('../models');
const ApiError = require('../utils/ApiError');


const addProduct = async(prodDetail) => {
    try{
    console.log("save ",prodDetail);
    const productResult = await product.create(prodDetail);
    console.log("aaaa",productResult);
    return productResult;
}
    catch(err){
        console.log(err,"error");
        throw err;
    }
};
const getProductList= async() => {
    try {
        console.log("get All Documents");
        const allDoc = await product.find({});
        console.log("docs", allDoc);
        return allDoc;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const fetchProduct=async(params)=>{
    try{
        let {usermail}=params;
        const allDocument = await product.find({usermail:usermail});
        console.log("docs", allDocument);
        return allDocument;
    }catch(err){
        console.log(err);
        throw err;
    }
}
module.exports={
    addProduct,
    getProductList,
    fetchProduct
}