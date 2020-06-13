const express = require('express');
const {productController}=require('../../controllers');
const passport=require('../../config/passport');
const router = express.Router();
router.post('/addProduct',passport.token, productController.addProductCart);
router.get('/getAllProduct',passport.token, productController.getProductList);
router.get('/fetchProduct',passport.token, productController.fetchProductCart)

/* router.post('/login', validate(authValidation.login), authController.login);
router.post('/refresh-tokens', validate(authValidation.refreshTokens), authController.refreshTokens);
router.post('/forgot-password', validate(authValidation.forgotPassword), authController.forgotPassword);
router.post('/reset-password', validate(authValidation.resetPassword), authController.resetPassword); */

module.exports = router;