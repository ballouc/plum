export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Plum
      </a>
      <ul>
        <li>
          <a href="../About.tsx">About</a>
        </li>
        <li>
          <a href="../Contact.tsx">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
