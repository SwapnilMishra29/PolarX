import { useState } from 'react'
import { alerts as alertsData, timeAgo } from '../../data/mockData'
import './Alerts.css'

const SEVERITY_FILTERS = ['All', 'Critical', 'Warning', 'Info']
const STATUS_FILTERS = ['Active', 'Acknowledged']

function Alerts() {
  const [alertsList, setAlertsList] = useState(alertsData)
  const [severityFilter, setSeverityFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('Active')

  const filtered = alertsList.filter(alert => {
    if (severityFilter !== 'All' && alert.severity !== severityFilter) return false
    if (alert.status !== statusFilter) return false
    return true
  })

  const handleAcknowledge = (id) => {
    setAlertsList(prev =>
      prev.map(a => a.id === id ? { ...a, status: 'Acknowledged' } : a)
    )
  }

  const severityBorderColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'var(--accent-red)'
      case 'Warning': return 'var(--accent-amber)'
      case 'Info': return 'var(--accent-blue)'
      default: return 'var(--border)'
    }
  }

  const activeCounts = {
    all: alertsList.filter(a => a.status === statusFilter).length,
    Critical: alertsList.filter(a => a.status === statusFilter && a.severity === 'Critical').length,
    Warning: alertsList.filter(a => a.status === statusFilter && a.severity === 'Warning').length,
    Info: alertsList.filter(a => a.status === statusFilter && a.severity === 'Info').length,
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Alerts Center</h1>
          <p className="page-subtitle">{alertsList.filter(a => a.status === 'Active').length} active alerts require attention</p>
        </div>
      </div>

      <div className="alerts-filters">
        <div className="filters-bar" style={{ marginBottom: 0 }}>
          {SEVERITY_FILTERS.map(f => (
            <button
              key={f}
              className={`filter-chip ${severityFilter === f ? 'active' : ''}`}
              onClick={() => setSeverityFilter(f)}
            >
              {f}
              {f === 'All'
                ? ` (${activeCounts.all})`
                : ` (${activeCounts[f]})`
              }
            </button>
          ))}

          <span className="alerts-filter-divider" />

          {STATUS_FILTERS.map(f => (
            <button
              key={f}
              className={`filter-chip ${statusFilter === f ? 'active' : ''}`}
              onClick={() => setStatusFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="alerts-list">
        {filtered.length === 0 && (
          <div className="alerts-empty">No alerts match the current filters.</div>
        )}
        {filtered.map(alert => (
          <div
            key={alert.id}
            className="alert-item"
            style={{ borderLeftColor: severityBorderColor(alert.severity) }}
          >
            <div className="alert-item-top">
              <span className={`status-badge ${alert.severity.toLowerCase()}`}>
                {alert.severity}
              </span>
              <span className="alert-item-title">{alert.title}</span>
              <span className="alert-item-time">{timeAgo(alert.timestamp)}</span>
            </div>
            <p className="alert-item-description">{alert.description}</p>
            <div className="alert-item-bottom">
              <span className="alert-tag">{alert.module}</span>
              <span className="alert-tag">{alert.station}</span>
              {alert.status === 'Active' && (
                <button
                  className="btn btn-sm"
                  onClick={() => handleAcknowledge(alert.id)}
                >
                  Acknowledge
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Alerts
