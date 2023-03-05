import '../../assets/styles/Pagination.css'

function Pagination() {
  return (
    <div className="pagination-container">
          <div>
            <p className="pagination-text">Showing 1 of 1</p>
          </div>

          <nav class="pagination">
            <div class="pagination__item pagination__item--active">
              1
            </div>
            <div class="pagination__item">2</div>
            <div class="pagination__item">3</div>
          </nav>
        </div>
  )
}

export default Pagination