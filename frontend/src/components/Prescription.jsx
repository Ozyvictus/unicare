import React from 'react'            
import '../style.css'

function Prescription({disease, date, duration}) {
    return(
          <div className="prescriptions-table">
            <div className="table-header">
                <div className="header-cell">{disease}</div>
                <div className="header-cell">{date}</div>
                <div className="header-cell">{duration}</div>
            </div>
          </div>
   );
};

export default Prescription
