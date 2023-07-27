import { useContext,useEffect,useState } from "react";
import { ChatContext } from "../context/chatContext";
import {baseUrl,getRequest} from "../utils/services";

export const useFetchLastestMessage=(chat)=>{
    const {newMessage,notifications}=useContext(ChatContext);
    const {lastestMessage,setLastestMessage}=useState(null);

    useEffect(()=>{
        const getMessages=async()=>{
            const respone=await getRequest(`${baseUrl}/messages/${chat?._id}`);
            if(respone.error){
                return console.log("error getting message...",error);
            }
            const lastestMessage=respone[respone?.length-1];
            setLastestMessage(lastestMessage);
        };
        getMessages();
    },[newMessage,notifications]);
    return {lastestMessage};
}