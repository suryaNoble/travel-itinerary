import React, { useState } from "react";
import OnboardingPage from "./components/OnboardingPage";
import DashboardPage from "./components/DashboardPage";
import { useTheme } from "./context/ThemeContext";
import "./styles/onboarding.css";

function App() {
  const { theme } = useTheme();
  const [screen, setScreen] = useState("onboarding");

  const handleOnboardingComplete = () => {
    setScreen("dashboard");
  };

  return (
    <div
      className={
        screen === "onboarding"
          ? `onboarding-container${theme === "light" ? " light" : ""}`
          : ""
      }
    >
      {screen === "onboarding" ? (
        <OnboardingPage onComplete={handleOnboardingComplete} theme={theme} />
      ) : (
        <DashboardPage theme={theme} />
      )}
    </div>
  );
}

export default App;
