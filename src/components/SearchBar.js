import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchText);
    setSearchText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by name or Pokédex number"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  ); 
}

export default SearchBar;