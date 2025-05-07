import React from "react";
import { useTheme } from "../context/ThemeContext";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

function UserGreeting() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="user-greeting"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div>
        <div className="greeting-title">Hello Chhavi!</div>
        <div className="greeting-sub">Ready for the trip!?</div>
      </div>

      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <MdOutlineWbSunny /> : <IoMdMoon />}
      </button>

      <div className="user-avatar">C</div>
    </div>
  );
}

export default UserGreeting;
