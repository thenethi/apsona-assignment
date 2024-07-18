import React from "react";
import { FaTrash, FaArchive, FaEdit } from "react-icons/fa";
import Cookies from "js-cookie";

function Note({ note, setNotes }) {
  const handleDelete = async () => {
    const token = Cookies.get("token");
    await fetch(
      `https://apsona-assignment-ahi5.onrender.com/api/notes/${note._id}`,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));
  };

  const handleArchive = async () => {
    const token = Cookies.get("token");
    await fetch(
      `https://apsona-assignment-ahi5.onrender.com/api/notes/${note._id}`,
      {
        method: "PUT",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isArchived: !note.isArchived }),
      }
    );
    setNotes((prevNotes) =>
      prevNotes.map((n) =>
        n._id === note._id ? { ...n, isArchived: !n.isArchived } : n
      )
    );
  };

  return (
    <div className="note" style={{ background: note.color }}>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <FaEdit className="icon" />
        <FaTrash onClick={handleDelete} className="icon" />
        <FaArchive onClick={handleArchive} className="icon" />
      </div>
    </div>
  );
}

export default Note;
