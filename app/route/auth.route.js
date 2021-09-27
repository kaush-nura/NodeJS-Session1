const express=require('express');
const router =express.Router();
const authController =require('../controller/auth.controller');


router.post('/',authController.signIn);
router.get('/',authController.getAllUsers);


module.exports=router;


