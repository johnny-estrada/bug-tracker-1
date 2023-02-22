import "../../assets/styles/Button.css";

function Button() {
  return (
    <>
      <button className="button">
        <img
          className="button__img"
          src="../icon-notification.svg"
          alt="Notification icon"
          width="30px"
          height="30px"
        />
      </button>
    </>
  );
}

export default Button;
