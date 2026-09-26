import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import { assets, statusClass, formatDate } from '../../data/mockData';

export default function AssetDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const asset = assets.find(a => a.id === id) || assets[0];

  return (
    <div className="page-container">
      <button className="btn btn-sm" onClick={() => navigate('/assets')} style={{ marginBottom: 16 }}>
        ← Back to Assets Inventory
      </button>

      <div className="page-header">
        <div>
          <h1 className="page-title">{asset.name} ({asset.id})</h1>
          <p className="page-subtitle">{asset.type} • {asset.category}</p>
        </div>
        <span className={`status-badge ${statusClass(asset.status)}`}>{asset.status.toUpperCase()}</span>
      </div>

      <div className="grid-2-1">
        <div className="panel">
          <div className="panel-header">
            <span className="panel-title">TELEMETRY & MAINTENANCE</span>
          </div>
          <div className="panel-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              <div>
                <span className="form-label">CURRENT LOCATION</span>
                <strong style={{ color: 'var(--accent-blue)' }}>{asset.location}</strong>
              </div>
              <div>
                <span className="form-label">OPERATING EXPEDITION</span>
                <span>{asset.expedition}</span>
              </div>
              <div>
                <span className="form-label">ACCUMULATED RUNTIME</span>
                <strong className="font-mono">{asset.usageHours} hours</strong>
              </div>
              <div>
                <span className="form-label">LAST MAINTENANCE</span>
                <span className="font-mono">{formatDate(asset.lastMaintenance)}</span>
              </div>
              <div>
                <span className="form-label">NEXT MANDATORY SERVICE</span>
                <span className="font-mono" style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>
                  {formatDate(asset.nextMaintenance)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="panel" style={{ textAlign: 'center' }}>
          <div className="panel-header">
            <span className="panel-title">ASSET QR TAG</span>
          </div>
          <div className="panel-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ background: '#ffffff', padding: 12, border: '1px solid var(--border)', borderRadius: 4 }}>
              <QRCodeSVG value={asset.id} size={140} level="M" />
            </div>
            <span className="table-id">{asset.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
