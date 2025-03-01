import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log(`Searching for: ${query}`);
    }
  };

  return (
    <div className="fixed top-16 left-0 right-0 bg-white p-4 shadow-md z-20 flex items-center">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border rounded-l-md focus:outline-none"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-pink-500 text-white rounded-r-md">
        <Search className="w-5 h-5" />
      </button>
      <button onClick={onClose} className="ml-4 text-gray-500 hover:text-gray-800">
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchBar;
