import "./Searchbar.css";

function Searchbar() {
  return (
    <form className="searchbar">
      <input className="searchbar__input" type="text" placeholder="Search" />
      <button className="searchbar__button">
        <img src="../../icon-search.svg" width="20px" height="20px" />
      </button>
    </form>
  );
}

export default Searchbar;
