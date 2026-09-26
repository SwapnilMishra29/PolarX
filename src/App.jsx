import { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './components/AppShell/AppShell'
import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Expeditions from './pages/Expeditions/Expeditions'
import ExpeditionDetail from './pages/Expeditions/ExpeditionDetail'
import Cargo from './pages/Cargo/Cargo'
import CargoDetail from './pages/Cargo/CargoDetail'
import Inventory from './pages/Inventory/Inventory'
import Personnel from './pages/Personnel/Personnel'
import PersonnelDetail from './pages/Personnel/PersonnelDetail'
import Assets from './pages/Assets/Assets'
import AssetDetail from './pages/Assets/AssetDetail'
import Movements from './pages/Movements/Movements'
import Emergencies from './pages/Emergencies/Emergencies'
import EmergencyDetail from './pages/Emergencies/EmergencyDetail'
import Analytics from './pages/Analytics/Analytics'
import Alerts from './pages/Alerts/Alerts'
import AuditLogs from './pages/AuditLogs/AuditLogs'
import './App.css'

export const AuthContext = createContext()
export const NotificationContext = createContext()

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [notifications, setNotifications] = useState([])

  const login = (email, password) => {
    setIsAuthenticated(true)
    setUser({
      name: 'Cmdr. Vikram Singh',
      role: 'Expedition Manager',
      email: email,
      station: 'NCPOR HQ, Goa'
    })
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
  }

  const addNotification = (notification) => {
    const newNotif = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...notification
    }
    setNotifications(prev => [newNotif, ...prev].slice(0, 50))
  }

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <AuthContext.Provider value={{ login, logout, user }}>
        <Login />
      </AuthContext.Provider>
    )
  }

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/expeditions" element={<Expeditions />} />
              <Route path="/expeditions/:id" element={<ExpeditionDetail />} />
              <Route path="/cargo" element={<Cargo />} />
              <Route path="/cargo/:id" element={<CargoDetail />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/personnel" element={<Personnel />} />
              <Route path="/personnel/:id" element={<PersonnelDetail />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/assets/:id" element={<AssetDetail />} />
              <Route path="/movements" element={<Movements />} />
              <Route path="/emergencies" element={<Emergencies />} />
              <Route path="/emergencies/:id" element={<EmergencyDetail />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/audit-logs" element={<AuditLogs />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
