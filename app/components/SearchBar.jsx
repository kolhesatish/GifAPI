import React from "react";

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="search" className="block text-lg font-semibold mb-2">
        Search:
      </label>
      <div className="flex items-center">
        <input
          type="text"
          id="search"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 rounded-md w-full mr-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSearchChange}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
