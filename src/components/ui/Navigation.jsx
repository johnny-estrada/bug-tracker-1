import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="link active">
        <img
          src="../icon-dashboard.svg"
          width="32px"
          height="32px"
          alt="Dashboard icon"
        />
        Dashboard
      </Link>
      <Link to="/projects" className="link">
        <img
          src="../icon-list.png"
          width="32px"
          height="32px"
          alt="List icon"
        />
        Projects
      </Link>
      <Link to="/issues" className="link">
        <img src="../icon-issues.png" width="32px" height="32px" />
        Issues
      </Link>
      <Link to="/roles" className="link">
        <img src="../icon-roles.png" width="32px" height="32px" />
        Manage Roles
      </Link>
      <Link to="/users" className="link">
        <img src="../icon-users.png" width="32px" height="32px" />
        Manage Users
      </Link>
    </nav>
  );
}

export default Navigation;
