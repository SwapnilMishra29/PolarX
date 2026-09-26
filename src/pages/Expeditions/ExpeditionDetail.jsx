import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { expeditions, cargoItems, personnel, assets, formatDate, statusClass } from '../../data/mockData'
import './ExpeditionDetail.css'

function ExpeditionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const expedition = expeditions.find(e => e.id === id)
  if (!expedition) return <div className="page-container">Expedition not found</div>

  const expCargo = cargoItems.filter(c => c.expedition === id)
  const expPersonnel = personnel.filter(p => p.expedition === id)
  const expAssets = assets.filter(a => a.expedition === id)

  const budgetPercent = Math.round((expedition.budgetUsed / expedition.budget) * 100)

  const tabs = ['Overview', 'Cargo', 'Personnel', 'Assets', 'Inventory', 'Movements', 'Emergencies', 'Reports']

  return (
    <div className="page-container">
      <button className="btn btn-sm" onClick={() => navigate('/expeditions')} style={{ marginBottom: 16 }}>
        ← Back to Expeditions
      </button>

      <div className="expedition-header">
        <div>
          <div className="expedition-id">{expedition.id}</div>
          <h1 className="page-title">{expedition.name}</h1>
          <p className="page-subtitle">{expedition.destination}</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className={`status-badge ${statusClass(expedition.status)}`}>{expedition.status}</span>
          <span className={`status-badge ${statusClass(expedition.phase)}`}>{expedition.phase}</span>
        </div>
      </div>

      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab.toLowerCase() ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div>
          <div className="metrics-row" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="metric-card">
              <div className="metric-label">Personnel</div>
              <div className="metric-value">{expedition.personnelCount}</div>
              <div className="metric-sub">deployed at station</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Cargo Items</div>
              <div className="metric-value">{expedition.cargoCount}</div>
              <div className="metric-sub">{expCargo.filter(c => c.status === 'Received' || c.status === 'Deployed').length} received</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Assets</div>
              <div className="metric-value">{expAssets.length}</div>
              <div className="metric-sub">{expAssets.filter(a => a.status === 'In Use' || a.status === 'Operational').length} active</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Budget</div>
              <div className="metric-value">₹{expedition.budgetUsed}L</div>
              <div className="metric-sub">of ₹{expedition.budget}L ({budgetPercent}%)</div>
            </div>
            <div className="metric-card">
              <div className="metric-label">Duration</div>
              <div className="metric-value">{Math.round((new Date(expedition.endDate) - new Date(expedition.startDate)) / (1000*60*60*24))}</div>
              <div className="metric-sub">days planned</div>
            </div>
          </div>

          <div className="grid-2">
            <div className="panel">
              <div className="panel-header">
                <span className="panel-title">Expedition Details</span>
              </div>
              <div className="panel-body">
                <div className="detail-grid">
                  <div className="detail-row">
                    <span className="detail-label">Type</span>
                    <span className="detail-value">{expedition.type}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Base Station</span>
                    <span className="detail-value">{expedition.baseStation}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Start Date</span>
                    <span className="detail-value">{formatDate(expedition.startDate)}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">End Date</span>
                    <span className="detail-value">{formatDate(expedition.endDate)}</span>
                  </div>
                </div>
                <p style={{ marginTop: 12, fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {expedition.description}
                </p>
              </div>
            </div>

            <div className="panel">
              <div className="panel-header">
                <span className="panel-title">Budget Utilization</span>
              </div>
              <div className="panel-body">
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>₹{expedition.budgetUsed}L of ₹{expedition.budget}L</span>
                    <span style={{ fontSize: 12, fontWeight: 600 }}>{budgetPercent}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                      width: `${budgetPercent}%`,
                      background: budgetPercent > 90 ? 'var(--accent-red)' : budgetPercent > 75 ? 'var(--accent-amber)' : 'var(--accent-blue)'
                    }} />
                  </div>
                </div>

                <div className="detail-grid">
                  <div className="detail-row">
                    <span className="detail-label">Allocated</span>
                    <span className="detail-value">₹{expedition.budget} Lakhs</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Spent</span>
                    <span className="detail-value">₹{expedition.budgetUsed} Lakhs</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Remaining</span>
                    <span className="detail-value">₹{expedition.budget - expedition.budgetUsed} Lakhs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'cargo' && (
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Cargo ID</th>
                <th>Description</th>
                <th>Category</th>
                <th>Weight</th>
                <th>Status</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {expCargo.map(cargo => (
                <tr key={cargo.id} className="clickable" onClick={() => navigate(`/cargo/${cargo.id}`)}>
                  <td className="table-id">{cargo.id}</td>
                  <td>{cargo.description}</td>
                  <td className="table-secondary">{cargo.category}</td>
                  <td>{cargo.weight} {cargo.unit}</td>
                  <td><span className={`status-badge ${statusClass(cargo.status)}`}>{cargo.status}</span></td>
                  <td className="table-secondary">{cargo.currentLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'personnel' && (
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Team</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {expPersonnel.map(p => (
                <tr key={p.id} className="clickable" onClick={() => navigate(`/personnel/${p.id}`)}>
                  <td className="table-id">{p.id}</td>
                  <td style={{ fontWeight: 500 }}>{p.name}</td>
                  <td>{p.role}</td>
                  <td className="table-secondary">{p.team}</td>
                  <td className="table-secondary">{p.location}</td>
                  <td><span className={`status-badge ${statusClass(p.status)}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'assets' && (
        <div className="panel">
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Status</th>
                <th>Usage Hours</th>
              </tr>
            </thead>
            <tbody>
              {expAssets.map(a => (
                <tr key={a.id} className="clickable" onClick={() => navigate(`/assets/${a.id}`)}>
                  <td className="table-id">{a.id}</td>
                  <td>{a.name}</td>
                  <td className="table-secondary">{a.type}</td>
                  <td className="table-secondary">{a.location}</td>
                  <td><span className={`status-badge ${statusClass(a.status)}`}>{a.status}</span></td>
                  <td>{a.usageHours}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {(activeTab === 'inventory' || activeTab === 'movements' || activeTab === 'emergencies' || activeTab === 'reports') && (
        <div className="panel" style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>
          View this data in the dedicated {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} module →
          <button className="btn btn-sm" style={{ marginLeft: 8 }} onClick={() => navigate(`/${activeTab}`)}>
            Go to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          </button>
        </div>
      )}
    </div>
  )
}

export default ExpeditionDetail
