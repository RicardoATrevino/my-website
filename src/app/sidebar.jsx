"use client";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 h-full transition-transform transform  ${isOpen ? styles.open : ""}`}>
      <button onClick={toggleSidebar} className={styles.toggleButton}>
        {isOpen ? "Close" : "Open"} Sidebar
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <a href="#link1">Link 1</a>
            </li>
            <li>
              <a href="#link2">Link 2</a>
            </li>
            <li>
              <a href="#link3">Link 3</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
