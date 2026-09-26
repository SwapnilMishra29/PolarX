import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {
  expeditions,
  cargoItems,
  inventoryItems,
  alerts,
  auditLogs,
  stationLocations,
  formatDate,
  formatTime,
  statusClass
} from '../../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedStation, setSelectedStation] = useState('Bharati Station');
  const activeExp = expeditions[0]; // Indian Antarctic Expedition 45

  // Map center on Larsemann Hills, East Antarctica (Bharati Station)
  const mapCenter = [-69.4081, 76.1879];
  const mapZoom = 8;

  // Emergency evacuation route from Bharati Station to Field Camp 02
  const emergencyRoute = [
    [-69.4081, 76.1879], // Bharati Station
    [-69.3950, 76.2400], // Waypoint 1 (Ridge traversal)
    [-69.4000, 76.3000]  // Field Camp 02
  ];

  return (
    <div className="dashboard-scroll-wrap">
      {/* Top Operational Metrics Banner */}
      <section className="metrics-strip">
        <div className="metric-box">
          <div className="metric-header-row">
            <span className="metric-tag">ACTIVE EXPEDITIONS</span>
            <span className="metric-status-dot green"></span>
          </div>
          <div className="metric-num">04</div>
          <div className="metric-caption">2 Antarctic • 1 Arctic • 1 Ocean</div>
        </div>

        <div className="metric-box">
          <div className="metric-header-row">
            <span className="metric-tag">PERSONNEL DEPLOYED</span>
            <span className="metric-status-dot blue"></span>
          </div>
          <div className="metric-num">125</div>
          <div className="metric-caption">52 Bharati • 38 Maitri • 12 Himadri • 23 Transit</div>
        </div>

        <div className="metric-box">
          <div className="metric-header-row">
            <span className="metric-tag">CARGO IN TRANSIT</span>
            <span className="metric-status-dot amber"></span>
          </div>
          <div className="metric-num">86</div>
          <div className="metric-caption">3 Critical Priority • 5 Overdue Flags</div>
        </div>

        <div className="metric-box highlight-critical">
          <div className="metric-header-row">
            <span className="metric-tag critical-text">CRITICAL ALERTS</span>
            <span className="metric-status-dot red pulse"></span>
          </div>
          <div className="metric-num critical-text">03</div>
          <div className="metric-caption critical-text">1 Medical Incident • 2 Resource Warnings</div>
        </div>
      </section>

      {/* Main 2-Column Command Workspace */}
      <div className="dashboard-grid">
        {/* LEFT COLUMN: Mission Context & Tactical Map */}
        <div className="dash-col-primary">
          {/* Active Expedition Overview Card */}
          <div className="panel exp-overview-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="panel-badge-code">MISSION TELEMETRY</span>
                <span className="panel-main-title">{activeExp.name.toUpperCase()} ({activeExp.id})</span>
              </div>
              <div className="exp-status-flags">
                <span className="status-badge active">OPERATIONAL</span>
                <span className="status-badge in-progress">{activeExp.phase.toUpperCase()}</span>
              </div>
            </div>

            <div className="exp-overview-content">
              <div className="exp-detail-strip">
                <div className="detail-item">
                  <span className="lbl">BASE STATION</span>
                  <span className="val">{activeExp.baseStation} (69°24'S, 76°11'E)</span>
                </div>
                <div className="detail-item">
                  <span className="lbl">DEPLOYED FORCE</span>
                  <span className="val font-mono">{activeExp.personnelCount} Researchers / Support</span>
                </div>
                <div className="detail-item">
                  <span className="lbl">CARGO MANIFEST</span>
                  <span className="val font-mono">420 Items (280 Received)</span>
                </div>
                <div className="detail-item">
                  <span className="lbl">DURATION</span>
                  <span className="val font-mono">Day 14 of 75 (End: {formatDate(activeExp.endDate)})</span>
                </div>
              </div>

              {/* Station Climate & Telemetry Bar */}
              <div className="station-weather-bar">
                <div className="weather-chip">
                  <span className="w-icon">❄</span>
                  <span className="w-val">-14.2°C</span>
                  <span className="w-lbl">SURFACE TEMP</span>
                </div>
                <div className="weather-chip">
                  <span className="w-icon">💨</span>
                  <span className="w-val">34 kt SW</span>
                  <span className="w-lbl">WIND (BLIZZARD GALE)</span>
                </div>
                <div className="weather-chip">
                  <span className="w-icon">⏱</span>
                  <span className="w-val">988 hPa</span>
                  <span className="w-lbl">BAROMETER (FALLING)</span>
                </div>
                <div className="weather-chip">
                  <span className="w-icon">👁</span>
                  <span className="w-val">8.0 KM</span>
                  <span className="w-lbl">OPTICAL VISIBILITY</span>
                </div>
                <div className="weather-chip">
                  <span className="w-icon">📡</span>
                  <span className="w-val">100% COMMS</span>
                  <span className="w-lbl">VSAT LINK STABLE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Large Leaflet Operational Map */}
          <div className="panel map-panel">
            <div className="panel-header map-header">
              <div className="map-title-row">
                <span className="panel-main-title">TACTICAL GEOGRAPHIC OPERATIONS MAP</span>
                <span className="map-coords-badge">LAT: 69°24'S | LON: 76°11'E (ANTARCTIC SECTOR)</span>
              </div>
              <div className="map-station-select">
                <span className="select-lbl">FOCUS STATION:</span>
                <select
                  value={selectedStation}
                  onChange={(e) => setSelectedStation(e.target.value)}
                  className="station-dropdown"
                >
                  <option value="Bharati Station">Bharati Station (Larsemann Hills)</option>
                  <option value="Maitri Station">Maitri Station (Schirmacher Oasis)</option>
                </select>
              </div>
            </div>

            <div className="map-viewport-container">
              <MapContainer
                center={mapCenter}
                zoom={mapZoom}
                scrollWheelZoom={false}
                className="leaflet-map-element"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Tactical Evacuation Route */}
                <Polyline
                  positions={emergencyRoute}
                  color="#dc2626"
                  weight={3}
                  dashArray="6, 8"
                />

                {/* Station Markers */}
                {stationLocations.map((loc, idx) => {
                  let fillColor = '#2563eb';
                  let radius = 10;

                  if (loc.type === 'camp') {
                    fillColor = '#0d9488';
                    radius = 7;
                  } else if (loc.type === 'vessel') {
                    fillColor = '#d97706';
                    radius = 8;
                  }

                  return (
                    <CircleMarker
                      key={idx}
                      center={[loc.lat, loc.lng]}
                      radius={radius}
                      pathOptions={{
                        color: '#ffffff',
                        weight: 2,
                        fillColor: fillColor,
                        fillOpacity: 0.9,
                      }}
                    >
                      <Popup>
                        <div className="map-popup-card">
                          <div className="popup-title">{loc.name}</div>
                          <div className="popup-row">
                            <span className="k">TYPE:</span>
                            <span className="v">{loc.type.toUpperCase()}</span>
                          </div>
                          <div className="popup-row">
                            <span className="k">STATUS:</span>
                            <span className="v status-ok">{loc.status}</span>
                          </div>
                          {loc.personnel !== undefined && (
                            <div className="popup-row">
                              <span className="k">PERSONNEL:</span>
                              <span className="v">{loc.personnel} stationed</span>
                            </div>
                          )}
                          <div className="popup-coords">
                            {loc.lat.toFixed(4)}°, {loc.lng.toFixed(4)}°
                          </div>
                        </div>
                      </Popup>
                    </CircleMarker>
                  );
                })}

                {/* Emergency Incident Marker at Field Camp 02 */}
                <CircleMarker
                  center={[-69.40, 76.30]}
                  radius={13}
                  pathOptions={{
                    color: '#ffffff',
                    weight: 2,
                    fillColor: '#dc2626',
                    fillOpacity: 0.85,
                  }}
                >
                  <Popup>
                    <div className="map-popup-card emergency-popup">
                      <div className="popup-title alert-red">INC-0042: MEDICAL EMERGENCY</div>
                      <div className="popup-row">
                        <span className="k">SEVERITY:</span>
                        <span className="v status-badge critical">HIGH PRIORITY</span>
                      </div>
                      <div className="popup-row">
                        <span className="k">TARGET:</span>
                        <span className="v">Field Camp 02 (Researcher injured)</span>
                      </div>
                      <div className="popup-row">
                        <span className="k">RESPONSE:</span>
                        <span className="v">Team B en route (Snow Vehicle 04)</span>
                      </div>
                      <button
                        className="btn btn-sm btn-danger popup-action-btn"
                        onClick={() => navigate('/emergencies/INC-0042')}
                      >
                        OPEN INCIDENT COMMAND →
                      </button>
                    </div>
                  </Popup>
                </CircleMarker>
              </MapContainer>

              {/* Map Legend */}
              <div className="map-legend-overlay">
                <div className="legend-item">
                  <span className="legend-dot station-dot"></span>
                  <span>Permanent Base Station</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot camp-dot"></span>
                  <span>Active Field Camp</span>
                </div>
                <div className="legend-item">
                  <span className="legend-dot emergency-dot"></span>
                  <span>Active Incident (INC-0042)</span>
                </div>
                <div className="legend-item">
                  <span className="legend-line route-line"></span>
                  <span>Evacuation Corridor (8 km)</span>
                </div>
              </div>

              {/* Bottom Coords Bar */}
              <div className="map-status-bar">
                <span>DATUM: WGS-84</span>
                <span>PROJECTION: POLAR STEREOGRAPHIC</span>
                <span>TACTICAL RADIO: VHF CH-16 (156.800 MHz)</span>
                <span>STATUS: REAL-TIME POSITIONING ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Cargo Status Pipeline Overview & Table */}
          <div className="panel cargo-summary-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="panel-badge-code">LOGISTICS PIPELINE</span>
                <span className="panel-main-title">CARGO & MATERIEL MOVEMENT</span>
              </div>
              <button className="btn btn-sm" onClick={() => navigate('/cargo')}>
                VIEW ALL 420 ITEMS →
              </button>
            </div>

            {/* Pipeline Stage Counts */}
            <div className="cargo-pipeline-strip">
              <div className="pipeline-cell">
                <span className="pipe-count">120</span>
                <span className="pipe-label">PACKED</span>
              </div>
              <div className="pipeline-sep">→</div>
              <div className="pipeline-cell">
                <span className="pipe-count">65</span>
                <span className="pipe-label">DISPATCHED</span>
              </div>
              <div className="pipeline-sep">→</div>
              <div className="pipeline-cell active-step">
                <span className="pipe-count highlight-blue">86</span>
                <span className="pipe-label">IN TRANSIT</span>
              </div>
              <div className="pipeline-sep">→</div>
              <div className="pipeline-cell">
                <span className="pipe-count">42</span>
                <span className="pipe-label">ARRIVED DOCK</span>
              </div>
              <div className="pipeline-sep">→</div>
              <div className="pipeline-cell">
                <span className="pipe-count highlight-green">400</span>
                <span className="pipe-label">RECEIVED</span>
              </div>
              <div className="pipeline-cell error-cell">
                <span className="pipe-count highlight-red">05</span>
                <span className="pipe-label">DELAYED</span>
              </div>
            </div>

            {/* Recent Critical Cargo Manifest */}
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>CARGO ID</th>
                    <th>DESCRIPTION</th>
                    <th>CATEGORY</th>
                    <th>WEIGHT</th>
                    <th>CURRENT LOCATION</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {cargoItems.slice(0, 5).map((item) => (
                    <tr key={item.id} className="clickable" onClick={() => navigate(`/cargo/${item.id}`)}>
                      <td className="table-id">{item.id}</td>
                      <td className="table-main-text">{item.description}</td>
                      <td className="table-secondary">{item.category}</td>
                      <td className="table-secondary font-mono">{item.weight} {item.unit}</td>
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
        </div>

        {/* RIGHT COLUMN: Critical Alerts, Inventory Watch, Activity */}
        <div className="dash-col-secondary">
          {/* Critical Operational Alerts Panel */}
          <div className="panel alerts-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="panel-badge-code">ATTENTION REQUIRED</span>
                <span className="panel-main-title">CRITICAL INCIDENTS & ALERTS</span>
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => navigate('/alerts')}>
                ALERTS HUB (3)
              </button>
            </div>

            <div className="alerts-feed">
              {alerts.slice(0, 4).map((alt) => (
                <div key={alt.id} className={`alert-card ${statusClass(alt.severity)}`}>
                  <div className="alert-card-header">
                    <div className="alert-severity-group">
                      <span className={`severity-tag ${statusClass(alt.severity)}`}>
                        {alt.severity.toUpperCase()}
                      </span>
                      <span className="alert-module-badge">{alt.module.toUpperCase()}</span>
                    </div>
                    <span className="alert-time-tag">{formatTime(alt.timestamp)}</span>
                  </div>
                  <div className="alert-card-title">{alt.title}</div>
                  <div className="alert-card-desc">{alt.description}</div>
                  <div className="alert-action-footer">
                    <span className="alert-station-tag">{alt.station} Station</span>
                    {alt.severity === 'Critical' && (
                      <span className="action-required-pill">ACTION REQUIRED</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Station Inventory & Resource Telemetry */}
          <div className="panel inventory-watch-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="panel-badge-code">LIFE SUPPORT & FUEL</span>
                <span className="panel-main-title">STATION RESOURCE RESERVES</span>
              </div>
              <button className="btn btn-sm" onClick={() => navigate('/inventory')}>
                INVENTORY →
              </button>
            </div>

            <div className="inventory-bars-container">
              {/* Diesel Fuel Item */}
              <div className="resource-bar-row">
                <div className="res-header">
                  <span className="res-name">Arctic Diesel Fuel (Power & Heat)</span>
                  <span className="res-stat-val font-mono">
                    <span className="bold-val">8,000 L</span> / 12,000 L
                  </span>
                </div>
                <div className="res-progress-track">
                  <div className="res-progress-fill warning-fill" style={{ width: '66.7%' }}></div>
                  <div className="res-threshold-mark" style={{ left: '50%' }} title="Critical Minimum Threshold (6,000L)"></div>
                </div>
                <div className="res-sub-telemetry">
                  <span className="alert-sub-text">Burn rate: 400 L/day • 20 Days Remaining</span>
                  <span className="deficit-tag">4,000 L DEFICIT PROJECTION</span>
                </div>
              </div>

              {/* Food Supplies */}
              <div className="resource-bar-row">
                <div className="res-header">
                  <span className="res-name">Food Reserves — Staples (Dry Goods)</span>
                  <span className="res-stat-val font-mono">
                    <span className="bold-val">3,200 kg</span> / 5,000 kg
                  </span>
                </div>
                <div className="res-progress-track">
                  <div className="res-progress-fill warning-fill" style={{ width: '64%' }}></div>
                  <div className="res-threshold-mark" style={{ left: '70%' }} title="Target Reserve Threshold (3,500kg)"></div>
                </div>
                <div className="res-sub-telemetry">
                  <span className="alert-sub-text">Daily ration: 65 kg/day • 49 Days buffer</span>
                  <span className="deficit-tag">BELOW 3,500 KG BUFFER</span>
                </div>
              </div>

              {/* Medical Supplies */}
              <div className="resource-bar-row">
                <div className="res-header">
                  <span className="res-name">Emergency Trauma Kits (MED-BAY)</span>
                  <span className="res-stat-val font-mono">
                    <span className="bold-val status-ok">142 units</span> / 150 target
                  </span>
                </div>
                <div className="res-progress-track">
                  <div className="res-progress-fill success-fill" style={{ width: '94.6%' }}></div>
                </div>
                <div className="res-sub-telemetry">
                  <span className="text-secondary">Full complement available at Bharati Infirmary</span>
                  <span className="status-badge active">SUFFICIENT</span>
                </div>
              </div>

              {/* Fresh Water Generation */}
              <div className="resource-bar-row">
                <div className="res-header">
                  <span className="res-name">Potable Fresh Water Reserve</span>
                  <span className="res-stat-val font-mono">
                    <span className="bold-val">12,000 L</span> / 15,000 L
                  </span>
                </div>
                <div className="res-progress-track">
                  <div className="res-progress-fill success-fill" style={{ width: '80%' }}></div>
                </div>
                <div className="res-sub-telemetry">
                  <span className="text-secondary">Lake Priyadarshini meltwater extraction normal</span>
                  <span className="status-badge active">NORMAL</span>
                </div>
              </div>

              {/* Vehicle & Generator Spare Parts */}
              <div className="resource-bar-row">
                <div className="res-header">
                  <span className="res-name">Critical Mechanical Spare Parts</span>
                  <span className="res-stat-val font-mono">
                    <span className="bold-val alert-red">42 items</span> / 50 min
                  </span>
                </div>
                <div className="res-progress-track">
                  <div className="res-progress-fill critical-fill" style={{ width: '42%' }}></div>
                </div>
                <div className="res-sub-telemetry">
                  <span className="alert-sub-text">PB-300 hydraulic seals & DG-250 injector low</span>
                  <span className="deficit-tag">REORDER REQUIRED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Operational Activity Trail */}
          <div className="panel activity-panel">
            <div className="panel-header">
              <div className="panel-title-group">
                <span className="panel-badge-code">OPERATIONAL JOURNAL</span>
                <span className="panel-main-title">LIVE TELEMETRY STREAM</span>
              </div>
              <button className="btn btn-sm" onClick={() => navigate('/audit-logs')}>
                FULL AUDIT LOG →
              </button>
            </div>

            <div className="timeline activity-timeline">
              {auditLogs.slice(0, 5).map((log) => (
                <div key={log.id} className="timeline-item">
                  <div className="timeline-dot current"></div>
                  <div className="timeline-time">{formatTime(log.timestamp)} — {log.user}</div>
                  <div className="timeline-label">{log.action}</div>
                  <div className="timeline-detail">{log.details}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
