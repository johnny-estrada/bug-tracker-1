import "../../assets/styles/Button.css";

function Settings() {
  return (
    <>
      <button className="button">
        <img
          className="button__img"
          src="../icon-settings.svg"
          alt="Notification icon"
          width="35px"
          height="35px"
        />
      </button>
    </>
  );
}

export default Settings;