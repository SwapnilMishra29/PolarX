/* Mock Data for PolarX — Realistic Polar Expedition Data */

export const currentUser = {
  name: 'Cmdr. Vikram Singh',
  role: 'Expedition Manager',
  email: 'v.singh@ncpor.res.in',
  station: 'NCPOR HQ, Goa',
};

export const expeditions = [
  {
    id: 'EXP-2027-A',
    name: 'Indian Antarctic Expedition 45',
    destination: 'Bharati Station, Antarctica',
    baseStation: 'Bharati',
    type: 'Scientific Research',
    teamSize: 52,
    status: 'Active',
    phase: 'Field Operations',
    startDate: '2027-01-10',
    endDate: '2027-03-25',
    budget: 8500,
    budgetUsed: 6200,
    cargoCount: 420,
    personnelCount: 52,
    description: 'Multi-disciplinary research expedition focusing on glaciology, atmospheric sciences, and marine biology at Bharati Station.',
  },
  {
    id: 'EXP-2027-B',
    name: 'Indian Antarctic Expedition 45-M',
    destination: 'Maitri Station, Antarctica',
    baseStation: 'Maitri',
    type: 'Station Maintenance & Research',
    teamSize: 38,
    status: 'Active',
    phase: 'Transit',
    startDate: '2027-01-15',
    endDate: '2027-03-20',
    budget: 6200,
    budgetUsed: 3800,
    cargoCount: 310,
    personnelCount: 38,
    description: 'Annual resupply and maintenance of Maitri Station with focus on upper atmosphere research and geological surveys.',
  },
  {
    id: 'EXP-2027-C',
    name: 'Arctic Expedition — Himadri 2027',
    destination: 'Himadri Station, Ny-Ålesund, Svalbard',
    baseStation: 'Himadri',
    type: 'Climate Research',
    teamSize: 12,
    status: 'Planned',
    phase: 'Preparation',
    startDate: '2027-06-01',
    endDate: '2027-09-15',
    budget: 2800,
    budgetUsed: 450,
    cargoCount: 85,
    personnelCount: 12,
    description: 'Summer Arctic research campaign focusing on permafrost monitoring, sea ice studies, and atmospheric trace gas measurements.',
  },
  {
    id: 'EXP-2026-D',
    name: 'Southern Ocean Expedition — SO-2026',
    destination: 'Southern Ocean (Indian Sector)',
    baseStation: 'ORV Sagar Kanya',
    type: 'Oceanographic Survey',
    teamSize: 23,
    status: 'Completed',
    phase: 'Completed',
    startDate: '2026-10-05',
    endDate: '2026-12-18',
    budget: 4100,
    budgetUsed: 3950,
    cargoCount: 120,
    personnelCount: 23,
    description: 'Oceanographic and biogeochemical research cruise in the Indian sector of the Southern Ocean.',
  },
];

