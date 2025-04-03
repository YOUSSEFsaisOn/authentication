import { Navigate } from "react-router-dom"
import { auth } from "../lib/firebase"

function ProtectedRoute({ children }) {
  const { currentUser } = auth()

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute

