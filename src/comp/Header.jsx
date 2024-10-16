import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <nav className="header--nav">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}
