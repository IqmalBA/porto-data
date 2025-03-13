import { useState } from "react";
import { useNavigate, useLocation } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const location = useLocation(); // Ambil path saat ini

  // Fungsi untuk menentukan kelas aktif
  const getNavClass = (path) =>
    location.pathname === path
      ? "text-white cursor-pointer"
      : "text-gray-400 hover:text-white cursor-pointer";

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
            onClick={() => nav("/")}
            className={`block px-4 py-2 rounded ${getNavClass("/")}`}
          >
            Home
          </a>
          <a
            onClick={() => nav("/project")}
            className={`block px-4 py-2 rounded ${getNavClass("/project")}`}
          >
            Portofolio
          </a>
          <a
            onClick={() => nav("/skill")}
            className={`block px-4 py-2 rounded ${getNavClass("/skill")}`}
          >
            Skill
          </a>
          <a
            onClick={() => nav("/experience")}
            className={`block px-4 py-2 rounded ${getNavClass("/experience")}`}
          >
            Experience
          </a>
          <a
            onClick={() => nav("/organization")}
            className={`block px-4 py-2 rounded ${getNavClass(
              "/organization"
            )}`}
          >
            Organization
          </a>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a onClick={() => nav("/")} className={getNavClass("/")}>
          Home
        </a>
        <a onClick={() => nav("/project")} className={getNavClass("/project")}>
          Portofolio
        </a>
        <a onClick={() => nav("/skill")} className={getNavClass("/skill")}>
          Skill
        </a>
        <a
          onClick={() => nav("/experience")}
          className={getNavClass("/experience")}
        >
          Experience
        </a>
        <a
          onClick={() => nav("/organization")}
          className={getNavClass("/organization")}
        >
          Organization
        </a>
      </nav>
    </header>
  );
}
