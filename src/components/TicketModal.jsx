import React from "react";

export default function TicketModal({ ticket, onClose }) {
  if (!ticket) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white border border-blue-500 rounded shadow-lg w-11/12 max-w-lg p-6 relative" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h3 id="modal-title" className="text-center font-serif text-lg mb-6">
          Ticket Details
        </h3>
        <div className="font-serif text-sm space-y-1 max-w-md mx-auto">
          <p><span className="font-semibold">Ticket No:</span> {ticket.ticketNo}</p>
          <p><span className="font-semibold">Date:</span> {ticket.date}</p>
          <p><span className="font-semibold">Name:</span> {ticket.name}</p>
          <p><span className="font-semibold">Dept:</span> {ticket.dept}</p>
          <br />
          <p><span className="font-semibold">Title:</span> {ticket.title}</p>
          <p><span className="font-semibold">Description:</span> {ticket.description}</p>
          <p><span className="font-semibold">Category:</span> {ticket.category}</p>
          <p><span className="font-semibold">Type:</span> {ticket.type}</p>
          <p><span className="font-semibold">Priority:</span> {ticket.priority}</p>
          <p><span className="font-semibold">Status:</span> {ticket.status}</p>
          <p><span className="font-semibold">Attachment:</span> {ticket.attachment || "None"}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-green-400 text-black rounded-md px-6 py-2 font-serif" type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
