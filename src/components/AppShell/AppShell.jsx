import React, { useState, useEffect, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext, NotificationContext } from '../../App';
import './AppShell.css';

const NAV_ITEMS = [
  { path: '/', label: 'Control Center', icon: '⬡' },
  { path: '/expeditions', label: 'Expeditions', icon: '◈' },
  { path: '/cargo', label: 'Cargo Tracking', icon: '▤' },
  { path: '/inventory', label: 'Station Inventory', icon: '☷' },
  { path: '/personnel', label: 'Personnel', icon: '◎' },
  { path: '/assets', label: 'Asset Management', icon: '⚙' },
  { path: '/movements', label: 'Field Movements', icon: '↗' },
  { path: '/emergencies', label: 'Emergency Response', icon: '⚠', badge: '1 ACTIVE', badgeType: 'critical' },
  { path: '/analytics', label: 'Analytics', icon: '◫' },
  { path: '/alerts', label: 'Alerts Center', icon: '⚑', badge: '3', badgeType: 'alert' },
  { path: '/audit-logs', label: 'Audit Logs', icon: '☰' },
];

export default function AppShell({ children }) {
  const { user, logout } = useContext(AuthContext);
  const { notifications } = useContext(NotificationContext) || { notifications: [] };
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUTC = (date) => {
    return date.toISOString().slice(11, 19) + ' UTC';
  };

  const formatIST = (date) => {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + ' IST';
  };

  const currentNav = NAV_ITEMS.find(item => item.path === location.pathname) || { label: 'Operational Console' };

  return (
    <div className="polarx-shell">
      {/* Sidebar */}
      <aside className={`polarx-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-logo-row">
            <span className="brand-symbol">❄</span>
            <div className="brand-title">POLARX</div>
          </div>
          <div className="brand-subtitle">EXPEDITION COMMAND PLATFORM</div>
          <div className="brand-sub-badge">NCPOR • MoES • GOI</div>
        </div>

        <div className="sidebar-system-status">
          <span className="status-pulse-dot"></span>
          <span className="status-text">MISSION CONTROL ONLINE</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-title">CORE OPERATIONS</div>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {item.badge && (
                <span className={`nav-badge ${item.badgeType}`}>{item.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile-card">
            <div className="user-avatar">{user?.name ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2) : 'VS'}</div>
            <div className="user-details">
              <div className="user-name">{user?.name || 'Cmdr. Vikram Singh'}</div>
              <div className="user-role">{user?.role || 'Expedition Manager'}</div>
              <div className="user-station">{user?.station || 'NCPOR HQ, Goa'}</div>
            </div>
          </div>
          <button className="logout-btn" onClick={logout} title="Sign Out of Session">
            <span className="logout-icon">⏻</span> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Workspace */}
      <div className="polarx-main-wrap">
        {/* Top Header */}
        <header className="polarx-header">
          <div className="header-left">
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              ☰
            </button>
            <div className="header-breadcrumbs">
              <span className="crumb-root">POLARX</span>
              <span className="crumb-sep">/</span>
              <span className="crumb-active">{currentNav.label.toUpperCase()}</span>
            </div>
            <div className="expedition-pill">
              <span className="pill-dot"></span>
              <span className="pill-text">EXP-45: ANTARCTIC EXPEDITION 2027</span>
              <span className="pill-badge">OPERATIONAL</span>
            </div>
          </div>

          <div className="header-right">
            <div className="header-telemetry-clock">
              <div className="clock-item">
                <span className="clock-tag">ZULU</span>
                <span className="clock-val">{formatUTC(currentTime)}</span>
              </div>
              <div className="clock-divider">|</div>
              <div className="clock-item">
                <span className="clock-tag">IST</span>
                <span className="clock-val">{formatIST(currentTime)}</span>
              </div>
            </div>

            <div className="header-stat-chip">
              <span className="chip-label">BHARATI TEL</span>
              <span className="chip-val status-ok">64 Kbps (VSAT-1)</span>
            </div>

            <NavLink to="/alerts" className="header-alert-bell" title="Active Alerts">
              <span className="bell-icon">⚑</span>
              <span className="bell-badge">3</span>
            </NavLink>
          </div>
        </header>

        {/* Content Body */}
        <main className="polarx-content-body">
          {children}
        </main>
      </div>
    </div>
  );
}
