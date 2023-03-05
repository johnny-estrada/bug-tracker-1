import "../../assets/styles/TableSearchbar.css";

function TableSearchbar() {
  return (
    <div className="table-searchbar">
      <input type="text" placeholder="Search" className="table-searchbar__input" />
      <button className="table-searchbar__button">
        <img src="../../icon-search.svg" width="20px" height="20px" />
      </button>
    </div>
  );
}

export default TableSearchbar;