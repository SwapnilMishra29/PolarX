import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, statusClass, formatDate } from '../../data/mockData';

export default function Assets() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Asset & Heavy Equipment Management</h1>
          <p className="page-subtitle">Vehicles, generators, life support systems, and scientific instrumentation</p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>ASSET ID</th>
              <th>NAME</th>
              <th>TYPE</th>
              <th>CATEGORY</th>
              <th>CURRENT LOCATION</th>
              <th>STATUS</th>
              <th>USAGE HOURS</th>
              <th>NEXT SERVICE</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(a => (
              <tr key={a.id} className="clickable" onClick={() => navigate(`/assets/${a.id}`)}>
                <td className="table-id">{a.id}</td>
                <td style={{ fontWeight: 600 }}>{a.name}</td>
                <td>{a.type}</td>
                <td className="table-secondary">{a.category}</td>
                <td className="table-secondary">{a.location}</td>
                <td>
                  <span className={`status-badge ${statusClass(a.status)}`}>
                    {a.status.toUpperCase()}
                  </span>
                </td>
                <td className="font-mono">{a.usageHours} hrs</td>
                <td className="table-secondary font-mono">{formatDate(a.nextMaintenance)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
