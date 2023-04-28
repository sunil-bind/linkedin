import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
const user = useSelector(selectUser);

    const  recentItem =(topic) =>(
        <div className="sidebar__recentItem">
            <span className="siddebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fcontent%2Fimages%2F2021%2F06%2Fw-qjCHPZbeXCQ-unsplash.jpg&tbnid=s8cnn8j7VwoKqM&vet=12ahUKEwjGtMmD0Mn-AhXHlNgFHd_uCFQQMygGegUIARDOAQ..i&imgrefurl=https%3A%2F%2Fwww.freecodecamp.org%2Fnews%2Fhow-to-add-an-image-url-to-your-div%2F&docid=kmIztsADtIrUXM&w=2000&h=1333&q=background%20image%20cdn%20link&ved=2ahUKEwjGtMmD0Mn-AhXHlNgFHd_uCFQQMygGegUIARDOAQ"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl} ></Avatar>
        {/* {user.email[0]} */}
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__ststNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__ststNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('javascript')}
        {recentItem('design')}
        {recentItem('softwareengineering')}
        {recentItem('programming')}
      </div>
    </div>
  );
}

export default Sidebar;
