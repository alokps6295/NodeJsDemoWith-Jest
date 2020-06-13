'use strict'

const  {validator} =require('indicative');
const { VALIDATION_MESSAGES }=require('./constants');

const applyRules = async(fields, rules) => {
    try {
        if (await validator.validate(fields, rules, VALIDATION_MESSAGES)) {
            return true;
        }
    } catch (error) {
        console.log(error)
        throw ({
            success: false,
            type: 'validation',
            message: (error[0].message.charAt(0).toUpperCase() + error[0].message.slice(1))
        })
    }
};
module.exports={
    applyRules
};