import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/chatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotification";

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthContext)
    const { notifications, userChats, allUsers, markAllNotificationsAsRead } = useContext(ChatContext)

    const unreadNotifications = unreadNotificationsFunc(notifications);
    const modifiedNotifications = notifications.map((n) => {
        const sender = allUsers.find(user => user._id === n.senderId);
        return {
            ...n,
            senderName: sender?.name,
        }
    })
    return (

        <div className="notifications">
            <div className="notifications-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
                {unreadNotifications?.length === 0 ? null : (
                    <span className="notification-count">
                        <span>
                            {unreadNotifications?.length}
                        </span>
                    </span>
                )}
            </div>
            {isOpen ? <div className="notifications-box">
                <div className="notifications-header">
                    <h3>Notifications</h3>
                    <div className="mark-as-read" onClick={() => markAllNotificationsAsRead(notifications)}>Mark all  as read</div>
                </div>
                {modifiedNotifications?.length === 0 ? <span className="notification">No notifications yet...</span> : null}
                {modifiedNotifications && modifiedNotifications.map((n, index) => {
                    return (
                        <div key={index} className={n.isRead ? "Notification" : "notification not-read"} onClick={() => {
                            markAllNotificationsAsRead(n, userChats, user, notifications);
                            setIsOpen(false);

                        }}>

                            <span>
                                {`${n.senderName} sent you a new message`}
                                <span className="notification-time">
                                    {moment(n.date).calendar()}
                                </span>
                            </span>
                        </div>
                    )
                })}

            </div> : null}
        </div>
    )
}
export default Notification;