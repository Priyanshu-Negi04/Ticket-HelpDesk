import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some(
      (user) => user.username === username || user.email === email
    );
    if (userExists) {
      setError("Username or email already exists.");
      return;
    }

    users.push({ username, password, email });

    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login");
  };

  return (
    <div className="bg-[#4bc1b3] min-h-screen flex items-center justify-center">
      <div className="bg-[#a9ded9] w-[700px] max-w-full p-10">
        <h1 className="text-center text-xl italic font-semibold mb-2">Helpdesk System</h1>
        <p className="text-center mb-6">Sign up here</p>
        <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          {error && <div className="text-red-600 text-center">{error}</div>}
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-black px-3 py-2"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-black px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-black px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-[#2e6eea] text-white px-10 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
          <div className="flex justify-between mt-4 max-w-md mx-auto text-sm">
            <NavLink to="/forgot-password" className="text-red-600">
              Forgot password
            </NavLink>
            <NavLink to="/login" className="text-black">
              Sign In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
