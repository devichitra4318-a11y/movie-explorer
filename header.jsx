import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        🎬 Movie Explorer
      </div>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;