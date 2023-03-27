import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./css/styles.css";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  function handleSwitch() {
    setDarkMode((pervDarkMode) => !pervDarkMode);
  }
  return (
    <div className={`App ${!darkMode && "light-mode"}`}>
      <Navbar darkMode={darkMode} handleSwitch={handleSwitch} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
