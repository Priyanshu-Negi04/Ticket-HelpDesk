import React from "react";
import BaseLayout from "../components/baseLayout";
import { useNavigate } from "react-router-dom";



export default function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const navigate = useNavigate();

  return (
    <BaseLayout>
        <main className="flex-1 p-6 bg-white min-w-0">
        <h2 className="text-xl mb-4 font-normal">User Profile</h2>
        <section className="bg-[#8de0db] p-6 flex flex-wrap gap-4 rounded-sm w-full max-w-full justify-center">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-md relative p-8 flex-1 min-w-[320px] max-w-[600px]">
            <button
                aria-label="Edit Profile"
                className="absolute top-4 right-4 text-black text-3xl"
                onClick={() => navigate("/profile/edit")}
                >
                <i className="fas fa-file-alt"></i>
                <i className="fas fa-edit -ml-4"></i>
            </button>
            <div className="flex justify-center mb-8">
                <div className="bg-gray-300 rounded-full w-36 h-36 flex items-center justify-center">
                <i className="fas fa-user text-black text-6xl"></i>
                </div>
            </div>
            <div className="text-black text-xl leading-snug space-y-2">
                <p>{currentUser.username || "Username"}</p>
                <p>{currentUser.contact || "Contact Number"}</p>
                <p>{currentUser.email || "Email"}</p>
                <p>{currentUser.department || "Department"}</p>
            </div>
            </div>

            {/* Feedback Card */}
            <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-[480px] h-44 flex flex-col justify-between">
            <p className="text-center text-base mb-1">Give Your Feedback</p>
            <div className="bg-gray-500 text-black text-sm font-mono p-2 truncate mb-1">
                [Lorem Ipsum]
            </div>
            <div className="flex justify-center text-gray-400 space-x-1 text-2xl select-none mb-1">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
            <button className="bg-[#4dd0c8] text-black text-base font-normal rounded-md w-full py-2">
                Submit Feedback
            </button>
            </div>
        </section>
        </main>
    </BaseLayout>
  );
}
