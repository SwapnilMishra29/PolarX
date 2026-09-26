import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { emergencies, statusClass, formatTime } from '../../data/mockData';

export default function EmergencyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const incident = emergencies.find(e => e.id === id) || emergencies[0];
  const [responseAssigned, setResponseAssigned] = useState(incident.status === 'Response Active');

  const handleAssign = () => {
    setResponseAssigned(true);
    alert(`Response Team B and Snow Vehicle 04 dispatched to ${incident.location}`);
  };

  return (
    <div className="page-container">
      <button className="btn btn-sm" onClick={() => navigate('/emergencies')} style={{ marginBottom: 16 }}>
        ← Back to Emergency Incident Log
      </button>

      <div className="page-header">
        <div>
          <h1 className="page-title" style={{ color: 'var(--accent-red)' }}>
            {incident.id}: {incident.type.toUpperCase()}
          </h1>
          <p className="page-subtitle">Reported at {formatTime(incident.reportedAt)} by {incident.reportedBy}</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <span className={`status-badge ${statusClass(incident.severity)}`}>{incident.severity.toUpperCase()} PRIORITY</span>
          <span className={`status-badge ${responseAssigned ? 'active' : 'warning'}`}>
            {responseAssigned ? 'RESPONSE DISPATCHED' : 'UNASSIGNED'}
          </span>
        </div>
      </div>

      <div className="grid-2-1">
        <div className="panel">
          <div className="panel-header" style={{ background: '#fdf2f2', borderColor: '#fecaca' }}>
            <span className="panel-title" style={{ color: '#b91c1c' }}>INCIDENT BRIEFING</span>
          </div>
          <div className="panel-body">
            <p style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>
              {incident.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              <div>
                <span className="form-label">COORDINATES</span>
                <span className="font-mono">{incident.coordinates ? `${incident.coordinates[0]}°S, ${incident.coordinates[1]}°E` : '—'}</span>
              </div>
              <div>
                <span className="form-label">COMMUNICATION STATUS</span>
                <span style={{ color: '#16a34a', fontWeight: 600 }}>● {incident.communicationStatus} (VHF / Iridium)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ borderLeft: '3px solid var(--accent-red)' }}>
          <div className="panel-header">
            <span className="panel-title">SYSTEM-IDENTIFIED RESPONSE</span>
          </div>
          <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <span className="form-label">NEAREST FIELD TEAM</span>
              <strong>{incident.nearestTeam} ({incident.teamDistance})</strong>
            </div>
            <div>
              <span className="form-label">ASSIGNED VEHICLE</span>
              <strong className="font-mono">{incident.availableVehicle}</strong>
            </div>
            <div>
              <span className="form-label">REQUIRED MEDICAL KIT</span>
              <strong className="font-mono">{incident.medicalKit}</strong>
            </div>

            <button
              className={`btn ${responseAssigned ? 'btn-success' : 'btn-danger'}`}
              style={{ marginTop: 8, justifyContent: 'center' }}
              onClick={handleAssign}
              disabled={responseAssigned}
            >
              {responseAssigned ? '✓ RESPONSE TEAM DISPATCHED' : 'ASSIGN & DISPATCH RESPONSE TEAM'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
