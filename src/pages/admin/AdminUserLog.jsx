import React, { useState, useEffect } from "react";
import BaseLayout from "../../components/baseLayout";

const DUMMY_LOGS = [
    {
        no: 1,
        signIn: "130821 / 0800",
        staffId: "XL000001",
        department: "OT",
        activity: "Create Team",
        signOut: "130821 / 0815",
    },
    {
        no: 2,
        signIn: "130821 / 0805",
        staffId: "",
        department: "",
        activity: "",
        signOut: "130821 / 0810",
    },
    { no: 3 }, { no: 4 }, { no: 5 },
];

export default function AdminUserLog() {
    const [logs, setLogs] = useState([]);
    const [showEntries, setShowEntries] = useState(10);
    
    useEffect(() => {
        setLogs(DUMMY_LOGS);
    }, []);


    const pageLogs = logs.slice(0, showEntries);

  return (
        <BaseLayout>
            <main className="p-6 w-full font-serif bg-white" style={{zoom : 1.25}}>
                <h2 className="text-2xl font-semibold mb-6 text-center">User Log History</h2>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
                    {/* Show Entries */}
                    <div className="flex items-center text-sm space-x-2">
                        <span>Show:</span>
                        <select
                        className="bg-gray-200 text-black rounded px-2 py-1 appearance-none pr-6"
                        value={showEntries}
                        onChange={(e) => setShowEntries(Number(e.target.value))}
                        >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        </select>
                        <span>Entries</span>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-300 rounded">
                    <table className="w-full text-sm text-left border-collapse min-w-[800px]">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-2 border">No.</th>
                                <th className="px-4 py-2 border">Date / Sign In Time</th>
                                <th className="px-4 py-2 border">Staff ID</th>
                                <th className="px-4 py-2 border">Department</th>
                                <th className="px-4 py-2 border">Activity</th>
                                <th className="px-4 py-2 border">Date / Sign Out Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageLogs.length > 0 ? (
                                pageLogs.map((log, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-300"}>
                                        <td className="px-4 py-2 border">{log.no || ""}</td>
                                        <td className="px-4 py-2 border">{log.signIn || ""}</td>
                                        <td className="px-4 py-2 border">{log.staffId || ""}</td>
                                        <td className="px-4 py-2 border">{log.department || ""}</td>
                                        <td className="px-4 py-2 border">{log.activity || ""}</td>
                                        <td className="px-4 py-2 border">{log.signOut || ""}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                                    No log records found.
                                </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Entries Info & Pagination */}
                <div className="mt-4 flex justify-between text-sm">
                <div>
                    Showing {pageLogs.length > 0 ? 1 : 0} to {pageLogs.length} of {pageLogs.length} entries
                </div>
                <div className="flex items-center space-x-2">
                    <span className="cursor-pointer hover:text-blue-600">&laquo;</span>
                    <span className="mx-1 cursor-pointer">1</span>
                    <span className="cursor-pointer hover:text-blue-600">&raquo;</span>
                </div>
                </div>
            </main>
        </BaseLayout>
    );
}
