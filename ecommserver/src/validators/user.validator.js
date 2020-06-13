'use strict'
const { rule } =require('indicative');
// import  from './../../../config/constants';

const addUser = {
    name: 'required|string',
    email:'required|string'
};
module.exports={addUser};