import { NavLink } from "react-router-dom";

export default function ResourceHubNavbar() {
  return (
    <header className="header">
      <div className="container header-bar">
        <NavLink to="/" className="logo">
          Sayreville Community Resource Hub
        </NavLink>

        <nav className="nav">
          <NavLink to="/" className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink to="/directory" className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Directory
          </NavLink>

          <NavLink to="/references" className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            References
          </NavLink>
        </nav>
      </div>
    </header>
  );
}