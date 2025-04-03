import { useState } from "react";
import { signup, login, logout, resetPassword, googleSignIn, facebookSignIn , createUserWithEmailAndPassword } from "./firebase"; // Import the necessary functions

export default function AuthForms() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      setError("");
      setLoading(true);
      createUserWithEmailAndPassword(email, password); 
      
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password); // Call the login function
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    try {
      setError("");
      await resetPassword(email); // Call the resetPassword function
      setError("Password reset link sent to your email.");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn(); // Call Google sign-in function
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn(); // Call Facebook sign-in function
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-container">
      {/* Conditionally render based on user authentication */}
      <h2>Auth</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Sign Up</button>
      </form>

      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Login</button>
      </form>

      <button onClick={handleResetPassword}>Reset Password</button>

      <h2>Or Sign In with</h2>
      <button onClick={handleGoogleSignIn}>Google</button>
      <button onClick={handleFacebookSignIn}>Facebook</button>

      <button onClick={logout}>Logout</button> 
    </div>
  );
}
