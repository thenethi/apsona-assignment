import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Note from "./Note";
import Sidebar from "./Sidebar";

function ReminderView() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = Cookies.get("token");
      const response = await fetch(
        "https://apsona-assignment-ahi5.onrender.com/api/notes/reminders",
        {
          headers: { Authorization: token },
        }
      );
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  return (
    <div className="notes-app">
      <Sidebar />
      <div className="notes-grid">
        {notes.map((note) => (
          <Note key={note._id} note={note} setNotes={setNotes} />
        ))}
      </div>
    </div>
  );
}

export default ReminderView;
