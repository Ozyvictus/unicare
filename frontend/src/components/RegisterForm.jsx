import React from 'react';

const RegisterForm = () => {
  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" className="form-control" placeholder="Enter your full name" />
        <svg className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </div>
      
      <div className="form-group">
        <label htmlFor="student-id">Student ID</label>
        <input type="text" id="student-id" className="form-control" placeholder="Enter your student ID" />
        <svg className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>
      
      <div className="form-group">
        <label htmlFor="signup-email">Email Address</label>
        <input type="email" id="signup-email" className="form-control" placeholder="Enter your email address" />
        <svg className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </div>
      
      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input type="password" id="signup-password" className="form-control" placeholder="Create a password" />
        <svg className="form-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      
      <div className="checkbox-group">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="checkbox-label">I agree to the <a href="#" className="form-link">Terms & Conditions</a></label>
      </div>
      
      <button className="btn-primary">Create Account</button>
    </div>
  );
};

export default RegisterForm;