import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Note from "./Note";
import Sidebar from "./Sidebar";

function TrashedNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = Cookies.get("token");
      const response = await fetch(
        "https://apsona-assignment-ahi5.onrender.com/api/notes/trashed",
        {
          headers: { Authorization: token },
        }
      );
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  const handleEmptyTrash = async () => {
    const token = Cookies.get("token");
    const response = await fetch(
      "https://apsona-assignment-ahi5.onrender.com/api/notes/trashed/empty",
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );

    if (response.ok) {
      setNotes([]);
    } else {
      alert("Failed to empty trash");
    }
  };

  return (
    <div className="notes-app">
      <Sidebar />
      <div className="main-content">
        <button className="empty-trash-btn" onClick={handleEmptyTrash}>
          Empty Trash Now
        </button>
        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrashedNotes;
