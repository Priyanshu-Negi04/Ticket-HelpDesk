import React, { useState } from "react";

export default function UpdateTicketModal({ ticket, onClose, onSubmit }) {
  const [teamName, setTeamName] = useState("");
  const [teamMember, setTeamMember] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ticketNo: ticket.ticketNo, teamName, teamMember, remark });
  };

  if (!ticket) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <form
        className="bg-white border border-blue-500 rounded shadow-lg w-11/12 max-w-lg p-6 relative"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center font-serif text-lg mb-6">Update Ticket</h3>
        <div className="font-serif text-sm space-y-4 max-w-md mx-auto">
          <div>
            <label className="font-semibold">Ticket No:</label>
            <input
              className="ml-2 px-2 py-1 border rounded bg-gray-200"
              value={ticket.ticketNo}
              readOnly
            />
          </div>
          <div>
            <label className="font-semibold">Team Name:</label>
            <input
              className="ml-2 px-2 py-1 border rounded"
              value={teamName}
              onChange={e => setTeamName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-semibold">Team Member:</label>
            <input
              className="ml-2 px-2 py-1 border rounded"
              value={teamMember}
              onChange={e => setTeamMember(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="font-semibold">Remark:</label>
            <textarea
              className="ml-2 px-2 py-1 border rounded w-full"
              value={remark}
              onChange={e => setRemark(e.target.value)}
              rows={2}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-8 py-2 font-serif"
            type="submit"
          >
            Update Ticket
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black rounded-md px-8 py-2 font-serif"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
