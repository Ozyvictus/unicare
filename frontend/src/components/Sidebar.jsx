import React from "react";
import '../style.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-circle">
          <div className="logo-icon"></div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item active">
            <span className="nav-icon dashboard"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon users"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon messages"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon calendar"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon documents"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon reports"></span>
          </li>
          <li className="nav-item">
            <span className="nav-icon folders"></span>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
