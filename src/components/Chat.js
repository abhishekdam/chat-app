import React, { useEffect, useState } from "react";
import "./Chat.css";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Avatar, IconButton } from "@material-ui/core";

function Chat() {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You Typed >>>", input);
    setInput("");
  };

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
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">Aakash Chahal</span>
          Hey guys
          <span className="chat_timestamp">10:30 pm</span>
        </p>
      </div>
      {/* the chat footer containing the text box and the send button */}
      <div className="chat_footer">
        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default Chat;
