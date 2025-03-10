import React from 'react'
import '../style.css'

function Profile() {
	return(
            <div className="patient-card">
              <div className="patient-profile">
                <div className="patient-avatar">
                  <img src="/api/placeholder/100/100" alt="Patient" />
                </div>
                <h3 className="patient-name">Roger Curtis</h3>
                <p className="patient-age">Age: 36</p>
                <button className="update-btn">Update</button>
              </div>
              
              <div className="patient-info">
                <h3>Information:</h3>
                <div className="info-grid">
                  <div className="info-label">Gender:</div>
                  <div className="info-value">Male</div>
                  
                  <div className="info-label">Blood Type:</div>
                  <div className="info-value">O+ (Positive)</div>
                  
                  <div className="info-label">Allergies:</div>
                  <div className="info-value">Milk, Penicillin</div>
                  
                  <div className="info-label">Diseases:</div>
                  <div className="info-value">Diabetes, Blood Disorders</div>
                  
                  <div className="info-label">Height:</div>
                  <div className="info-value">178cm</div>
                  
                  <div className="info-label">Weight:</div>
                  <div className="info-value">65 kg</div>
                  
                  <div className="info-label">Patient ID:</div>
                  <div className="info-value">2084961786</div>
                  
                  <div className="info-label">Last Visit:</div>
                  <div className="info-value">25th October 2019</div>
                </div>
              </div>
            </div>

	);
};

export default Profile
