import React, { useState } from "react";
import Cookies from "js-cookie";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const [reminder, setReminder] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const response = await fetch(
      "https://apsona-assignment-ahi5.onrender.com/api/notes",
      {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, tags, color, reminder }),
      }
    );

    if (response.ok) {
      const newNote = await response.json();
      setNotes((prevNotes) => [newNote, ...prevNotes]);
      setTitle("");
      setContent("");
      setTags([]);
      setColor("#ffffff");
      setReminder("");
    } else {
      alert("Failed to create note");
    }
  };

  return (
    <div className="create-note">
      <form onSubmit={handleCreate}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags.join(",")}
          onChange={(e) =>
            setTags(e.target.value.split(",").map((tag) => tag.trim()))
          }
        />
        <p>Choose color:</p>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="datetime-local"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button type="submit">Create Note</button>
      </form>
    </div>
  );
};

export default CreateNote;
