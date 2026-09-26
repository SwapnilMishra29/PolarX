import { useState } from 'react'
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts'
import { expeditions, inventoryItems, fuelConsumptionHistory, assets } from '../../data/mockData'
import './Analytics.css'

const COLORS = {
  blue: '#3a7bd5',
  teal: '#0d9488',
  green: '#16a34a',
  amber: '#d97706',
  red: '#dc2626',
  ice: '#a8d4e6',
  slate: '#5a6577',
}

const PALETTE = [COLORS.blue, COLORS.teal, COLORS.green, COLORS.amber, COLORS.red, COLORS.ice, COLORS.slate]

/* ── Static chart data ── */
const cargoByStatus = [
  { status: 'Planned', count: 12 },
  { status: 'Packed', count: 8 },
  { status: 'Dispatched', count: 15 },
  { status: 'In Transit', count: 86 },
  { status: 'Arrived', count: 24 },
  { status: 'Received', count: 180 },
  { status: 'Deployed', count: 95 },
  { status: 'Delayed', count: 5 },
]

const cargoByCategory = [
  { category: 'Scientific', count: 120 },
  { category: 'Fuel', count: 45 },
  { category: 'Food', count: 85 },
  { category: 'Medical', count: 32 },
  { category: 'Equipment', count: 68 },
  { category: 'Spare Parts', count: 40 },
  { category: 'Other', count: 35 },
]

const cargoMonthly = [
  { month: 'Oct', shipments: 45 },
  { month: 'Nov', shipments: 120 },
  { month: 'Dec', shipments: 180 },
  { month: 'Jan', shipments: 80 },
]

const assetUsageData = assets.map(a => ({
  name: a.name.length > 18 ? a.name.substring(0, 18) + '…' : a.name,
  hours: a.usageHours,
}))

function statusColor(status) {
  const map = {
    Planned: COLORS.blue, Packed: COLORS.teal, Dispatched: COLORS.ice,
    'In Transit': COLORS.amber, Arrived: COLORS.green, Received: COLORS.green,
    Deployed: COLORS.teal, Delayed: COLORS.red,
  }
  return map[status] || COLORS.slate
}

/* ── Shared tooltip style ── */
const tooltipStyle = {
  contentStyle: {
    background: '#fff',
    border: '1px solid #dde1e7',
    borderRadius: 4,
    fontSize: 12,
    padding: '8px 12px',
  },
  labelStyle: { fontWeight: 600, marginBottom: 4 },
}

