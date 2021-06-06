import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import ChatIcon from "@material-ui/icons/Chat";
import { DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import db from "../firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    //   This whole thing is a side-bar line up :
    <div className="sidebar">
      {/* Header of the sidebar */}
      <div className="sidebar_header">
        {/* Account Avatar */}
        <Avatar></Avatar>
        <div className="sidebar_headerRight">
          <IconButton>
            {/* Status Btn */}
            <DonutLarge></DonutLarge>
          </IconButton>
          <IconButton>
            {/* New chat btn */}
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            {/* More option btn */}
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>
      {/* Search box in sidebar */}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined></SearchOutlined>
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      {/* sidebar chat list */}
      <div className="sidebar_chats">
        <SidebarChat addNewChat></SidebarChat>
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}></SidebarChat>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
