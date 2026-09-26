import React from 'react';
import { movements, statusClass, formatTime } from '../../data/mockData';

export default function Movements() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Field Movements & Personnel Traversal</h1>
          <p className="page-subtitle">Tactical tracking of research teams between stations and remote field camps</p>
        </div>
        <button className="btn btn-primary">+ Log Field Movement</button>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>TRAVERSAL ID</th>
              <th>PERSONNEL</th>
              <th>ORIGIN → DESTINATION</th>
              <th>DEPARTURE</th>
              <th>EXPECTED RETURN</th>
              <th>PURPOSE</th>
              <th>VEHICLE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {movements.map(m => (
              <tr key={m.id}>
                <td className="table-id">{m.id}</td>
                <td style={{ fontWeight: 600 }}>{m.name}</td>
                <td>{m.from} → {m.to}</td>
                <td className="font-mono">{formatTime(m.departure)}</td>
                <td className="font-mono">{m.expectedReturn ? formatTime(m.expectedReturn) : '—'}</td>
                <td className="table-secondary">{m.purpose}</td>
                <td className="font-mono table-secondary">{m.vehicle || 'On Foot / Nearby'}</td>
                <td>
                  <span className={`status-badge ${statusClass(m.status)}`}>
                    {m.status.toUpperCase()}
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
