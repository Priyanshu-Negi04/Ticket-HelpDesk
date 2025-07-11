import React, { useState } from "react";
import BaseLayout from "../../components/BaseLayout";

const tabs = ["User", "Operation Team", "Technical Support"];

const dummyData = [
  { id: "ABC123", name: "Abu", department: "IT", speciality: "Software" },
  { id: "ABC124", name: "Ahmad", department: "Software", speciality: "Networking" },
  { id: "ABC125", name: "Ali", department: "Technical", speciality: "Hardware" },
];

export default function AdminDatabase() {
    const [activeTab, setActiveTab] = useState("User");
    const [search, setSearch] = useState("");
    const [entries, setEntries] = useState(10);

    const filteredData = dummyData.filter((item) =>
        item.id.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <BaseLayout>
            <main className="p-6 w-full font-serif bg-white" style={{zoom : 1.25}}>
                <h2 className="text-2xl font-semibold mb-6 text-center">Database</h2>
                {/* Tabs */}
                <div className="flex mb-4 border rounded overflow-hidden w-max mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 font-medium border-r last:border-r-0 transition ${
                                activeTab === tab
                                ? "bg-teal-400 text-white"
                                : "bg-white text-black hover:bg-gray-100"
                            }`}
                            >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search & Entries Control */}
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                    <div className="flex items-center">
                        <label className="mr-2">Show:</label>
                        <select
                            value={entries}
                            onChange={(e) => setEntries(Number(e.target.value))}
                            className="border rounded px-2 py-1"
                            >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                        <span className="ml-2">Entries</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Find staff"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border rounded px-3 py-1"
                            />
                        <button className="bg-gray-300 px-3 py-1 rounded">🔍</button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-gray-300 rounded" >
                    <table className="w-full text-sm text-left border-collapse min-w-[700px]">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-2 border">
                                <input type="checkbox" />
                                </th>
                                <th className="p-2 border">Staff ID</th>
                                <th className="p-2 border">Name</th>
                                <th className="p-2 border">Department</th>
                                <th className="p-2 border">Speciality</th>
                                <th className="p-2 border">Setting</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.slice(0, entries).map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="p-2 border">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-2 border">{item.id}</td>
                                    <td className="p-2 border">{item.name}</td>
                                    <td className="p-2 border">{item.department}</td>
                                    <td className="p-2 border">{item.speciality}</td>
                                    <td className="p-2 border flex items-center gap-3">
                                        <i
                                        className="fas fa-pen text-gray-600 hover:text-blue-500 cursor-pointer"
                                        title="Edit"
                                        ></i>
                                        <i
                                        className="fas fa-trash text-gray-600 hover:text-red-500 cursor-pointer"
                                        title="Delete"
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                            {filteredData.length === 0 && (
                                <tr>
                                <td colSpan={6} className="p-4 text-center text-gray-400">
                                    No records found.
                                </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="mt-4 flex justify-between text-sm">
                    <div>
                        Showing 1 to {Math.min(filteredData.length, entries)} of {filteredData.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="cursor-pointer hover:text-blue-600">&laquo;</span>
                        <span className="mx-2">1</span>
                        <span className="cursor-pointer hover:text-blue-600">&raquo;</span>
                    </div>
                </div>
            </main>
        </BaseLayout>
  );
}
