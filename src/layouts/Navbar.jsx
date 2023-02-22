import Searchbar from "../components/ui/Searchbar";
import Settings from "../components/ui/Settings";
import Notifications from "../components/ui/Button";
import Avatar from "../components/ui/Avatar";
import "../assets/styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="navbar__left">
        <Searchbar />
      </div>
      <div className="navbar__right">
        <Settings />
        <Notifications />
        <Avatar />
      </div>
    </header>
  );
}

export default Navbar;
