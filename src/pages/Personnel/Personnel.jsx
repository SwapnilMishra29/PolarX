import React from 'react';
import { useNavigate } from 'react-router-dom';
import { personnel, statusClass } from '../../data/mockData';

export default function Personnel() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Personnel & Researcher Registry</h1>
          <p className="page-subtitle">Station staffing, roles, and field deployment assignments</p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>OPERATIONAL ROLE</th>
              <th>TEAM / DIVISION</th>
              <th>CURRENT LOCATION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {personnel.map(p => (
              <tr key={p.id} className="clickable" onClick={() => navigate(`/personnel/${p.id}`)}>
                <td className="table-id">{p.id}</td>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td>{p.role}</td>
                <td className="table-secondary">{p.team}</td>
                <td className="table-secondary">{p.location}</td>
                <td>
                  <span className={`status-badge ${statusClass(p.status)}`}>
                    {p.status.toUpperCase()}
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
