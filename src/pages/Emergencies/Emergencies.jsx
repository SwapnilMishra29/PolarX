import React from 'react';
import { useNavigate } from 'react-router-dom';
import { emergencies, statusClass, formatTime } from '../../data/mockData';

export default function Emergencies() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Emergency Response & SAR Operations</h1>
          <p className="page-subtitle">Search and rescue, field medical incidents, and critical station alerts</p>
        </div>
        <button className="btn btn-danger" onClick={() => alert('Initiate Emergency Incident Protocol')}>
          + BROADCAST NEW EMERGENCY
        </button>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>INCIDENT ID</th>
              <th>TYPE</th>
              <th>SEVERITY</th>
              <th>LOCATION</th>
              <th>REPORTED BY</th>
              <th>TIME</th>
              <th>ASSIGNED TEAM</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {emergencies.map(inc => (
              <tr key={inc.id} className="clickable" onClick={() => navigate(`/emergencies/${inc.id}`)}>
                <td className="table-id font-mono">{inc.id}</td>
                <td style={{ fontWeight: 600 }}>{inc.type}</td>
                <td>
                  <span className={`status-badge ${statusClass(inc.severity)}`}>
                    {inc.severity.toUpperCase()}
                  </span>
                </td>
                <td>{inc.location}</td>
                <td className="table-secondary">{inc.reportedBy}</td>
                <td className="font-mono">{formatTime(inc.reportedAt)}</td>
                <td className="table-secondary font-mono">{inc.nearestTeam || 'Unassigned'}</td>
                <td>
                  <span className={`status-badge ${statusClass(inc.status)}`}>
                    {inc.status.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
