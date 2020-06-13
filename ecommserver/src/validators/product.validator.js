'use strict'
const { rule } =require('indicative');
// import  from './../../../config/constants';

const addProduct = {
    name: 'required|string',
    description:'required|string',
    usermail:'required|string'
};

const fetchProduct={
    usermail: 'required|string',
}
module.exports={
    addProduct,
    fetchProduct
}