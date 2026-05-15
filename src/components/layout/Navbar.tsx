import React from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Menu", path: "/menu" },
    { title: "Gallery", path: "/gallery" },
    { title: "Reservation", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-senja-bg/80 backdrop-blur-md border-senja-brown/10">
      <div className="flex justify-between items-center px-12 mx-auto max-w-7xl h-24">
        <NavLink
          to="/"
          className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-senja-brown"
        >
          DAPUR SENJA
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden gap-10 items-center md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[10px] font-sans uppercase tracking-[0.2em] transition-all hover:opacity-100 ${isActive
                  ? "text-senja-brown opacity-100"
                  : "text-senja-brown opacity-60"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="py-2 px-6 font-sans uppercase border transition-all hover:text-white border-senja-brown text-[10px] tracking-[0.2em] hover:bg-senja-brown"
          >
            Book a Table
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-senja-brown"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="overflow-hidden border-b md:hidden bg-senja-bg border-senja-cream/20"
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-lg font-serif transition-colors ${isActive ? "text-senja-orange" : "text-senja-brown"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
