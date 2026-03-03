import { useState, useEffect, type ReactNode } from "react";
import { Link } from "react-router";
import logoText from "../assets/plum_logo_text.png";

function NavLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm md:text-base text-inherit no-underline px-2 md:px-4">
        {children}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 px-4 md:px-6 text-white transition-all duration-300 ${
        scrolled
          ? "bg-gray-800 border border-transparent"
          : "mx-3 md:mx-4 mt-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      }`}
    >
      <Link to="/" className="no-underline text-inherit">
        <img src={logoText} className="h-8 md:h-10" />
      </Link>
      <ul className="m-0 p-0 list-none flex gap-1 md:gap-4">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
}
