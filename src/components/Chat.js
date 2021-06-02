import React, { useEffect, useState } from "react";
import "./Chat.css";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

function Chat() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      {/* Chat header containg the info about the reaciver last seen and etc */}
      <div className="chat_header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      {/* all the chats */}
      <div className="chat_body"></div>
      {/* the chat footer containing the text box and the send button */}
      <div className="chat_footer"></div>
    </div>
  );
}

export default Chat;
