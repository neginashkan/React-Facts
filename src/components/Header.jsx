import { useState } from "react";
import react_icon from "../images/react-icon.png";

function Header() {
  const [isToggled, setIsToggled] = useState(false);
  function handleToggle(event) {
    const { checked } = event.target;
    checked ? setIsToggled(true) : setIsToggled(false);
  }
  return (
    <header className="Header">
      <div className="icon--title">
        <img className="icon" src={react_icon} alt="React Icon" title="React" />
        <h2 className="title">ReactFacts</h2>
      </div>
      <div className=" theme--toggle--button ">
        <form>
          <input
            onChange={handleToggle}
            id="switch-button"
            name="switch-button"
            type="checkbox"
            className="input-checkbox"
            value={isToggled}
          />
          <label htmlFor="switch-button" className="toggle">
            toggle
          </label>
          <span  className="light--text label-text">
            light
          </span>
          <span className="dark--text label-text">
            dark
          </span>
        </form>
      </div>
    </header>
  );
}

export default Header;


