import { createContext, useState, useEffect, useCallback } from "react";
import { baseUrl, getRequest, postRequest } from '../utils/services';
import {io} from "socket.io-client"

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [currentChats, setCurrentChats] = useState(null);
    const [message, setMessage] = useState(null);
    const [isMessageLoading, setIsMessageLoading] = useState(false);
    const [messageError, setMessageError] = useState(null);
    const [sendTextMessageError,setSendTextMessageError]=useState(null);
    const [newMessage,setNewMessage]=useState(null)
    const [socket,setSocket]=useState(null);
    const [onlineUsers,setOnlineUsers]=useState([]);
    const [notifications,setNotifications]=useState([]);
    const [allUsers,setAllUsers]=useState([]);

    //initial socket
    useEffect(()=>{
        const newSocket=io("http://localhost:5173");
        setSocket(newSocket);
        return ()=>{
            newSocket.disconnect()
        }

    },[user]);
// add online user
    useEffect(()=>{
            if(socket===null)
            return;
             socket.emit("addNewUser",user?.id)
             socket.on("getOnlineUsers",(res)=>{
                    setOnlineUsers(res)
             })

    },[socket])
    //send messae
    useEffect(()=>{
        if(socket===null) 
            return;

        const recipientID=chat?.members.find((id)=>id!==user?._id);

        
        socket.omit("sendMessage",{...newMessage,recipientID});
    },[newMessage])

    // receive message
    useEffect(()=>{
        if(socket===null) 
            return;
            // on is receive , emit is send
        socket.on("getMessages",res =>{
            if(currentChats?._id !== res.chatId) return ;
    setMessage((prev)=>[...prev,res]);

        });
        socket.on("getNotification",(res)=>{
            const isChatOpen=currentChat?.members.some(id=>id===res.senderId);
            if(isChatOpen){
                setNotifications((prev)=>[{...res,isRead:true},...prev])
            }
            else{
                setNotifications((prev)=>[res,...prev])
            }
        });
        return ()=>{
            socket.off("getMessage");
            socket.off("getNotification");
        }
    },[socket,currentChats])

    useEffect(() => {
        const getUsers = async () => {
            const respone = await getRequest(`${baseUrl}/users`)
            if (respone.error) {
                return console.log("error fetching users", respone)
            }
            const pChats = respone.filter((u) => {
                let isChatCreated = false;
                if (user?.id === u._id) return false;
                if (userChats) {
                    isChatCreated = userChats?.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id
                    })
                }
                return !isChatCreated;
            });
            setPotentialChats(pChats);
            setAllUsers(respone);

        }
        getUsers()
    }, [userChats])

    useEffect(() => {
        const getUserChats = async () => {
            if (user?.id) {
                setIsUserChatsLoading(true),
                    setUserChatsError(null);
                const respone = await getRequest(`${baseUrl}/chats/${user?.id}`)
                setIsUserChatsLoading(false);
                if (respone.error) {
                    return setUserChatsError(respone);
                }
                setUserChats(respone)
            }
        }
        getUserChats()
    }, [user,notifications])

    useEffect(() => {
        const getMessage = async () => {

            setIsMessageLoading(true),
                setMessageError(null);
            const respone = await getRequest(`${baseUrl}/messages/${currentChats?.id}`)
            setIsMessageLoading(false);
            if (respone.error) {
                return setMessageError(respone);
            }
            setMessageError(respone)

        }
        getMessage()
    }, [user])

    const sendTextMessage = useCallback(
        async (textMessage, sender, currentChatId, setTextMessage) => {
            if (!textMessage)
                return console.log("youmust be  type something...")
            const respone = await postRequest(`${baseUrl}/messages`, JSON.stringify({ chatId: currentChatId, 
                senderId: sender.id, text: textMessage }))
            
                if(respone.error){
                    return setSendTextMessageError(respone)
                }
                setNewMessage(respone)
                setMessage((prev)=>[...prev,responde])
                setTextMessage("")
        }

        ,[]
    )

    const markAllNotificationsAsRead=useCallback((notifications)=>{
        const mNotifications=notifications.map((n)=>{
            return {...n,isRead:true};
        });
        setNotifications(mNotifications);
    },[])
    
    const markNotificationAsRead=useCallback((n,userChats,user,notifications)=>{
        const desiredChat=userChats.find(chat=>{
            const chatMembers=[user._id,n.senderId]
            const isDesiredChat=chat?.members.every((member)=>{
                return chatMembers.includes(member);
            });
            return isDesiredChat;
        });
        //mark notification as read;
        const mNotifications=notifications.map(el=>{
            if(n.senderId===el.senderId){
                return {...n,isRead:true}
            }else{
                return el
            }
        })
        updateCurrentChat(desiredChat)
        setNotifications(mNotifications)
    },[])

    const markThisUserNotificationsAsRead=useCallback((thisUserNotifications,notifications)=>{
        const mNotifications=notifications.map((el)=>{
            let notification;
            thisUserNotifications.array.forEach(element => {
                if(n.senderId===el.senderId){
                    notification ={...n,isRead:true};
                } else{
                    notification=el;
                }
            });
            return notification;
        })
            setNotifications(mNotifications);
    },[])

    const updateCurrentChat = useCallback((chat) => {
        setCurrentChats(chat)
    })
    const createChat = useCallback(async (firstId, secondId) => {
        const respone = await postRequest(`${baseUrl}/chats`, JSON.stringify(firstId, secondId))
        if (respone.error) {
            return console.log("error creating chat", respone);
        }
        setUserChats((prev) => [...prev, respone]);
    }, [])

    return (<ChatContext.Provider value={{markThisUserNotificationsAsRead,markNotificationAsRead,markAllNotificationsAsRead,notifications, message, onlineUsers,isMessageLoading, messageError, createChat, updateCurrentChat, userChats, isUserChatsLoading, userChatsError, potentialChats,sendTextMessage,allUsers }}>{children}</ChatContext.Provider>)
}