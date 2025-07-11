// pages/RoleDashboardExtras.jsx
import React from "react";

export default function DashboardExtra() {
  return (
    <div className="mx-auto grid grid-cols-2 grid-rows-[2fr_1fr] h-[400px] gap-4 p-4" >
      <div className="bg-[#7EE5E5] rounded-xl shadow w-full h-full row-span-2 flex items-center justify-center" >
        <i className="fas fa-chart-bar text-[100px] text-[#1A3557]" style={{zoom : 3}}></i>
      </div>
      <div className="bg-[#7EE5E5] rounded-xl shadow w-full h-full grid grid-cols-2 items-center gap-2">
          <div className="flex flex-col items-center justify-center my-2" >
            <i className="flex fas fa-headset text-3xl mr-2" style={{zoom : 4}}></i>
            <span className="flex font-bold text-2xl">3</span>
            <span className="flex ml-2 text-2xl">Technical</span>
            <span className="flex ml-2 text-2xl">Supports</span>
          </div>
          <div className="flex flex-col items-center justify-center my-2" >
            <i className="flex fas fa-user-cog text-3xl mr-2" style={{zoom : 4}}></i>
            <span className="flex text-2xl font-bold">4</span>
            <span className="flex ml-2 text-2xl">Operation</span>
            <span className="flex ml-2 text-2xl">Team</span>
          </div>
      </div>
      <div className="bg-[#7EE5E5] rounded-xl shadow w-full h-full flex-col items-center justify-center p-4" style={{zoom : 1.4}}>
        <div className="text-lg font-semibold mb-2 flex items-center justify-center">Customer Feedback</div>
        <div className="flex items-center justify-center">
          <i className="fas fa-star text-yellow-400"></i>
          <i className="fas fa-star text-yellow-400"></i>
          <i className="fas fa-star text-yellow-400"></i>
          <i className="fas fa-star text-yellow-400"></i>
          <i className="fas fa-star-half-alt text-yellow-400"></i>
        </div>
      </div>
    </div>
  );
}
