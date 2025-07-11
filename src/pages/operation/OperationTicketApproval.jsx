import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import TicketModal from "../../components/TicketModal";


export default function OperationTicketApproval() {
    const [tickets, setTickets] = useState([]);
    const [modalTicket, setModalTicket] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/tickets.json")
            .then((res) => res.json())
            .then((data) => setTickets(data));
    }, []);

    // Approve handler
    const handleApprove = (ticketNo) => {
        const updatedTickets = tickets.map((ticket) => {
            if (ticket.ticketNo === ticketNo) {
                return { ...ticket, status: "Approved" };
            }
            return ticket;
        });

        setTickets(updatedTickets);
        alert(`Ticket ${ticketNo} approved!`);
    };

    // Reject handler
    const handleReject = (ticketNo) => {
        const updatedTickets = tickets.map((ticket) => {
            if (ticket.ticketNo === ticketNo) {
                return { ...ticket, status: "Rejected" };
            }
            return ticket;
        });

        setTickets(updatedTickets);
        alert(`Ticket ${ticketNo} rejected!`);
    };

    // Assign handler
    const handleAssign = (ticketNo, agent) => {
        const updatedTickets = tickets.map((ticket) => {
            if (ticket.ticketNo === ticketNo) {
                return { ...ticket, assignedTo: agent };
            }
            return ticket;
        });

        setTickets(updatedTickets);
    };

    // Filter tickets by search
    const filteredTickets = tickets.filter(
        (ticket) =>
            ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
            ticket.ticketNo.toString().includes(search)
    );

    return (
        <BaseLayout>
            <main className="p-6 w-full font-serif bg-white" style={{zoom : 1.25}}>
                <h2 className="text-2xl mb-6 font-semibold text-center select-none">Ticket Approval</h2>
                <div className="mb-4 flex items-center gap-4 justify-between flex-wrap">
                    <div className="relative max-w-xs w-full">
                        <input
                            type="text"
                            placeholder="Find ticket"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-3 pr-10 py-2 rounded-md bg-gray-300 text-gray-700 w-full"
                        />
                        <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"></i>
                    </div>

                    <div className="flex items-center text-sm space-x-2">
                        <span>Show:</span>
                        <select className="bg-gray-300 text-black rounded px-2 py-1 appearance-none pr-6" defaultValue="10">
                            <option>10</option>
                        </select>
                        <span>Entries</span>
                    </div>
                </div>

                <div className="overflow-x-auto border border-gray-400">
                    <table className="w-full text-sm min-w-[900px] border-collapse">
                        <thead className="bg-gray-100">
                            <tr className="border-b border-gray-300">
                                <th className="text-left py-2 px-4 font-semibold">Ticket No.</th>
                                <th className="text-left py-2 px-4 font-semibold">Subject</th>
                                <th className="text-left py-2 px-4 font-semibold">Category</th>
                                <th className="text-left py-2 px-4 font-semibold">Priority</th>
                                <th className="text-left py-2 px-4 font-semibold">Date</th>
                                <th className="text-left py-2 px-4 font-semibold">Action</th>
                                <th className="text-left py-2 px-4 font-semibold">Assign to</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTickets.map((ticket, idx) => (
                                <tr key={ticket.ticketNo} className={idx % 2 === 0 ? "bg-gray-200" : ""}>
                                    <td className="py-2 px-4">
                                        <button
                                            className="text-blue-600 underline cursor-pointer"
                                            onClick={() => setModalTicket(ticket)}
                                        >
                                            {ticket.ticketNo}
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">{ticket.subject}</td>
                                    <td className="py-2 px-4">{ticket.category}</td>
                                    <td className="py-2 px-4">{ticket.priority}</td>
                                    <td className="py-2 px-4">{ticket.date}</td>
                                    <td className="py-2 px-4 space-x-2 text-lg">
                                        <button
                                            className="text-green-700 hover:scale-110"
                                            onClick={() => handleApprove(ticket.ticketNo)}
                                            title="Approve"
                                            disabled={ticket.status === "Approved"}
                                        >
                                            <i className="fas fa-check-circle"></i>
                                        </button>
                                        <button
                                            className="text-red-700 hover:scale-110"
                                            onClick={() => handleReject(ticket.ticketNo)}
                                            title="Reject"
                                            disabled={ticket.status === "Rejected"}
                                        >
                                            <i className="fas fa-times-circle"></i>
                                        </button>
                                    </td>
                                    <td className="py-2 px-4">
                                        <select
                                            className="bg-gray-300 px-2 py-1 rounded"
                                            value={ticket.assignedTo || "Select"}
                                            onChange={e => handleAssign(ticket.ticketNo, e.target.value)}
                                            disabled={["Approved", "Rejected"].includes(ticket.status)}
                                        >
                                            <option>Select</option>
                                            <option>Agent A</option>
                                            <option>Agent B</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                    <div>
                        Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="cursor-pointer">&laquo;&laquo;</span>
                        <span className="cursor-pointer">1</span>
                        <span className="cursor-pointer">&raquo;&raquo;</span>
                    </div>
                </div>

                {/* Modal */}
                {modalTicket && (
                    <TicketModal ticket={modalTicket} onClose={() => setModalTicket(null)} />
                )}
            </main>
        </BaseLayout>
    );
}
