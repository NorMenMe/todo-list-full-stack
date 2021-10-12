import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header>
      <Link to="/" className="nav-link">
        <h3 className="logo">Todo List App</h3>
      </Link>
      <nav>
        <Link to="/signin" className="nav-link">
          {location.pathname === "/" || location.pathname === "/register"
            ? "Log in"
            : null}
          {location.pathname === "/signin" && "Log in"}
        </Link>
        <Link to="/" className="nav-link">
          {location.pathname === "/dashboard" ? "Log out" : null}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
