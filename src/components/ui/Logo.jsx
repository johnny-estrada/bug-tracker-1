import { Link } from "react-router-dom";
import "../../assets/styles/Logo.css";

function Logo() {
  return (
    <>
      <Link to="/" className="logo">
        <img
          className="logo__img"
          src="../../logo-bars.svg"
          alt="Logo"
          width="30px"
          height="30px"
        />
        <span className="logo__text">Issue Tracker</span>
      </Link>
    </>
  );
}

export default Logo;
