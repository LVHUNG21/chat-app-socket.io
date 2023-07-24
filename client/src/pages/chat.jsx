import { useContext } from "react";
import {Container,Stack} from "react-bootstrap"
import { ChatContext } from "../context/chatContext";
import {UserChat} from '../components/chats/userChat'
import { AuthContext } from "../context/AuthContext";
import ChatBox from "../components/chats/chatbox";
const Chat = () => {
    const {user}=useContext(AuthContext)
    const {userChats,isUserChatsLoading,updateCurrentChat   }=useContext();
    return (<Container>
    {
        userChats?.length <1 ? null : (
            <Stack direction="horizontal" gap={4} className="align-items-start">
                <Stack className="message-box flex-grow-0 pe-3" gap={3}>
                    {isUserChatsLoading && <p>Loading chats...</p>}
                    {userChats?.map((chat,index)=>{
                        return(
                                <div key={index} onClick={()=>updateCurrentChat(chat)}>
                                    <UserChat chat={chat} user={user}></UserChat>

                                </div>
                        )
                    })}

                </Stack>
                {/* <p>ChatBot</p> */}
                <ChatBox/>
            </Stack>
        )
    } 
    
    </Container>  );
}
 
export default Chat;