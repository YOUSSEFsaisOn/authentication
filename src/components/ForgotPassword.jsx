"use client"

import { useState } from "react"
import { Link } from "react-router-dom" 
import { ArrowLeft, Mail } from "lucide-react"
import { auth } from "../lib/firebase"  

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [resetEmailSent, setResetEmailSent] = useState(false)

  // Use the sendPasswordResetEmail method from Firebase auth
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      // Call the sendPasswordResetEmail method directly from auth
      await auth.sendPasswordResetEmail(email)
      setResetEmailSent(true)
      setMessage("Check your inbox for further instructions")
    } catch (error) {
      setError("Failed to reset password: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card">
      <h2>Reset Your Password</h2>

      {!resetEmailSent ? (
        <>
          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Link to="/login" className="back-button">
                <ArrowLeft size={16} />
                Back to login
              </Link>
            </div>

            <p className="form-group">Enter your email address and we'll send you a link to reset your password.</p>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
        </>
      ) : (
        <div className="success-message">
          <div className="success-icon">
            <Mail size={24} />
          </div>
          <h3 className="success-title">Check your email</h3>
          <p className="success-text">
            We've sent a password reset link to <span>{email}</span>
          </p>
          <Link to="/login" className="success-button">
            Back to login
          </Link>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword
