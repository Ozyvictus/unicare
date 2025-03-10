import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../style.css'

const AuthSection = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="auth-section">
      <div className="pattern-dots dots-1"></div>
      <div className="pattern-dots dots-2"></div>
      
      <div className="auth-container">
        <div className="auth-tabs">
          <div 
            className={`auth-tab ${activeTab === 'login' ? 'active' : ''}`} 
            onClick={() => setActiveTab('login')}
          >
            Login
          </div>
          <div 
            className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Sign Up
          </div>
        </div>
        
        {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        
        <div className="auth-footer">
          <p>Having trouble logging in? <a href="#" className="form-link">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;