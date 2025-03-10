import React from "react";
import "../style.css"


function Records({title, date, icon, color }){
  return (
    <div className="report-card">
      <div className={`report-icon ${color}`}>
        <span className={`icon ${icon}`}></span>
      </div>
      <div className="report-info">
        <p className="report-title">{title}</p>
        <p className="report-date">{date}</p>
      </div>
    </div>
  );
};

export default Records;
