import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      if (foundUser.role === "admin") {
        navigate("/admin/dashboard");
      } 
      else if (foundUser.role === "operation") {
        navigate("/operation/dashboard");
      } 
      else if (foundUser.role === "support") {
        navigate("/support/dashboard");
      } 
      else {
        navigate("/user/dashboard");
      }
    } 
    else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="bg-[#52c6bb] min-h-screen flex items-center justify-center">
      <div className="border border-[#2a8de0] bg-[#a6dedb] w-[700px] max-w-full p-10">
        <h2 className="text-center font-semibold italic text-[24px] mb-8">
          Helpdesk System
        </h2>
        <form className="max-w-[400px] mx-auto" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-5 px-3 py-2 border border-black-300"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-7 px-3 py-2 border border-black-300"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <div className="flex justify-center mb-7">
            <button
              type="submit"
              className="bg-[#0bc30b] text-white px-10 py-2 rounded-md"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-between text-sm">
            <NavLink to="/forgot-password" className="text-[#d31a1a]">
              Forgot password
            </NavLink>
            <NavLink to="/signup" className="text-black">
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
