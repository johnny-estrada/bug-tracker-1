import "./Navbar.css";

function Navbar(props) {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__left">{props.searchbar}</div>
      <div className="navbar__right">
        {props.notification}
        {props.avatar}
      </div>
    </header>
  );
}

export default Navbar;
