import './Logo.css'

function Logo() {
  return (
    <>
      <a href="#" className="logo-container">
        <img
          src="../logo.svg"
          className="nav__logo"
          alt="Issue tracker logo"
          width="30px"
          height="30px"
        />
        <span className="logo-title">Bug Tracker</span>
      </a>
    </>
  );
}

export default Logo;
