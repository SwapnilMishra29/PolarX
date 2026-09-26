import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cargoItems, statusClass, formatDateTime } from '../../data/mockData';

export default function Cargo() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filters = ['All', 'In Transit', 'Received', 'Dispatched', 'Delayed'];

  const filtered = cargoItems.filter(item => {
    if (filter !== 'All' && item.status !== filter) return false;
    if (search && !item.description.toLowerCase().includes(search.toLowerCase()) &&
        !item.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Cargo Tracking & Materiel Lifecycle</h1>
          <p className="page-subtitle">End-to-end QR tracked cargo movement from port to polar deployment</p>
        </div>
        <button className="btn btn-primary">+ Manifest Cargo Item</button>
      </div>

      <div className="filters-bar">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-chip ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
        <input
          type="text"
          className="form-input search-input"
          placeholder="Search cargo ID or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 260, marginLeft: 'auto' }}
        />
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>CARGO ID</th>
              <th>DESCRIPTION</th>
              <th>CATEGORY</th>
              <th>WEIGHT</th>
              <th>ORIGIN → DESTINATION</th>
              <th>CURRENT LOCATION</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(item => (
              <tr key={item.id} className="clickable" onClick={() => navigate(`/cargo/${item.id}`)}>
                <td className="table-id">{item.id}</td>
                <td style={{ fontWeight: 600 }}>{item.description}</td>
                <td className="table-secondary">{item.category}</td>
                <td className="font-mono">{item.weight} {item.unit}</td>
                <td className="table-secondary">{item.origin} → {item.destination}</td>
                <td className="table-secondary">{item.currentLocation}</td>
                <td>
                  <span className={`status-badge ${statusClass(item.status)}`}>
                    {item.status.toUpperCase()}
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