export const cargoItems = [
  { id: 'CARGO-00125', description: 'Ice Core Drilling Equipment', category: 'Scientific Equipment', weight: 180, unit: 'kg', origin: 'NCPOR Goa', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'High', status: 'In Transit', currentLocation: 'MV Transport Ship', lastUpdated: '2027-01-18T14:30:00', qrCode: 'CARGO-00125' },
  { id: 'CARGO-00126', description: 'Diesel Fuel — Arctic Grade', category: 'Fuel', weight: 5000, unit: 'L', origin: 'Chennai Port', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'Critical', status: 'In Transit', currentLocation: 'MV Transport Ship', lastUpdated: '2027-01-18T14:30:00', qrCode: 'CARGO-00126' },
  { id: 'CARGO-00127', description: 'Medical Supplies Kit — Emergency', category: 'Medical', weight: 45, unit: 'kg', origin: 'AIIMS Delhi', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'Critical', status: 'Received', currentLocation: 'Bharati Station', lastUpdated: '2027-01-22T09:15:00', qrCode: 'CARGO-00127' },
  { id: 'CARGO-00128', description: 'Frozen Food Supplies — Q1', category: 'Food', weight: 2200, unit: 'kg', origin: 'Mumbai Cold Storage', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'High', status: 'Received', currentLocation: 'Bharati Station', lastUpdated: '2027-01-21T16:45:00', qrCode: 'CARGO-00128' },
  { id: 'CARGO-00129', description: 'Satellite Communication Module', category: 'Communication', weight: 32, unit: 'kg', origin: 'ISRO Bangalore', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'High', status: 'Dispatched', currentLocation: 'Chennai Port', lastUpdated: '2027-01-17T11:00:00', qrCode: 'CARGO-00129' },
  { id: 'CARGO-00130', description: 'Generator Spare Parts', category: 'Spare Parts', weight: 120, unit: 'kg', origin: 'Pune Workshop', destination: 'Maitri', expedition: 'EXP-2027-B', priority: 'Medium', status: 'Packed', currentLocation: 'NCPOR Warehouse', lastUpdated: '2027-01-16T08:30:00', qrCode: 'CARGO-00130' },
  { id: 'CARGO-00131', description: 'Snow Vehicle Tyres & Chains', category: 'Vehicle Parts', weight: 340, unit: 'kg', origin: 'BEML Bangalore', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'Medium', status: 'Delayed', currentLocation: 'BEML Warehouse', lastUpdated: '2027-01-14T13:20:00', qrCode: 'CARGO-00131' },
  { id: 'CARGO-00132', description: 'Atmospheric Monitoring Sensors', category: 'Scientific Equipment', weight: 28, unit: 'kg', origin: 'IIT Delhi', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'High', status: 'Arrived', currentLocation: 'Bharati Dock', lastUpdated: '2027-01-20T07:00:00', qrCode: 'CARGO-00132' },
  { id: 'CARGO-00133', description: 'Personal Protective Equipment', category: 'Safety', weight: 95, unit: 'kg', origin: 'NCPOR Goa', destination: 'Maitri', expedition: 'EXP-2027-B', priority: 'Medium', status: 'In Transit', currentLocation: 'MV Transport Ship', lastUpdated: '2027-01-18T14:30:00', qrCode: 'CARGO-00133' },
  { id: 'CARGO-00134', description: 'Water Purification System', category: 'Equipment', weight: 75, unit: 'kg', origin: 'Chennai', destination: 'Bharati', expedition: 'EXP-2027-A', priority: 'High', status: 'Deployed', currentLocation: 'Bharati Station — Lab Block', lastUpdated: '2027-01-23T10:00:00', qrCode: 'CARGO-00134' },
];

export const cargoLifecycle = {
  'CARGO-00125': [
    { status: 'Planned', timestamp: '2026-11-05T10:00:00', by: 'Logistics Dept.' },
    { status: 'Packed', timestamp: '2026-12-12T14:30:00', by: 'NCPOR Warehouse' },
    { status: 'Dispatched', timestamp: '2026-12-28T09:00:00', by: 'Transport Officer' },
    { status: 'In Transit', timestamp: '2027-01-10T06:00:00', by: 'Ship Captain' },
  ],
};

export const inventoryItems = [
  { id: 'INV-001', name: 'Diesel Fuel', category: 'Fuel', available: 8000, unit: 'L', threshold: 6000, dailyConsumption: 400, location: 'Bharati Station', status: 'Normal' },
  { id: 'INV-002', name: 'Aviation Turbine Fuel', category: 'Fuel', available: 2200, unit: 'L', threshold: 2000, dailyConsumption: 80, location: 'Bharati Station', status: 'Warning' },
  { id: 'INV-003', name: 'Food Supplies — Staples', category: 'Food', available: 3200, unit: 'kg', threshold: 3500, dailyConsumption: 65, location: 'Bharati Station', status: 'Low' },
  { id: 'INV-004', name: 'Food Supplies — Frozen', category: 'Food', available: 1800, unit: 'kg', threshold: 1200, dailyConsumption: 40, location: 'Bharati Station', status: 'Normal' },
  { id: 'INV-005', name: 'Medical Kits', category: 'Medical', available: 142, unit: 'units', threshold: 100, dailyConsumption: 0.5, location: 'Bharati Station', status: 'Normal' },
  { id: 'INV-006', name: 'Emergency Oxygen Cylinders', category: 'Medical', available: 18, unit: 'units', threshold: 20, dailyConsumption: 0.2, location: 'Bharati Station', status: 'Low' },
  { id: 'INV-007', name: 'Spare Generator Parts', category: 'Spare Parts', available: 42, unit: 'units', threshold: 50, dailyConsumption: 0.3, location: 'Bharati Station', status: 'Low' },
  { id: 'INV-008', name: 'Lubricant Oil', category: 'Fuel', available: 350, unit: 'L', threshold: 200, dailyConsumption: 5, location: 'Bharati Station', status: 'Normal' },
  { id: 'INV-009', name: 'Communication Batteries', category: 'Equipment', available: 64, unit: 'units', threshold: 40, dailyConsumption: 1, location: 'Bharati Station', status: 'Normal' },
  { id: 'INV-010', name: 'Fresh Water', category: 'Consumable', available: 12000, unit: 'L', threshold: 8000, dailyConsumption: 500, location: 'Bharati Station', status: 'Normal' },
];

