import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Sidebar from "./Sidebar";
import Note from "./Note";
import CreateNote from "./CreateNote";
import SearchBar from "./SearchBar";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const token = Cookies.get("token");
      const response = await fetch(
        "https://apsona-assignment-ahi5.onrender.com/api/notes",
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
      <div className="main-content">
        <SearchBar setNotes={setNotes} />
        <CreateNote setNotes={setNotes} />
        <div className="notes-grid">
          {notes.map((note) => (
            <Note key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
