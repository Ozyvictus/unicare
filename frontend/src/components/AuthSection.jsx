import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import RegisterForm from './RegisterForm'; // Ensure RegisterForm is imported
import '../auth.css';

const AuthSection = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const route = "http://127.0.0.1:8000/api/token/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post(route, { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/profile"); // Ensure this is the correct route
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

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

        {activeTab === 'login' ? (
          <form onSubmit={handleSubmit} className="form-container">
            <h1>Login</h1>
            <input
              className="form-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {loading && <span>Loading...</span>}
            <button className="form-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        ) : (
          <RegisterForm />
        )}

        <div className="auth-footer">
          <p>Having trouble logging in? <a href="#" className="form-link">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
