import React from 'react';
import Sidebar from '../components/Sidebar';
import Records from '../components/Records';
import Vitals from '../components/Vitals'
import Header from '../components/Header';
import Profile from '../components/Profile';
import Prescription from '../components/Prescription.jsx'
import '../style.css';

function Home() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-content">
          <h1 className="page-title">Current Appointment</h1>
          <div className="dashboard-layout">
            <Profile /> 
	    <div className="vitals-container">
	      <div className="vitals-grid">
                    <Vitals 
                      title="Heart Rate" 
                      value="80" 
                      unit="bpm" 
                      icon="heart" 
                      color="red" 
                    />
                    <Vitals 
                      title="Body Temperature" 
                      value="36.5" 
                      unit="°C" 
                      icon="temperature" 
                      color="orange" 
                    />
                    <Vitals 
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
                     <Records 
                       title="CT Scan-Full Body" 
                       date="12th February 2020" 
                       icon="scan" 
                       color="blue" 
                     />
                     <Records 
                       title="Creatine Kinase T" 
                       date="13th February 2020" 
                       icon="lab" 
                       color="orange" 
                     />
                     <Records 
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
                     <Prescription 
	  		disease = "Heart disease"
	  		date = "5th October 2018"
	  		duration = "3 Months"
	  	     />
                     <Prescription 
	  		disease = "Pneumonia"
	  		date = "27th April 2020"
	  		duration = "5 Months"
	  	     />
	  	   </div>
	       </div>
	    </div>
	  </div>
	</div>
      </main>
    </div>
  );
};

export default Home;
