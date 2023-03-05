import "../../assets/styles/Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <form className="form">
          <h2 className="form-title">Create project</h2>
          <label className="form-label">Name*</label>
          <input className="input-md" type="text" placeholder="e.g. Website Redesign" />
          <label className="form-label">Key*</label>
          <input className="input-md" type="text" placeholder="e.g. WBRE" />
          <label className="form-label">Description</label>
          <input className="input-lg" type="text" />  
        </form>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="secondary-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="primary-btn"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
