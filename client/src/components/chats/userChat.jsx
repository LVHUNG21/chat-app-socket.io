import {Stack} from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipe";
import avatarer from '../../assets/profilee.svg'
import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotification";
import { useFetchLastestMessage } from "../../hooks/useFetchLastestMessage";
import moment from "moment"

export const UserChat = (chat,user) => {
    const {recipientUser}=useFetchRecipientUser(chat,user);
    const {onlineUser,notifications,markThisUserNotificationsAsRead}=useContext(ChatContext);
    const {lastestMessage}=useFetchLastestMessage(chat);

    const unreadNotifications=unreadNotificationsFunc(notifications);
    const thisUserNotifications=unreadNotifications?.filter(n=>n.senderId===recipientUser?._id)

    const isOnline=onlineUser?.some((user)=>user?.userId=== recipientUser?._id);
    const truncateText=(text)=>{
        let shortText=text.substring(0,20);
        
        if(text.length>20){
            shortText=shortText+"..."
        }
        return shortText;
    }

    return <Stack onClick={()=>{
        if(thisUserNotifications?.length !==0){
            markThisUserNotificationsAsRead(thisUserNotifications,notifications)
        }
    }} direction="horizontal" gap={3} role="button" className="user-card align-items-center p-2 justify-content-between">
            <div className="d-flex">
                <div className="me-2">
                    <img src={avatarer} height="35px" ></img>
                    
                </div>
                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">{
                        lastestMessage?.text && (
                            <span>{truncateText(lastestMessage?.text)}</span>
                        )
                    }</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">
                    {moment(lastestMessage?.createdAt).calendar()}
                </div>
                <div className={thisUserNotifications.length>0?"this-user-notifications":null}>
                    {thisUserNotifications?.length>0 ? thisUserNotifications?.length :''}
                </div>
                <span className={isOnline ? "user-online" :""}></span>
            </div>
    </Stack>
    
}
 
export default UserChat;