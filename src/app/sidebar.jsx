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
          <li>
            <a href="/" className="block px-4 py-2 hover:bg-gray-700">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="/MyProjects/intro" className="block px-4 py-2 hover:bg-gray-700">
              {" "}
              Introduction{" "}
            </a>
          </li>

          <li>
            <a href="/MyProjects/project1" className="block px-4 py-2 hover:bg-gray-700">
              Project: 1
            </a>
          </li>
          <li>
            <a href="/MyProjects/project2" className="block px-4 py-2 hover:bg-gray-700">
              Project: 2
            </a>
          </li>
          <li>
            <a href="/MyProjects/project3" className="block px-4 py-2 hover:bg-gray-700">
              Project: 3
            </a>
          </li>
        </nav>
      )}
    </div>
  );
}
