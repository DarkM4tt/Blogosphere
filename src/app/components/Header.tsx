import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/header.module.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.active}>
          Blog
        </a>
        <a href="#">Works</a>
        <a href="#">Contact</a>
      </nav>
      <FaBars
        size={24}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden"
      />
      {isMobileMenuOpen && (
        <div className="fixed top-0 right-0 bg-white shadow-lg p-4">
          <nav className={styles.nav}>
            <a href="#" className={styles.active}>
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
