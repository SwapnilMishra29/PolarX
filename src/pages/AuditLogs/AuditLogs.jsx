import { useState, useMemo } from 'react'
import { auditLogs, formatDate, formatTime } from '../../data/mockData'
import './AuditLogs.css'

const ALL_MODULES = ['All', ...Array.from(new Set(auditLogs.map(l => l.module)))]

function AuditLogs() {
  const [search, setSearch] = useState('')
  const [moduleFilter, setModuleFilter] = useState('All')

  const filtered = useMemo(() => {
    return auditLogs.filter(log => {
      if (moduleFilter !== 'All' && log.module !== moduleFilter) return false
      if (search) {
        const q = search.toLowerCase()
        return (
          log.user.toLowerCase().includes(q) ||
          log.action.toLowerCase().includes(q) ||
          log.details.toLowerCase().includes(q) ||
          log.module.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [search, moduleFilter])

  const moduleBadgeClass = (mod) => {
    const map = {
      Cargo: 'module-cargo',
      Inventory: 'module-inventory',
      Emergencies: 'module-emergencies',
      Alerts: 'module-alerts',
      Movements: 'module-movements',
      Assets: 'module-assets',
    }
    return map[mod] || ''
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Audit Log</h1>
          <p className="page-subtitle">Complete operational activity trail</p>
        </div>
      </div>

      <div className="audit-toolbar">
        <input
          type="text"
          className="form-input search-input"
          placeholder="Search logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 280 }}
        />
        <select
          className="form-select"
          value={moduleFilter}
          onChange={(e) => setModuleFilter(e.target.value)}
          style={{ maxWidth: 180 }}
        >
          {ALL_MODULES.map(m => (
            <option key={m} value={m}>{m === 'All' ? 'All Modules' : m}</option>
          ))}
        </select>
        <span className="audit-count">{filtered.length} entries</span>
      </div>

      <div className="panel">
        <table className="data-table audit-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>User</th>
              <th>Action</th>
              <th>Module</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((log, i) => (
              <tr key={log.id} className={i % 2 === 1 ? 'audit-row-alt' : ''}>
                <td className="audit-timestamp">
                  <span className="audit-date">{formatDate(log.timestamp)}</span>
                  <span className="audit-time">{formatTime(log.timestamp)}</span>
                </td>
                <td style={{ fontWeight: 500 }}>{log.user}</td>
                <td>{log.action}</td>
                <td>
                  <span className={`audit-module-badge ${moduleBadgeClass(log.module)}`}>
                    {log.module}
                  </span>
                </td>
                <td className="table-secondary">{log.details}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="audit-empty">No log entries match the current filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AuditLogs
