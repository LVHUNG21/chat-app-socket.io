import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {chatContext} from "../../context/chatContext"

const PotentialChats =()=>{
    const {user}=useContext(AuthContext)
    const {potentialChats,createChat,onlineUsers}=useContext(chatContext);
    return (
        <>
        <div className="all-users">
                {
                    potentialChats &&potentialChats.map((u,index)=>{
                     return (
                        <div className="single-user" key={index} onClick={()=>createChat()}>
                            {u.name}
                            <span className={onlineUsers?.some((user)=>user?.userId===u?._id)? "user-online": ""}></span>
                        </div>
                     )  
                        
                    })
                }
        </div>
        </>
    )
}