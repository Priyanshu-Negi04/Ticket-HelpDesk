import React from "react";
import BaseLayout from "../../components/baseLayout";

export default function UserNewTicket() {
  return (
    <BaseLayout>
        <main className="flex-1 flex flex-col items-center bg-white px-4 py-8 overflow-auto" style={{zoom : 1.15}}>
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-none">
            <h2 className="text-center text-2xl font-serif font-semibold mb-10 select-none">Create New Ticket</h2>
            <form className="space-y-6" autoComplete="off" noValidate>
            {/* Ticket No. and Date */}
            <div className="flex flex-row gap-12 justify-between">
                {/* Ticket No. */}
                <div className="flex items-center flex-1 max-w-md">
                <label className="text-base font-serif mr-2 min-w-[90px]">Ticket No :</label>
                <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 flex-1" />
                </div>
                {/* Date */}
                <div className="flex items-center flex-1 max-w-md">
                <label className="text-base font-serif mr-2 min-w-[55px]">Date:</label>
                <input type="date" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 flex-1" />
                </div>
            </div>
            
            {/* Name and Department */}
            <div className="flex flex-row gap-12 justify-between">
                {/* Name */}
                <div className="flex items-center flex-1 max-w-md">
                <label className="text-base font-serif mr-2 min-w-[90px]">Name:</label>
                <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 flex-1" />
                </div>
                {/* Department */}
                <div className="flex items-center flex-1 max-w-md">
                <label className="text-base font-serif mr-2 min-w-[90px]">Department:</label>
                <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 flex-1" />
                </div>
            </div>
            
            {/* Subject */}
            <div>
                <label className="text-base font-serif mb-1 block">Subject:</label>
                <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 w-full" />
            </div>
            
            {/* Category, Type, Priority and Description */}
            <div className="flex flex-row gap-8">
                <div className="flex flex-col flex-1 max-w-md space-y-5">
                <div>
                    <label className="text-base font-serif mb-1 block">Category:</label>
                    <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 w-full" />
                </div>
                <div>
                    <label className="text-base font-serif mb-1 block">Type:</label>
                    <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 w-full" />
                </div>
                <div>
                    <label className="text-base font-serif mb-1 block">Priority:</label>
                    <input type="text" className="rounded-md bg-gray-300 shadow-inner px-3 py-2 w-full" />
                </div>
                </div>
                <div className="flex-1 min-w-[320px]">
                <label className="text-base font-serif mb-1 block">Description:</label>
                <div className="relative">
                    <textarea rows={7} className="rounded-md bg-gray-300 shadow-inner px-3 py-2 resize-none w-full" />
                    <button type="button" aria-label="Attach file" className="absolute bottom-3 right-2 bg-teal-400 rounded-md p-1 text-black">
                        <i className="fas fa-paperclip"></i>
                    </button>
                </div>
                </div>
            </div>
            
            {/* reCAPTCHA and Submit */}
            <div className="flex flex-wrap items-center justify-between gap-8 mt-2">
                <div className="w-[340px] max-w-full">
                    <div className="flex items-center border border-gray-300 bg-white rounded p-4 shadow-sm w-full">
                    {/* Checkbox */}
                    <input
                        type="checkbox"
                        className="w-5 h-5 mr-4 accent-[#5DE0C9] border-gray-400"
                        id="recaptcha"
                    />
                    {/* Label */}
                    <label htmlFor="recaptcha" className="text-base font-serif mr-auto select-none">
                        I&apos;m not a robot
                    </label>
                    {/* reCAPTCHA logo */}
                    <img
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                        alt="reCAPTCHA"
                        className="w-12 h-12 ml-4"
                    />
                </div>
                </div>
                <button
                    type="submit"
                    className="bg-[#5DE0C9] text-black px-20 py-2 rounded-md text-lg font-serif font-normal select-text shadow"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
        </main>
    </BaseLayout>
  );
}