export const fuelConsumptionHistory = [
  { day: 'Jan 1', consumed: 380, remaining: 12000 },
  { day: 'Jan 4', consumed: 420, remaining: 11580 },
  { day: 'Jan 7', consumed: 390, remaining: 11190 },
  { day: 'Jan 10', consumed: 450, remaining: 10740 },
  { day: 'Jan 13', consumed: 410, remaining: 10330 },
  { day: 'Jan 16', consumed: 380, remaining: 9950 },
  { day: 'Jan 19', consumed: 440, remaining: 9510 },
  { day: 'Jan 22', consumed: 400, remaining: 9110 },
  { day: 'Jan 25', consumed: 430, remaining: 8680 },
  { day: 'Jan 28', consumed: 410, remaining: 8270 },
  { day: 'Jan 31', consumed: 270, remaining: 8000 },
];

export const personnel = [
  { id: 'PER-001', name: 'Dr. Rahul Sharma', role: 'Lead Glaciologist', team: 'Research Team A', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Ice Core Analysis', lastMovement: '2027-01-22T10:30:00' },
  { id: 'PER-002', name: 'Dr. Priya Nair', role: 'Station Medical Officer', team: 'Medical Unit', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Emergency Medicine', lastMovement: '2027-01-20T08:00:00' },
  { id: 'PER-003', name: 'Lt. Arjun Reddy', role: 'Logistics Coordinator', team: 'Operations', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Supply Chain', lastMovement: '2027-01-23T07:45:00' },
  { id: 'PER-004', name: 'Dr. Meera Krishnan', role: 'Marine Biologist', team: 'Research Team B', expedition: 'EXP-2027-A', location: 'Field Camp 02', status: 'Active', specialization: 'Antarctic Marine Ecology', lastMovement: '2027-01-23T06:00:00' },
  { id: 'PER-005', name: 'Sgt. Ravi Kumar', role: 'Vehicle Mechanic', team: 'Technical Support', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Snow Vehicle Repair, Electronics', lastMovement: '2027-01-22T14:00:00' },
  { id: 'PER-006', name: 'Dr. Anand Patel', role: 'Atmospheric Scientist', team: 'Research Team A', expedition: 'EXP-2027-A', location: 'Field Camp 03', status: 'Active', specialization: 'Trace Gas Measurements', lastMovement: '2027-01-23T05:30:00' },
  { id: 'PER-007', name: 'Capt. Suresh Iyer', role: 'Station Leader', team: 'Command', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Expedition Management', lastMovement: '2027-01-23T08:00:00' },
  { id: 'PER-008', name: 'Mr. Dinesh Thakur', role: 'Communications Officer', team: 'Operations', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Satellite Systems', lastMovement: '2027-01-22T16:00:00' },
  { id: 'PER-009', name: 'Dr. Kavita Joshi', role: 'Geologist', team: 'Research Team C', expedition: 'EXP-2027-B', location: 'Maitri Station', status: 'Active', specialization: 'Rock Sampling, Petrology', lastMovement: '2027-01-21T09:00:00' },
  { id: 'PER-010', name: 'Mr. Prakash Hegde', role: 'Cook / Catering', team: 'Support', expedition: 'EXP-2027-A', location: 'Bharati Station', status: 'Active', specialization: 'Nutrition, High-altitude Cooking', lastMovement: '2027-01-23T05:00:00' },
];

export const movements = [
  { id: 'MOV-001', personnelId: 'PER-004', name: 'Dr. Meera Krishnan', from: 'Bharati Station', to: 'Field Camp 02', departure: '2027-01-23T06:00:00', expectedReturn: '2027-01-23T18:00:00', purpose: 'Marine sample collection', status: 'In Progress', vehicle: 'ASSET-003' },
  { id: 'MOV-002', personnelId: 'PER-006', name: 'Dr. Anand Patel', from: 'Bharati Station', to: 'Field Camp 03', departure: '2027-01-23T05:30:00', expectedReturn: '2027-01-24T17:00:00', purpose: 'Atmospheric sensor deployment', status: 'In Progress', vehicle: 'ASSET-004' },
  { id: 'MOV-003', personnelId: 'PER-001', name: 'Dr. Rahul Sharma', from: 'Field Camp 01', to: 'Bharati Station', departure: '2027-01-22T10:30:00', expectedReturn: null, purpose: 'Return with ice core samples', status: 'Completed', vehicle: 'ASSET-003' },
  { id: 'MOV-004', personnelId: 'PER-003', name: 'Lt. Arjun Reddy', from: 'Bharati Dock', to: 'Bharati Station', departure: '2027-01-23T07:45:00', expectedReturn: null, purpose: 'Cargo receiving operations', status: 'Completed', vehicle: null },
  { id: 'MOV-005', personnelId: 'PER-005', name: 'Sgt. Ravi Kumar', from: 'Bharati Station', to: 'Vehicle Bay', departure: '2027-01-22T14:00:00', expectedReturn: '2027-01-22T18:00:00', purpose: 'Snow vehicle maintenance', status: 'Completed', vehicle: null },
];

export const assets = [
  { id: 'ASSET-001', name: 'Snow Vehicle 04', type: 'Vehicle', category: 'Transport', location: 'Bharati Station', status: 'Available', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-10', nextMaintenance: '2027-02-10', usageHours: 342 },
  { id: 'ASSET-002', name: 'Snow Vehicle Bravo', type: 'Vehicle', category: 'Transport', location: 'Bharati Station', status: 'In Use', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-05', nextMaintenance: '2027-02-05', usageHours: 410 },
  { id: 'ASSET-003', name: 'Pisten Bully PB-300', type: 'Vehicle', category: 'Heavy Transport', location: 'Field Camp 02', status: 'In Use', expedition: 'EXP-2027-A', lastMaintenance: '2026-12-20', nextMaintenance: '2027-01-30', usageHours: 580 },
  { id: 'ASSET-004', name: 'Ski-Doo Expedition 900', type: 'Vehicle', category: 'Light Transport', location: 'Field Camp 03', status: 'In Use', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-12', nextMaintenance: '2027-02-12', usageHours: 210 },
  { id: 'ASSET-005', name: 'Generator DG-250 (Primary)', type: 'Generator', category: 'Power', location: 'Bharati Station', status: 'Operational', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-15', nextMaintenance: '2027-02-15', usageHours: 2840 },
  { id: 'ASSET-006', name: 'Generator DG-250 (Backup)', type: 'Generator', category: 'Power', location: 'Bharati Station', status: 'Available', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-08', nextMaintenance: '2027-02-08', usageHours: 1200 },
  { id: 'ASSET-007', name: 'VSAT Terminal — Primary', type: 'Communication', category: 'Comms', location: 'Bharati Station', status: 'Operational', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-01', nextMaintenance: '2027-04-01', usageHours: 4380 },
  { id: 'ASSET-008', name: 'Ice Core Drill — Electromech', type: 'Scientific Equipment', category: 'Research', location: 'Bharati Station', status: 'Available', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-18', nextMaintenance: '2027-03-18', usageHours: 120 },
  { id: 'ASSET-009', name: 'Portable Weather Station', type: 'Scientific Equipment', category: 'Research', location: 'Field Camp 03', status: 'In Use', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-10', nextMaintenance: '2027-04-10', usageHours: 720 },
  { id: 'ASSET-010', name: 'Medical Defibrillator', type: 'Medical Equipment', category: 'Medical', location: 'Bharati Station', status: 'Available', expedition: 'EXP-2027-A', lastMaintenance: '2027-01-20', nextMaintenance: '2027-07-20', usageHours: 2 },
];

export const emergencies = [
  {
    id: 'INC-0042', type: 'Medical', severity: 'High', location: 'Field Camp 02', coordinates: [-69.40, 76.30],
    reportedBy: 'Field Officer 07', reportedAt: '2027-01-23T14:32:00', status: 'Response Active',
    description: 'Researcher suffered deep laceration to left forearm during sample extraction. Significant bleeding, possible tendon involvement. Requires immediate medical attention and possible evacuation.',
    nearestTeam: 'Response Team B', teamDistance: '8 km', availableVehicle: 'Snow Vehicle 04',
    medicalKit: 'MED-012', communicationStatus: 'Active',
  },
  {
    id: 'INC-0041', type: 'Equipment Failure', severity: 'Medium', location: 'Bharati Station',
    coordinates: [-69.41, 76.19], reportedBy: 'Sgt. Ravi Kumar', reportedAt: '2027-01-22T09:15:00',
    status: 'In Progress', description: 'Backup generator DG-250 showing intermittent voltage fluctuations. Not critical but needs inspection before primary generator scheduled maintenance.',
    nearestTeam: 'Technical Support', teamDistance: 'On-site', availableVehicle: null,
    medicalKit: null, communicationStatus: 'Active',
  },
  {
    id: 'INC-0040', type: 'Weather', severity: 'High', location: 'Bharati Station Region',
    coordinates: [-69.41, 76.18], reportedBy: 'Weather Station Auto', reportedAt: '2027-01-21T18:00:00',
    status: 'Resolved', description: 'Severe katabatic wind event. Wind speeds exceeding 120 km/h. All field operations suspended. Personnel recalled to main station.',
    nearestTeam: null, teamDistance: null, availableVehicle: null,
    medicalKit: null, communicationStatus: 'Active',
  },
];

export const alerts = [
  { id: 'ALT-001', severity: 'Critical', module: 'Inventory', title: 'Fuel shortage projected in 12 days', description: 'Current diesel consumption rate (400L/day) exceeds available stock for remaining expedition duration. Projected shortfall: 4,000L.', timestamp: '2027-01-23T14:00:00', status: 'Active', station: 'Bharati' },
  { id: 'ALT-002', severity: 'Critical', module: 'Emergency', title: 'Medical emergency — Field Camp 02', description: 'Researcher injury reported. Response Team B dispatched.', timestamp: '2027-01-23T14:32:00', status: 'Active', station: 'Bharati' },
  { id: 'ALT-003', severity: 'Warning', module: 'Cargo', title: 'Cargo CARGO-00131 delayed', description: 'Snow Vehicle Tyres & Chains — expected dispatch date exceeded by 4 days.', timestamp: '2027-01-23T10:15:00', status: 'Active', station: 'Bharati' },
  { id: 'ALT-004', severity: 'Warning', module: 'Assets', title: 'PB-300 maintenance overdue', description: 'Pisten Bully PB-300 next maintenance scheduled Jan 30. Usage hours: 580 (threshold: 500).', timestamp: '2027-01-23T08:00:00', status: 'Active', station: 'Bharati' },
  { id: 'ALT-005', severity: 'Warning', module: 'Inventory', title: 'Food staples below threshold', description: 'Current stock: 3,200 kg. Minimum threshold: 3,500 kg. Shortfall: 300 kg.', timestamp: '2027-01-22T18:00:00', status: 'Active', station: 'Bharati' },
  { id: 'ALT-006', severity: 'Info', module: 'Cargo', title: 'Cargo CARGO-00127 received', description: 'Medical Supplies Kit received at Bharati Station.', timestamp: '2027-01-22T09:15:00', status: 'Acknowledged', station: 'Bharati' },
  { id: 'ALT-007', severity: 'Info', module: 'Movement', title: 'Field movement completed', description: 'Dr. Rahul Sharma returned from Field Camp 01 with ice core samples.', timestamp: '2027-01-22T10:30:00', status: 'Acknowledged', station: 'Bharati' },
  { id: 'ALT-008', severity: 'Warning', module: 'Inventory', title: 'Oxygen cylinders below threshold', description: 'Emergency oxygen: 18 units. Minimum: 20 units.', timestamp: '2027-01-22T12:00:00', status: 'Active', station: 'Bharati' },
];

export const auditLogs = [
  { id: 1, timestamp: '2027-01-23T14:32:00', user: 'Field Officer 07', action: 'Created emergency incident INC-0042', module: 'Emergencies', details: 'Medical emergency at Field Camp 02' },
  { id: 2, timestamp: '2027-01-23T14:20:00', user: 'Lt. Arjun Reddy', action: 'Marked CARGO-00132 as ARRIVED', module: 'Cargo', details: 'Atmospheric Monitoring Sensors arrived at Bharati Dock' },
  { id: 3, timestamp: '2027-01-23T13:58:00', user: 'Capt. Suresh Iyer', action: 'Updated fuel inventory', module: 'Inventory', details: 'Diesel fuel stock adjusted: 8,270L → 8,000L' },
  { id: 4, timestamp: '2027-01-23T13:30:00', user: 'Cmdr. Vikram Singh', action: 'Assigned Response Team B', module: 'Emergencies', details: 'Team B dispatched to Field Camp 02 for INC-0042' },
  { id: 5, timestamp: '2027-01-23T10:15:00', user: 'System', action: 'Generated delay alert for CARGO-00131', module: 'Alerts', details: 'Auto-alert: dispatch deadline exceeded' },
  { id: 6, timestamp: '2027-01-23T08:00:00', user: 'System', action: 'Generated maintenance alert for ASSET-003', module: 'Alerts', details: 'Auto-alert: PB-300 usage hours exceeded threshold' },
  { id: 7, timestamp: '2027-01-22T16:45:00', user: 'Lt. Arjun Reddy', action: 'Marked CARGO-00128 as RECEIVED', module: 'Cargo', details: 'Frozen Food Supplies verified and stored' },
  { id: 8, timestamp: '2027-01-22T14:00:00', user: 'Sgt. Ravi Kumar', action: 'Started vehicle maintenance', module: 'Assets', details: 'Snow Vehicle Bravo — scheduled inspection' },
  { id: 9, timestamp: '2027-01-22T10:30:00', user: 'Dr. Rahul Sharma', action: 'Completed field movement MOV-003', module: 'Movements', details: 'Returned from Field Camp 01 with 12 ice core samples' },
  { id: 10, timestamp: '2027-01-22T09:15:00', user: 'Dr. Priya Nair', action: 'Marked CARGO-00127 as RECEIVED', module: 'Cargo', details: 'Medical supplies verified and catalogued' },
  { id: 11, timestamp: '2027-01-21T18:00:00', user: 'System', action: 'Created weather alert INC-0040', module: 'Emergencies', details: 'Katabatic wind event >120 km/h detected' },
  { id: 12, timestamp: '2027-01-21T09:00:00', user: 'Dr. Kavita Joshi', action: 'Logged field movement', module: 'Movements', details: 'Departed Maitri for geological survey site' },
];

export const stationLocations = [
  { name: 'Bharati Station', lat: -69.4081, lng: 76.1879, type: 'station', status: 'Operational', personnel: 52 },
  { name: 'Maitri Station', lat: -70.7667, lng: 11.7333, type: 'station', status: 'Operational', personnel: 38 },
  { name: 'Himadri Station', lat: 78.9230, lng: 11.9300, type: 'station', status: 'Standby', personnel: 0 },
  { name: 'Field Camp 01', lat: -69.35, lng: 76.10, type: 'camp', status: 'Inactive' },
  { name: 'Field Camp 02', lat: -69.40, lng: 76.30, type: 'camp', status: 'Active' },
  { name: 'Field Camp 03', lat: -69.50, lng: 76.25, type: 'camp', status: 'Active' },
  { name: 'MV Transport Ship', lat: -55.00, lng: 65.00, type: 'vessel', status: 'In Transit' },
];

export const mapEmergencyMarkers = [
  { name: 'INC-0042 — Medical Emergency', lat: -69.40, lng: 76.30, type: 'emergency', severity: 'High' },
];

// Helper to format dates
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatTime(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function formatDateTime(dateStr) {
  if (!dateStr) return '—';
  return `${formatDate(dateStr)} ${formatTime(dateStr)}`;
}

export function timeAgo(dateStr) {
  const now = new Date('2027-01-23T15:00:00');
  const d = new Date(dateStr);
  const mins = Math.floor((now - d) / 60000);
  if (mins < 60) return `${mins} min ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export function statusClass(status) {
  if (!status) return '';
  return status.toLowerCase().replace(/\s+/g, '-');
}
