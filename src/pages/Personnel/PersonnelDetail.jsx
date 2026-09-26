import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { personnel, statusClass, formatDateTime } from '../../data/mockData';

export default function PersonnelDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const person = personnel.find(p => p.id === id) || personnel[0];

  return (
    <div className="page-container">
      <button className="btn btn-sm" onClick={() => navigate('/personnel')} style={{ marginBottom: 16 }}>
        ← Back to Personnel Roster
      </button>

      <div className="page-header">
        <div>
          <h1 className="page-title">{person.name} ({person.id})</h1>
          <p className="page-subtitle">{person.role} • {person.team}</p>
        </div>
        <span className={`status-badge ${statusClass(person.status)}`}>{person.status.toUpperCase()}</span>
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-title">DOSSIER & SPECIALIZATION</span>
        </div>
        <div className="panel-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            <div>
              <span className="form-label">ASSIGNED EXPEDITION</span>
              <strong>{person.expedition}</strong>
            </div>
            <div>
              <span className="form-label">CURRENT LOCATION</span>
              <strong style={{ color: 'var(--accent-blue)' }}>{person.location}</strong>
            </div>
            <div>
              <span className="form-label">SPECIALIZATION</span>
              <span>{person.specialization}</span>
            </div>
            <div>
              <span className="form-label">LAST MOVEMENT REPORTED</span>
              <span className="font-mono">{formatDateTime(person.lastMovement)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
