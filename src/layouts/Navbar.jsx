import Searchbar from "../components/ui/Searchbar";
import Logo from "../components/ui/Logo";
import NotificationButton from "../components/ui/NotificationButton";
import Avatar from "../components/ui/Avatar";
import "../assets/styles/layouts/Navbar.css";

function Navbar() {
  return (
    <header className="header" role="banner">
      <section className="col-left">
        <Logo />
      </section>

      <section className="col-right">
        <Searchbar />
        <NotificationButton />
        <Avatar />
      </section>
    </header>
  );
}

export default Navbar;
