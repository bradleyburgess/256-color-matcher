import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Converter from "./components/Converter";

const styles = {
  app: [
    "px-2",
    "sm:px-0",
    "sm:flex",
    "sm:flex-col",
    "sm:items-center",
    "text-gray-800",
  ],
  container: ["h-full", "flex", "flex-col"],
  calculateFlex: (windowHeight, appHeight) => {
    if (windowHeight < appHeight) {
      return "justify-start";
    } else return "justify-center";
  },
};

function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [appHeight, setAppHeight] = useState(0);

  const updateWindowHeight = () => {
    const height = window.innerHeight;
    setWindowHeight(height);
  };

  const updateAppHeight = () => {
    const _appHeight = document.querySelector("#app").offsetHeight;
    setAppHeight(_appHeight);
  };

  useEffect(() => {
    const updateHeight = () => {
      updateWindowHeight();
      updateAppHeight();
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("rezize", updateHeight);
  }, [windowHeight, appHeight]);

  return (
    <div
      className={clsx(
        styles.container,
        styles.calculateFlex(windowHeight, appHeight)
      )}
    >
      <div id="app" className={clsx(styles.app)}>
        <Header />
        <Converter />
        <Footer />
      </div>
    </div>
  );
}
export default App;
