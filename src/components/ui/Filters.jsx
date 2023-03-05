import "../../assets/styles/Filter.css";

function Filters() {
  return (
    <div className="filter">
      <button className="filter__button">
        <img
          src="../../icon-filter.svg"
          width="25px"
          height="25px"
          alt="Filter icon"
        />
        Filter
      </button>

      <button className="filter__button">
        <img
          src="../../icon-sort.svg"
          width="25px"
          height="25px"
          alt="Sort icon"
        />
        Sort
      </button>
    </div>
  );
}

export default Filters;
