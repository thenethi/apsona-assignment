import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FaRegStickyNote,
  FaArchive,
  FaTrash,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import Cookies from "js-cookie";

function Sidebar() {
  const history = useHistory();

  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <FaRegStickyNote className="icon" /> All Notes
      </Link>
      <Link to="/archived">
        <FaArchive className="icon" /> Archived
      </Link>
      <Link to="/trashed">
        <FaTrash className="icon" /> Trash
      </Link>
      <Link to="/reminders">
        <FaBell className="icon" /> Reminders
      </Link>
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="icon" /> Logout
      </button>
    </div>
  );
}

export default Sidebar;
