import React, { useEffect, useState } from "react";
import TicketModal from "./TicketModal";
import UpdateTicketModal from "./UpdateTicketModal";


export default function CommonMyTicket() {
    const [tickets, setTickets] = useState([]);
    const [modalTicket, setModalTicket] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [search, setSearch] = useState("");


    useEffect(() => {
      fetch("/tickets.json")
        .then((res) => res.json())
        .then((data) => setTickets(data));
    }, []);

    // Filter tickets by search text
    const filteredTickets = tickets.filter(
      (ticket) =>
        ticket.subject.toLowerCase().includes(search.toLowerCase()) ||
        ticket.ticketNo.toString().includes(search)
    );

  return (
      <main className="flex-1 p-6 w-full max-w-full font-serif bg-white relative" style={{zoom : 1.25}}>
        <h2 className="text-center text-2xl font-serif mb-6 select-none">My Ticket</h2>
        <section className="border border-blue-600 p-4 w-full max-w-full mx-auto overflow-x-auto">
          {/* Search Bar */}
          <div className="mb-4">
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Find ticket"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-3 pr-10 py-2 rounded-md bg-gray-300 text-gray-700 w-full"
              />
              <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-700 text-lg pointer-events-none"></i>
            </div>
          </div>

          {/* Entries Dropdown */}
          <div className="flex items-center space-x-1 text-base select-none mb-4">
            <span>Show:</span>
            <select className="bg-gray-300 text-black rounded px-2 py-1 appearance-none pr-8" defaultValue="10">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>Entries</span>
          </div>

          {/* Table */}
          <table className="w-full border-collapse text-sm min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 px-4 font-semibold">Ticket No.</th>
                <th className="text-left py-2 px-4 font-semibold">Subject</th>
                <th className="text-left py-2 px-4 font-semibold">Category</th>
                <th className="text-left py-2 px-4 font-semibold">Priority</th>
                <th className="text-left py-2 px-4 font-semibold">Date</th>
                <th className="text-left py-2 px-4 font-semibold">Status</th>
                <th className="text-left py-2 px-4 font-semibold">Person in charge</th>
                <th className="text-left py-2 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((ticket, idx) => (
                <tr key={ticket.ticketNo} className={idx % 2 === 0 ? "bg-gray-200" : ""}>
                  <td className="py-2 px-4">
                    <button
                        className="text-blue-600 underline cursor-pointer"
                        onClick={() => {
                          setModalTicket(ticket);
                          setShowUpdateModal(false);
                        }}
                    >
                        {ticket.ticketNo}
                    </button>
                  </td>
                  <td className="py-2 px-4">{ticket.subject}</td>
                  <td className="py-2 px-4">{ticket.category}</td>
                  <td className="py-2 px-4">{ticket.priority}</td>
                  <td className="py-2 px-4">{ticket.date}</td>
                  <td className="py-2 px-4">
                  <span
                    className="inline-block rounded px-3 py-1 text-xs"
                    style={{
                      backgroundColor: ticket.statusColor,
                      color: ticket.status === "On hold" || ticket.status === "Closed" ? "#fff" : "#000",
                    }}
                  >
                    {ticket.status}
                  </span>
                  </td>
                  <td className="py-2 px-4">{ticket.personInCharge || "-"}</td>
                  <td className="py-2 px-4">
                    <i className="fas fa-file-signature cursor-pointer mr-2" title="Edit"></i>
                    <i className="fas fa-user-plus cursor-pointer mr-2" title="Add User"></i>
                    <i className="fas fa-download cursor-pointer" title="Download"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="mt-4 flex justify-between text-sm">
            <div>
              Showing 1 to {filteredTickets.length} of {filteredTickets.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <span className="cursor-pointer">&laquo;&laquo;</span>
              <span className="mx-1 cursor-pointer">1</span>
              <span className="cursor-pointer">&raquo;&raquo;</span>
            </div>
          </div>
        </section>

        {/* Ticket Details Modal */}
        {modalTicket && !showUpdateModal && (
          <TicketModal
            ticket={modalTicket}
            onClose={() => setModalTicket(null)}
            showUpdate={true}
            onUpdate={() => setShowUpdateModal(true)}
          />
        )}

        {/* Close Ticket Modal */}
        {modalTicket && showUpdateModal && (
          <UpdateTicketModal
            ticket={modalTicket}
            onClose={() => setShowUpdateModal(false)}
            onSubmit={(formData) => {
              alert("Ticket closed: " + JSON.stringify(formData, null, 2));
              setShowUpdateModal(false);
              setModalTicket(null);
            }}
          />
        )}
      </main>
  );
}
