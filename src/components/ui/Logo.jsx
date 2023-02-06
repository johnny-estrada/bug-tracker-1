import '../../assets/styles/components/ui/Logo.css'

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
        <h1 className="nav__logo-title">Bug Tracker</h1>
      </a>

      <h2 className="nav__output">Welcome, Johnny!</h2>
    </>
  );
}

export default Logo;
