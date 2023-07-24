const messageModel=require('../Models/messageModel');

const createMessage=async (req,res)=>{
    const {chatId,senderId,text}=req.body;
    const message=new messageModel({
        chatId,senderId,text
    })
    try {
        const respone=await message.save();
        res.status(200).json(respone);
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
};
const getMessages=async(req,res)=>{
    const {chatId}=req.params;
    try {
        const message=await messageModel.find({chatId});
        res.status(200).json(message);
        
    } catch (error) {
        
    }
}
module.exports={createMessage,getMessages}