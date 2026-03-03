import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Plum
      </a>
      <ul>
        <li>
          <a href="../about">About Us</a>
        </li>
        <li>
          <a href="../contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
