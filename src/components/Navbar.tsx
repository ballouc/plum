import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 text-white justify-between items-center h-16 px-4">
      <Link to="/" className="text-3xl no-underline text-inherit">
        Plum
      </Link>
      <ul className="m-0 p-0 list-none flex gap-4">
        <li>
          <Link to="/about" className="text-inherit no-underline px-4">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-inherit no-underline px-4">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
