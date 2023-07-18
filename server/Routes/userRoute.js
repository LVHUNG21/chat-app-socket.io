const express=require('express');
const {registerUser} =require('../Controller/userController')
const userController =require('../Controller/userController');
const router=express.Router();

router.post('/register',userController.registerUser);
router.post('/login',userController.loginUser);
router.post('/find/:userId',userController.findUser);
router.post('/',userController.getUsers);


module.exports=router;