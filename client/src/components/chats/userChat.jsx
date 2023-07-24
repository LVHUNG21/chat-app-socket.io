import {Stack} from "react-bootstrap";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipe";
import avatarer from '../../assets/profilee.svg'
import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";
const UserChat = (chat,user) => {
    const {recipientUser}=useFetchRecipientUser(chat,user);
    const {onlineUser}=useContext(ChatContext);

    const isOnline=onlineUser?.some((user)=>user?.userId=== recipientUser?._id);

    return <Stack direction="horizontal" gap={3} role="button" className="user-card align-items-center p-2 justify-content-between">
            <div className="d-flex">
                <div className="me-2">
                    <img src={avatarer} height="35px" ></img>
                    
                </div>
                <div className="text-content">
                    <div className="name">{recipientUser?.name}</div>
                    <div className="text">Text message</div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-end">
                <div className="date">
                    12/12/2022
                </div>
                <div className="this-user-notifications">2</div>
                <span className={isOnline ? "user-online" :""}></span>
            </div>
    </Stack>
    
}
 
export default UserChat;