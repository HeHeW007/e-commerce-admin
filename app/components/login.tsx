"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Next.js navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const router = useRouter(); // Correct hook for Next.js
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // Alert State
  const [alert, setAlert] = useState<{ message: string; type: string; show: boolean }>({
    message: "",
    type: "",
    show: false,
  });

  // Auto-hide alert after 3 seconds
  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  // Dummy Authentication (replace with API call)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh

    if (username === "EliasFares" && password === "admin123") {
      setAlert({ message: "✅ Login Successful!", type: "success", show: true });
      setTimeout(() => router.push("/dashboard"), 1500);
    } else {
      setAlert({ message: "❌ Invalid username or password", type: "error", show: true });
    }
  };

  return (
    <div className="sign-cont">
      {/* Alert Box */}
      {alert.show && (
        <div className={`alert-box ${alert.type === "success" ? "alert-success" : "alert-error"}`}>
          {alert.message}
        </div>
      )}

      {/* Left Side */}
      <div className="sign-intro">
        <p>Do not have an account? <br /></p>
        <div className="login-cont">
          <button className="login-btn" onClick={() => router.push("/")}>Sign Up</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="sign-content">
        <h3>Login</h3>
        <form className="addUserForm" onSubmit={handleLogin}>
          <div className="inputGroup">
            {/* Username Input */}
            <div className="label-div">
              <input 
                type="text" 
                name="username"
                placeholder="Username"
                id="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label htmlFor="name">
                <FontAwesomeIcon icon={faUser} width={12} />
              </label>
            </div>

            {/* Password Input */}
            <div className="label-div">
              <input 
                type="password" 
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">
                <FontAwesomeIcon icon={faLock} width={12} />
              </label>
            </div>

            {/* Login Button */}
            <div className="login-cont">
              <button type="submit" className="login-btn-log">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
