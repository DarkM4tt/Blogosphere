"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../styles/searchBar.module.css";
import { useTheme } from "../context/ThemeContext";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const { isDark, toggleTheme } = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex py-2 md:py-8 w-[60%] md:w-[40%]">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by title, desc or author"
        className={`p-2 border w-full border-gray-300 rounded-l-lg focus:outline-none ${isDark ? "text-black" : ""}`}
      />
      <button
        type="submit"
        className="py-2 px-2 md:px-4 bg-[#21243D] text-white rounded-r-lg"
      >
        <FaSearch />
      </button>
    </form>
  );
}
