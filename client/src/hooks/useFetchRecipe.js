import { useEffect,useState } from "react";
import { getRequest } from "../utils/services";

export const useFetchRecipientUser= (chat,user)=>{
    const [recipientUser,setRecipientUser]=useState(null);
    const [error,setError]=useState(null);
    const recipientID=chat?.members.find((id)=>id!==user?._id);

    useEffect(()=>{
        const getUser= async()=>{
            if(!recipientID) return null;
            const respone=await getRequest(`${baseUrl}/users/find/$`)
            if(respone.error){
                return setError(error);
            }
            setRecipientUser(respone)
        }
        getUser()
    },[recipientID])
}
