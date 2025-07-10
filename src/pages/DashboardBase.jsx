import React from "react";

export default function DashboardBase() {
  return (
    <section className="flex-1 p-4">
      <h2 className="text-center font-serif text-xl font-bold mb-4 select-none">Dashboard</h2>
      <div className="flex flex-wrap justify-start gap-6">
        <div className="bg-[#2B82F6] rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] w-48 h-48 flex flex-col justify-center items-center text-black select-none px-4">
          <p className="text-center text-base font-serif font-semibold mb-3 tracking-wide">Total Tickets</p>
          <p className="text-7xl font-serif leading-tight">12</p>
        </div>
        <div className="bg-[#2EFF7D] rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] w-48 h-48 flex flex-col justify-center items-center text-black select-none px-4">
          <p className="text-center text-base font-serif font-semibold mb-3 tracking-wide">Total Solved</p>
          <p className="text-7xl font-serif leading-tight">8</p>
        </div>
        <div className="bg-[#FF5A4A] rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] w-48 h-48 flex flex-col justify-center items-center text-black select-none px-4">
          <p className="text-center text-base font-serif font-semibold mb-3 leading-tight tracking-wide">
            Total<br />Awaiting<br />Approval
          </p>
          <p className="text-7xl font-serif leading-tight">2</p>
        </div>
        <div className="bg-[#FEF97A] rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,0.2)] w-48 h-48 flex flex-col justify-center items-center text-black select-none px-4">
          <p className="text-center text-base font-serif font-semibold mb-3 leading-tight tracking-wide">
            Total in<br />Progress
          </p>
          <p className="text-7xl font-serif leading-tight">2</p>
        </div>
      </div>
    </section>
  );
}