/* ── Tab: Cargo ── */
function CargoTab() {
  return (
    <div className="analytics-grid">
      <div className="panel">
        <div className="panel-header"><span className="panel-title">Cargo by Status</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={cargoByStatus} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis dataKey="status" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="count" name="Items" radius={[3, 3, 0, 0]}>
                {cargoByStatus.map((entry, i) => (
                  <Cell key={i} fill={statusColor(entry.status)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header"><span className="panel-title">Cargo by Category</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={cargoByCategory}
                dataKey="count"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={0}
                label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                labelLine={{ stroke: '#8c95a4' }}
                fontSize={11}
              >
                {cargoByCategory.map((_, i) => (
                  <Cell key={i} fill={PALETTE[i % PALETTE.length]} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel analytics-span-2">
        <div className="panel-header"><span className="panel-title">Cargo Movement Over Time</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={cargoMonthly} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Line
                type="monotone"
                dataKey="shipments"
                name="Shipments"
                stroke={COLORS.blue}
                strokeWidth={2}
                dot={{ r: 4, fill: COLORS.blue }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

/* ── Tab: Inventory ── */
function InventoryTab() {
  const stockData = inventoryItems.map(item => ({
    name: item.name.length > 20 ? item.name.substring(0, 20) + '…' : item.name,
    available: item.available,
    threshold: item.threshold,
  }))

  return (
    <div className="analytics-grid">
      <div className="panel analytics-span-2">
        <div className="panel-header"><span className="panel-title">Fuel Consumption Trend (Bharati Station)</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={fuelConsumptionHistory} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Area type="monotone" dataKey="remaining" name="Remaining (L)" stroke={COLORS.blue} fill={COLORS.blue} fillOpacity={0.1} strokeWidth={2} />
              <Area type="monotone" dataKey="consumed" name="Consumed (L)" stroke={COLORS.amber} fill={COLORS.amber} fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel analytics-span-2">
        <div className="panel-header"><span className="panel-title">Stock Levels vs. Minimum Thresholds</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={stockData} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={140} />
              <Tooltip {...tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="available" name="Available" fill={COLORS.teal} radius={[0, 3, 3, 0]} barSize={14} />
              <Bar dataKey="threshold" name="Threshold" fill={COLORS.red} radius={[0, 3, 3, 0]} barSize={14} opacity={0.35} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

/* ── Tab: Expeditions ── */
function ExpeditionsTab() {
  const statusCounts = {
    Active: expeditions.filter(e => e.status === 'Active').length,
    Planned: expeditions.filter(e => e.status === 'Planned').length,
    Completed: expeditions.filter(e => e.status === 'Completed').length,
  }

  const personnelByStation = [
    { station: 'Bharati', personnel: 52 },
    { station: 'Maitri', personnel: 38 },
    { station: 'Himadri', personnel: 0 },
    { station: 'Ship', personnel: 23 },
  ]

  return (
    <div className="analytics-grid">
      <div className="panel">
        <div className="panel-header"><span className="panel-title">Expedition Summary</span></div>
        <div className="panel-body">
          <div className="analytics-stats-row">
            <div className="analytics-stat">
              <span className="analytics-stat-value" style={{ color: COLORS.green }}>{statusCounts.Active}</span>
              <span className="analytics-stat-label">Active</span>
            </div>
            <div className="analytics-stat">
              <span className="analytics-stat-value" style={{ color: COLORS.blue }}>{statusCounts.Planned}</span>
              <span className="analytics-stat-label">Planned</span>
            </div>
            <div className="analytics-stat">
              <span className="analytics-stat-value" style={{ color: COLORS.slate }}>{statusCounts.Completed}</span>
              <span className="analytics-stat-label">Completed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header"><span className="panel-title">Personnel by Station</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={personnelByStation} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis dataKey="station" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="personnel" name="Personnel" fill={COLORS.blue} radius={[3, 3, 0, 0]} barSize={36}>
                {personnelByStation.map((entry, i) => (
                  <Cell key={i} fill={entry.personnel === 0 ? '#dde1e7' : COLORS.blue} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

/* ── Tab: Assets ── */
function AssetsTab() {
  const statusMap = {}
  assets.forEach(a => { statusMap[a.status] = (statusMap[a.status] || 0) + 1 })
  const assetStatusData = Object.entries(statusMap).map(([status, count]) => ({ status, count }))

  const assetStatusColor = (status) => {
    const map = { Available: COLORS.green, 'In Use': COLORS.amber, Operational: COLORS.blue, Maintenance: COLORS.red }
    return map[status] || COLORS.slate
  }

  return (
    <div className="analytics-grid">
      <div className="panel">
        <div className="panel-header"><span className="panel-title">Asset Status Distribution</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={assetStatusData}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={95}
                innerRadius={50}
                label={({ status, count }) => `${status}: ${count}`}
                labelLine={{ stroke: '#8c95a4' }}
                fontSize={11}
              >
                {assetStatusData.map((entry, i) => (
                  <Cell key={i} fill={assetStatusColor(entry.status)} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header"><span className="panel-title">Usage Hours by Asset</span></div>
        <div className="panel-body">
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={assetUsageData} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ebeef2" />
              <XAxis type="number" tick={{ fontSize: 11 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} width={140} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="hours" name="Hours" fill={COLORS.teal} radius={[0, 3, 3, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

/* ── Main Component ── */
const TABS = ['Cargo', 'Inventory', 'Expeditions', 'Assets']

function Analytics() {
  const [activeTab, setActiveTab] = useState('Cargo')

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Operational Analytics</h1>
          <p className="page-subtitle">Data-driven insights across expedition operations</p>
        </div>
      </div>

      <div className="tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'Cargo' && <CargoTab />}
      {activeTab === 'Inventory' && <InventoryTab />}
      {activeTab === 'Expeditions' && <ExpeditionsTab />}
      {activeTab === 'Assets' && <AssetsTab />}
    </div>
  )
}

export default Analytics
