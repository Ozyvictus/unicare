
// PharmacySection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrescriptionBottleAlt, faUsers, faTruck } from '@fortawesome/free-solid-svg-icons';

function PharmacySection() {
  return (
    <div className="section">
      <h2 className="section-title">Pharmacy Requests</h2>
      <div className="card">
        <div className="card-content">
          <p className="card-text">Request medications from the university pharmacy or connect with peers for medicine sharing when appropriate.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faPrescriptionBottleAlt} />
              </div>
              <h3 className="feature-title">Prescription Refills</h3>
              <p className="feature-description">Request prescription refills from the university pharmacy</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3 className="feature-title">Peer Medicine Network</h3>
              <p className="feature-description">Safely request OTC medications from peers during off-hours</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h3 className="feature-title">Campus Delivery</h3>
              <p className="feature-description">Get medications delivered to your campus residence</p>
            </div>
          </div>
          
          <button className="btn">Request Medication</button>
        </div>
      </div>
    </div>
  );
}

export default PharmacySection;

