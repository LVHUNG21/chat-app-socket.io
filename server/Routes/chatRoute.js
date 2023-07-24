const express=require("express");
const {createChat, findUserChats,findChat}=require("../Controller/chatController");
// const { create } = require("../Models/chatModel");
const router=express.Router();

router.post("/",createChat);
router.get('/:userId',findUserChats)
router.get('/find/:firstId/:secondId',findChat)

module.exports=router