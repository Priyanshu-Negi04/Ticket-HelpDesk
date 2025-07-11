import React from 'react';

export default Performance = ({
                                        heading = "Performance",
                                        profileLabel = "Technical Support Name",
                                        contact = "0123456789",
                                        department = "ABC",
                                        totalTickets = 5,
                                        solved = 2,
                                        pending = 1,
                                        inProgress = 2,
                                        rating = 4,
                                        teamList = teamMembers,
                                    }) => {
  
return (
        <div className="p-6 w-full" style={{zoom : 1.25}}>
            <h2 className="text-2xl font-semibold mb-6">{heading}</h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side */}
                <div className="flex flex-col gap-4 w-full lg:w-2/3">
                    {/* Profile Box */}
                    <div className="flex items-center gap-4 bg-gray-100 p-4 rounded">
                        <div className="bg-gray-300 p-6 rounded w-24 h-24 flex justify-center items-center" style={{zoom : 2}}>
                            <i className="fas fa-user text-4xl"></i>
                        </div>
                        <div style={{zoom : 1.3}}>
                            <h3 className="text-xl font-medium">{profileLabel}</h3>
                            <div className="bg-gray-200 px-4 py-2 mt-2 rounded">
                                <p className="text-sm">Contact No: {contact}</p>
                                <p className="text-sm">Department: {department}</p>
                            </div>
                        </div>
                    </div>

                    {/* Ticket Stats Box */}
                    <div className="bg-gray-100 p-4 rounded border border-blue-500" style={{zoom : 1.25}}>
                        <h4 className="text-lg font-semibold mb-2">
                        Total Ticket Handle <span className="float-right">{totalTickets}</span>
                        </h4>
                        <div className="text-sm space-y-1">
                            <p>Ticket Solved <span className="float-right">{solved}</span></p>
                            <p>Ticket Pending <span className="float-right">{pending}</span></p>
                            <p>Ticket in progress <span className="float-right">{inProgress}</span></p>
                            <p className="flex items-center">Rating
                                <span className="ml-2 text-yellow-500">
                                {[...Array(rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                                {[...Array(5 - rating)].map((_, i) => <i key={i} className="far fa-star"></i>)}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Team List */}
                <div className="w-full lg:w-1/3 flex flex-col gap-4">
                    {teamList.map((member, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded">
                        <div className="flex items-center gap-4">
                            <div className="bg-gray-300 p-4 rounded-full">
                            <i className="fas fa-user text-xl"></i>
                            </div>
                            <p>{member.name}</p>
                        </div>
                        <button className="bg-teal-400 text-white px-4 py-1 rounded hover:bg-teal-500 transition">
                            View details
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};