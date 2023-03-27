import react_icon from "../images/react-icon.png";

function Navbar(props) {
  const { darkMode, handleSwitch } = props;
  return (
    <nav className={`nav ${!darkMode && "light-mode"}`}>
      <div className="icon--title">
        <img className="icon" src={react_icon} alt="React Icon" title="React" />
        <h2 className="title">ReactFacts</h2>
      </div>
      <div className=" theme--toggle--button ">
        <form>
          <input
            onClick={handleSwitch}
            id="switch-button"
            name="switch-button"
            type="checkbox"
            className="input-checkbox"
            value={darkMode}
          />
          <label htmlFor="switch-button" className="toggle">
            toggle
          </label>
          <span className="light--text label-text">light</span>
          <span className="dark--text label-text">dark</span>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
