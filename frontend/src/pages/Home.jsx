import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import NotificationBanner from './components/NotificationBanner';
import HeroSection from './components/HeroSection';
import AppointmentSection from './components/AppointmentSection';
import EmergencySection from './components/EmergencySection';
import PharmacySection from './components/PharmacySection';
import MentalHealthSection from './components/MentalHealthSection';
import Footer from './components/Footer';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  
  return (
    <div className="app">
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <div className="main-content">
        <NotificationBanner />
        <HeroSection />
        <AppointmentSection />
        <EmergencySection />
        <PharmacySection />
        <MentalHealthSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;