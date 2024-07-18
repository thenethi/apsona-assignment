import React, { useState } from "react";
import Cookies from "js-cookie";

function SearchBar({ setNotes }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    const response = await fetch(
      `https://apsona-assignment-ahi5.onrender.com/api/notes/search?query=${query}`,
      {
        headers: { Authorization: token },
      }
    );
    const data = await response.json();
    setNotes(data);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search notes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
