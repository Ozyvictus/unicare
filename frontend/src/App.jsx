import React from 'react';
import './style.css';

const MedicalDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1 className="page-title">Current Appointment</h1>
          
          <div className="dashboard-layout">
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
            
            <div className="vitals-container">
              <div className="vitals-grid">
                <VitalCard 
                  title="Heart Rate" 
                  value="80" 
                  unit="bpm" 
                  icon="heart" 
                  color="red" 
                />
                <VitalCard 
                  title="Body Temperature" 
                  value="36.5" 
                  unit="°C" 
                  icon="temperature" 
                  color="orange" 
                />
                <VitalCard 
                  title="Glucose" 
                  value="100" 
                  unit="mg/dl" 
                  icon="glucose" 
                  color="red" 
                />
              </div>
              
              <div className="reports-section">
                <h3>Test Reports</h3>
                <div className="reports-grid">
                  <ReportCard 
                    title="CT Scan-Full Body" 
                    date="12th February 2020" 
                    icon="scan" 
                    color="blue" 
                  />
                  <ReportCard 
                    title="Creatine Kinase T" 
                    date="13th February 2020" 
                    icon="lab" 
                    color="orange" 
                  />
                  <ReportCard 
                    title="Eye Fluorescein Test" 
                    date="15th February 2020" 
                    icon="eye" 
                    color="red" 
                  />
                </div>
              </div>
              
              <div className="prescriptions-section">
                <div className="prescriptions-header">
                  <h3>Prescriptions</h3>
                  <button className="add-prescription-btn">
                    <span className="plus-icon">+</span> 
                    Add a prescription
                  </button>
                </div>
                
                <div className="prescriptions-table">
                  <div className="table-header">
                    <div className="header-cell">Prescriptions</div>
                    <div className="header-cell">Date</div>
                    <div className="header-cell">Duration</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="table-cell">
                      <div className="prescription-item">
                        <span className="prescription-icon orange"></span>
                        Heart Diseases
                      </div>
                    </div>
                    <div className="table-cell">25th October 2019</div>
                    <div className="table-cell">3 months</div>
                  </div>
                  
                  <div className="table-row">
                    <div className="table-cell">
                      <div className="prescription-item">
                        <span className="prescription-icon orange"></span>
                        Skin Care
                      </div>
                    </div>
                    <div className="table-cell">8th August 2019</div>
                    <div className="table-cell">2 months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-circle">
          <div className="logo-icon"></div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className="nav-item active"><span className="nav-icon dashboard"></span></li>
          <li className="nav-item"><span className="nav-icon users"></span></li>
          <li className="nav-item"><span className="nav-icon messages"></span></li>
          <li className="nav-item"><span className="nav-icon calendar"></span></li>
          <li className="nav-item"><span className="nav-icon documents"></span></li>
          <li className="nav-item"><span className="nav-icon reports"></span></li>
          <li className="nav-item"><span className="nav-icon folders"></span></li>
        </ul>
      </nav>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-back">
        <span className="back-icon">←</span>
        <span>Back to dashboard</span>
      </div>
      <div className="header-user">
        <div className="notifications">
          <span className="notification-icon"></span>
        </div>
        <div className="user-profile">
          <img src="/api/placeholder/32/32" alt="Dr. Alex Haas" className="user-avatar" />
          <span className="user-name">Dr. Alex Haas</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
    </header>
  );
};

const VitalCard = ({ title, value, unit, icon, color }) => {
  return (
    <div className="vital-card">
      <div className={`vital-icon ${color}`}>
        <span className={`icon ${icon}`}></span>
      </div>
      <div className="vital-info">
        <p className="vital-title">{title}</p>
        <p className="vital-value">{value}<span className="vital-unit">{unit}</span></p>
      </div>
    </div>
  );
};

const ReportCard = ({ title, date, icon, color }) => {
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

export default MedicalDashboard;
