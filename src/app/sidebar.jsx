"use client";
import { useState } from "react";

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
        {isOpen ? " ≡ " : " Projects "}
      </button>
      {isOpen && (
        <nav className="mt-16">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard/project1" className="block px-4 py-2 hover:bg-gray-700">
                Project: 1
              </a>
            </li>
            <li>
              <a href="/dashboard/project2" className="block px-4 py-2 hover:bg-gray-700">
                Project: 2
              </a>
            </li>
            <li>
              <a href="/dashboard/project3" className="block px-4 py-2 hover:bg-gray-700">
                Project: 3
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
