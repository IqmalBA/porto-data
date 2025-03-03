import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full text-white p-4 flex justify-between items-center relative">
      <h1 className="text-lg">Iqmal Bahrudin</h1>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-400 focus:outline-none"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Dropdown Navigation */}
      {isOpen && (
        <div className="absolute top-12 right-4 bg-gray-800 text-white rounded-lg shadow-lg w-40 p-2 flex flex-col space-y-2 z-50">
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Project
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Skill
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Experience
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Organization
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          Home
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Project
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Skill
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Experience
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          Organization
        </a>
      </nav>
    </header>
  );
}
