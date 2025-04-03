"use client"

import { auth } from "../lib/firebase"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const { currentUser, logout } = auth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.error("Failed to log out", error)
    }
  }

  return (
    <div className="auth-card">
      <h2>Dashboard</h2>
      <div className="profile-info">
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
      </div>
      <div className="mt-4">
        <button onClick={handleLogout} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  )
}

export default Dashboard

