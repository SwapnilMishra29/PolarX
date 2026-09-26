import React, { useState, useContext } from 'react';
import { AuthContext } from '../../App';
import './Login.css';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('v.singh@ncpor.res.in');
  const [password, setPassword] = useState('••••••••••••');
  const [stationKey, setStationKey] = useState('NCPOR-SEC-AUTH-2027');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login-viewport">
      {/* Background operational coordinates and grid */}
      <div className="grid-overlay"></div>
      <div className="telemetry-watermark">
        LAT: 69°24'29"S | LON: 76°11'14"E | BHARATI STATION (ANTARCTICA)
      </div>

      <div className="login-card-container">
        {/* Terminal Header */}
        <div className="login-card-header">
          <div className="login-brand-group">
            <span className="login-brand-icon">❄</span>
            <span className="login-brand-name">POLARX</span>
          </div>
          <span className="login-system-tag">AUTH GATEWAY 2.4</span>
        </div>

        <div className="login-card-body">
          <div className="login-title-section">
            <h1 className="login-main-title">Expedition Management & Logistics Control</h1>
            <p className="login-instructions">
              Enter government credentials to access expedition command telemetry.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="login-field-group">
              <label className="login-label">OFFICIAL EMAIL ID</label>
              <input
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>

            <div className="login-field-group">
              <label className="login-label">PASSWORD / TOKEN</label>
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>

            <div className="login-field-group">
              <label className="login-label">STATION SECURITY CREDENTIAL KEY</label>
              <input
                type="text"
                className="login-input font-mono"
                value={stationKey}
                onChange={(e) => setStationKey(e.target.value)}
                required
              />
            </div>

            <div className="security-notice-box">
              <span className="notice-icon">⚠</span>
              <span className="notice-text">
                OPERATIONAL ACCESS ONLY. All activity, cargo scans, inventory overrides, and movement tracking logged in accordance with Antarctic Treaty and NCPOR security protocols.
              </span>
            </div>

            <button type="submit" className="login-submit-btn">
              SIGN IN TO COMMAND CONSOLE
            </button>
          </form>
        </div>

        <div className="login-card-footer">
          <div className="footer-line">
            National Centre for Polar and Ocean Research (NCPOR)
          </div>
          <div className="footer-subline">
            Ministry of Earth Sciences • Government of India • Headland Sada, Vasco-da-Gama, Goa
          </div>
        </div>
      </div>
    </div>
  );
}
