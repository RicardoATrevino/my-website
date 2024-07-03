"use client";
import { useState } from "react";
import { links } from ".//components/links";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 h-full transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-gray-800 text-white w-64`}
    >
      <button onClick={toggleSidebar} className="absolute top-4 left-64 bg-gray-700 text-white p-2">
        {isOpen ? " == " : " =="}
      </button>
      {isOpen && (
        <nav className="mt-16">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="block px-4 py-2 hover:bg-gray-700">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
