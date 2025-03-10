// MentalHealthSection.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons';

function MentalHealthSection() {
  return (
    <div className="section">
      <h2 className="section-title">Mental Health Support</h2>
      <div className="card">
        <div className="card-content">
          <p className="card-text">Connect with university counselors or access mental health resources anytime you need support.</p>
          
          <div className="features">
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h3 className="feature-title">24/7 Counselor Chat</h3>
              <p className="feature-description">Chat with professional counselors anytime</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </div>
              <h3 className="feature-title">Counseling Sessions</h3>
              <p className="feature-description">Schedule in-person or virtual counseling appointments</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <h3 className="feature-title">Self-Help Resources</h3>
              <p className="feature-description">Access guides, exercises, and resources for mental wellness</p>
            </div>
          </div>
          
          <button className="btn">Get Support</button>
        </div>
      </div>
    </div>
  );
}

export default MentalHealthSection;
