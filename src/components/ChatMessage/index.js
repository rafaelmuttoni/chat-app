import React, { memo } from "react";

const ChatMessage = ({ message, auth }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={message.photoURL} alt="profile" />
      <p>{message.text}</p>
    </div>
  );
};

export default memo(ChatMessage);
