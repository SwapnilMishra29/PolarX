import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { cargoItems, statusClass, formatDateTime } from '../../data/mockData';

export default function CargoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cargo = cargoItems.find(c => c.id === id) || cargoItems[0];

  return (
    <div className="page-container">
      <button className="btn btn-sm" onClick={() => navigate('/cargo')} style={{ marginBottom: 16 }}>
        ← Back to Cargo Manifest
      </button>

      <div className="page-header">
        <div>
          <h1 className="page-title">{cargo.id} — {cargo.description}</h1>
          <p className="page-subtitle">Manifested under {cargo.expedition}</p>
        </div>
        <span className={`status-badge ${statusClass(cargo.status)}`}>{cargo.status.toUpperCase()}</span>
      </div>

      <div className="grid-2-1">
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">CARGO SPECIFICATIONS</span>
          </div>
          <div className="panel-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              <div>
                <span className="form-label">CATEGORY</span>
                <strong>{cargo.category}</strong>
              </div>
              <div>
                <span className="form-label">GROSS WEIGHT</span>
                <strong className="font-mono">{cargo.weight} {cargo.unit}</strong>
              </div>
              <div>
                <span className="form-label">ORIGIN</span>
                <span>{cargo.origin}</span>
              </div>
              <div>
                <span className="form-label">DESTINATION</span>
                <span>{cargo.destination}</span>
              </div>
              <div>
                <span className="form-label">CURRENT LOCATION</span>
                <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{cargo.currentLocation}</span>
              </div>
              <div>
                <span className="form-label">PRIORITY</span>
                <span className={`status-badge ${statusClass(cargo.priority)}`}>{cargo.priority.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ textAlign: 'center' }}>
          <div className="panel-header">
            <span className="panel-title">QR TELEMETRY TAG</span>
          </div>
          <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ background: '#ffffff', padding: 12, border: '1px solid var(--border)', borderRadius: 4 }}>
              <QRCodeSVG value={cargo.id} size={150} level="M" />
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>
              TAG ID: {cargo.id}
            </div>
            <button className="btn btn-sm btn-primary" onClick={() => alert(`Simulating field scan of ${cargo.id}`)}>
              Simulate Field Scan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
