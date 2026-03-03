export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 text-white justify-between items-center h-16 px-4">
      <a href="/" className="text-3xl no-underline text-inherit">
        Plum
      </a>
      <ul className="m-0 p-0 list-none flex gap-4">
        <li>
          <a href="/about" className="text-inherit no-underline px-4">
            About Us
          </a>
        </li>
        <li>
          <a href="/contact" className="text-inherit no-underline px-4">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
