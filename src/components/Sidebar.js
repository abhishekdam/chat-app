import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import ChatIcon from "@material-ui/icons/Chat";
import { DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";

function Sidebar() {
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
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
        <SidebarChat></SidebarChat>
      </div>
    </div>
  );
}

export default Sidebar;
