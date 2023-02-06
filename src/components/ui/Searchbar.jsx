import '../../assets/styles/components/ui/Searchbar.css';

function Searchbar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search" className="search__input" />
      <img src="../../icon-search.svg" width='20px' height='20px' />
    </div>
  );
}

export default Searchbar;
