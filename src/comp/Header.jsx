import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation(); // Hämta aktuell path

  return (
    <header className="header">
      <nav className="header--nav" aria-label="Main navigation">
        <ul>
          <li>
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              aria-current={
                location.pathname === "/settings" ? "page" : undefined
              }
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
