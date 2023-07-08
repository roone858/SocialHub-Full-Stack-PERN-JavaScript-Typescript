import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/sidebar.css";
import profileImage from "../static/1.jpg";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";

// import logo from"../../public/school-svgrepo-com.svg"
export default function Sidebar() {
  const listItems = [
    { name: "Feeds", icon: "bx-grid-alt", link: "/feeds" },
    { name: "Friends", icon: "bx-user", link: "/friends" },
    { name: "profile", icon: "bx-user-voice", link: "/profile" },
    // { name: "Classes", icon: "bx-box", link: "/classes" },
    // { name: "Subjects", icon: "bx-book", link: "/subjects" },
    // { name: "Timetable", icon: "bx-table", link: "/timetable" },
    // { name: "Attendance", icon: "bx-down-arrow-alt", link: "/attendance" },
    // { name: "Setting", icon: "bx-cog", link: "/setting" },
  ];
  const user = useSelector((state:any) => state.user.data);
  const [isActive, setActive] = useState(false);
  const toggleHandler = () => {
    isActive ? setActive(false) : setActive(true);
  };

  return (
    <>
      <div className={isActive ? "sidebar open" : "sidebar"}>
        <div className="logo-details">
          <i className="bx bx-book icon"></i>

          <div className="logo_name">Social Media</div>
          <i className="bx bx-menu" onClick={toggleHandler} id="btn"></i>
        </div>
        <ul className="sidebar-list">
          {listItems.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.link}>
                  <i className={"bx " + item.icon}></i>
                  <span className="links_name">{item.name}</span>
                </Link>
                <span className="tooltip">{item.name}</span>
              </li>
            );
          })}
          <li className="profile">
            <div className="profile-details">
              <Avatar sx={{ bgcolor: red[500] ,marginRight: " 10px"}} aria-label="recipe">
             m
              </Avatar>
              <div className="name_job">
                <div className="name">Mahmoud Gamal</div>
              </div>
            </div>
            <i
              onClick={() => {
                window.location.href = "/";
              }}
              className="bx bx-log-out"
              id="log_out"
            ></i>
          </li>
        </ul>
      </div>
    </>
  );
}
