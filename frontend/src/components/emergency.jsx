import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faFileAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function EmergencySection() {
  return (
    <div className="section">
      <h2 className="section-title">Emergency Services</h2>
      <div className="card">
        <div className="card-content">
          <p className="card-text">Quick access to emergency services and reporting for urgent medical situations.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <h3 className="feature-title">Call Ambulance</h3>
              <p className="feature-description">Request campus ambulance services with one click</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              <h3 className="feature-title">Accident Reports</h3>
              <p className="feature-description">File accident reports for university records</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3 className="feature-title">Location Services</h3>
              <p className="feature-description">Share your location for faster emergency response</p>
            </div>
          </div>
          
          <button className="btn">Emergency Services</button>
        </div>
      </div>
    </div>
  );
}

export default EmergencySection;
