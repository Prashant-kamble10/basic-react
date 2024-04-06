import React, { useState } from "react";
import "./DarkMode.css";

const DarkModeIndex = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <>
      <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
        </button>
        <div className="content">
          {/* Your content goes here */}
          {/* For example, some text */}
          <p>This is an example content.</p>
        </div>
      </div>
    </>
  );
};

export default DarkModeIndex;
