import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { expeditions, formatDate, statusClass } from '../../data/mockData'
import './Expeditions.css'

function Expeditions() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const filters = ['All', 'Active', 'Planned', 'Completed']

  const filtered = expeditions.filter(exp => {
    if (filter !== 'All' && exp.status !== filter) return false
    if (search && !exp.name.toLowerCase().includes(search.toLowerCase()) &&
        !exp.destination.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Expedition Management</h1>
          <p className="page-subtitle">Plan and monitor polar research expeditions</p>
        </div>
        <button className="btn btn-primary">+ Create Expedition</button>
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
          placeholder="Search expeditions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 240, marginLeft: 'auto' }}
        />
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Expedition ID</th>
              <th>Name</th>
              <th>Destination</th>
              <th>Type</th>
              <th>Team</th>
              <th>Status</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(exp => (
              <tr key={exp.id} className="clickable" onClick={() => navigate(`/expeditions/${exp.id}`)}>
                <td className="table-id">{exp.id}</td>
                <td style={{ fontWeight: 500 }}>{exp.name}</td>
                <td className="table-secondary">{exp.destination}</td>
                <td className="table-secondary">{exp.type}</td>
                <td>{exp.teamSize}</td>
                <td><span className={`status-badge ${statusClass(exp.status)}`}>{exp.status}</span></td>
                <td className="table-secondary">{formatDate(exp.startDate)}</td>
                <td className="table-secondary">{formatDate(exp.endDate)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Expeditions
