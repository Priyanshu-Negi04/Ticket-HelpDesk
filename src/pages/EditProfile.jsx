import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";

export default function EditProfile() {
  const navigate = useNavigate();
  
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  // Form state
  const [username, setUsername] = useState(currentUser.username || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(currentUser.email || "");
  const [realName, setRealName] = useState(currentUser.realName || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (newPassword && newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      setSuccess("");
      return;
    }

    if (newPassword && currentPassword !== currentUser.password) {
      setError("Current password is incorrect.");
      setSuccess("");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const idx = users.findIndex(u => u.username === currentUser.username);

    if (idx !== -1) {
      users[idx] = {
        ...users[idx],
        username,
        email,
        realName,
        password: newPassword ? newPassword : users[idx].password,
      };
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(users[idx]));
      setSuccess("Profile updated!");
      setError("");
      setTimeout(() => navigate("/profile"), 1000);
    } else {
      setError("User not found.");
      setSuccess("");
    }
  };

  return (
    <BaseLayout>
        <main className="flex-1 p-6" style={{zoom : 1.25}}>
        <h2 className="text-2xl font-serif mb-4 select-text">User Profile</h2>
        <form onSubmit={handleUpdate}>
            <button
            type="button"
            className="bg-[#4dd0c8] px-4 py-2 mb-4 select-text"
            onClick={() => navigate("/profile")}
            >
            Back to Profile
            </button>
            {error && <div className="text-red-600 mb-2">{error}</div>}
            {success && <div className="text-green-600 mb-2">{success}</div>}
            <table className="w-full border-collapse border border-gray-300">
            <tbody>
                <tr className="bg-[#999999] border border-gray-300">
                <td className="px-3 text-white py-1 w-1/2 border border-gray-300">Username</td>
                <td className="border text-black border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr className="border border-gray-300">
                <td className="bg-[#999999] text-white px-3 py-1 w-1/2 border border-gray-300">
                    Current Password
                </td>
                <td className="border border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    type="password"
                    value={currentPassword}
                    onChange={e => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    />
                </td>
                </tr>
                <tr className="border border-gray-300">
                <td className="bg-[#999999] text-white px-3 py-1 w-1/2 border border-gray-300">
                    New Password
                </td>
                <td className="border border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    type="password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    />
                </td>
                </tr>
                <tr className="border border-gray-300">
                <td className="bg-[#999999] text-white px-3 py-1 w-1/2 border border-gray-300">
                    Confirm Password
                </td>
                <td className="border border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    />
                </td>
                </tr>
                <tr className="border border-gray-300">
                <td className="bg-[#999999] text-white px-3 py-1 w-1/2 border border-gray-300">
                    Email
                </td>
                <td className="border border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    />
                </td>
                </tr>
                <tr className="border border-gray-300">
                <td className="bg-[#999999] text-white px-3 py-1 w-1/2 border border-gray-300">
                    Real Name
                </td>
                <td className="border border-gray-300 w-1/2 bg-white">
                    <input
                    className="w-full px-2 py-1 border"
                    value={realName}
                    onChange={e => setRealName(e.target.value)}
                    />
                </td>
                </tr>
                <tr className="bg-[#d1d5db] border border-gray-300">
                <td colSpan={2} className="px-3 py-3 border border-gray-300">
                    <button className="bg-[#4dd0c8] px-6 py-2 select-text" type="submit">
                    Update User
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </form>
        </main>
    </BaseLayout>
  );
}
