"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/header.module.css";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="flex justify-end items-center p-5 md:px-10">
      <nav className="hidden md:flex gap-[40px] font-bold">
        <a href="#" className="text-[#FF6464]">
          Blog
        </a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          {isDark ? "🌞" : "🌙"}
        </button>
      </nav>
      <FaBars
        size={24}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden"
      />
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 right-0 bg-white p-4">
          <nav className="flex gap-[40px] font-bold">
            <a href="#" className="text-[#FF6464]">
              Blog
            </a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
