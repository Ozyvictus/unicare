import React, { useState } from 'react';
import '../style.css';
import NotificationBanner from '../components/notification';
import HeroSection from '../components/hero';
import AppointmentSection from '../components/appointments';
import EmergencySection from '../components/emergency';
import PharmacySection from '../components/pharmacy';
import MentalHealthSection from '../components/mentalhealth';
import Footer from '../components/footer';

function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  
  return (
    <div className="app">
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

export default Home;