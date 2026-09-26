import React from 'react';
import { inventoryItems, statusClass } from '../../data/mockData';
import './Inventory.css';

export default function Inventory() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Station Inventory & Supply Reserves</h1>
          <p className="page-subtitle">Real-time telemetry and consumption monitoring across polar stations</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <select className="form-select" style={{ width: 200 }}>
            <option>Bharati Station (Larsemann Hills)</option>
            <option>Maitri Station (Schirmacher)</option>
          </select>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>ITEM ID</th>
              <th>RESOURCE NAME</th>
              <th>CATEGORY</th>
              <th>AVAILABLE</th>
              <th>THRESHOLD</th>
              <th>DAILY BURN</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map((item) => (
              <tr key={item.id}>
                <td className="table-id">{item.id}</td>
                <td style={{ fontWeight: 600 }}>{item.name}</td>
                <td className="table-secondary">{item.category}</td>
                <td className="font-mono">{item.available} {item.unit}</td>
                <td className="table-secondary font-mono">{item.threshold} {item.unit}</td>
                <td className="table-secondary font-mono">{item.dailyConsumption} {item.unit}/day</td>
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
