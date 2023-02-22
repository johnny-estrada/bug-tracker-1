import { Link } from "react-router-dom";
import "../../assets/styles/Links.css";

function Links() {
  return (
    <>
      <Link to="/" className="link" role="link">
        <img
          src="../icon-dashboard.svg"
          width="32px"
          height="32px"
          alt="Dashboard icon"
        />
        Dashboard
      </Link>
      <Link to="/projects" className="link link-active" role="link">
        <img
          src="../icon-projects.svg"
          width="32px"
          height="32px"
          alt="List icon"
        />
        Projects
      </Link>
      <Link to="/issues" className="link" role="link">
        <img
          src="../icon-issues.svg"
          width="32px"
          height="32px"
          alt="Issues icon"
        />
        Issues
      </Link>
      <Link to="/roles" className="link" role="link">
        <img
          src="../icon-settings.svg"
          width="32px"
          height="32px"
          alt="Settings icon"
        />
        Admin
      </Link>
    </>
  );
}

export default Links;
