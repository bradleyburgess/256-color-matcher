import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  //   faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// import tailwindLogo from "../assets/tailwind-logo.svg";
// import neovimLogo from "../assets/neovim-mark-flat.svg";

const styles = {
  // container: "text-center absolute bottom-0 right-0 left-0 pb-3",
  container: "text-center pb-3 mt-10",
  link: "hover:text-blue-600 transition-all duration-200",
  socialIcon: "ml-1 hover:text-blue-600 duration-200",
  calculatePosition: (height) => {
    const { appHeight, footerHeight, windowHeight } = height;
    const difference = windowHeight - (footerHeight + appHeight);
    if (difference > 0) return "absolute bottom-0 right-0 left-0";
    else return "relative";
  },
};

const Footer = () => {
  const updateHeight = () => {
    const appHeight = document.querySelector("#app-container").offsetHeight;
    const windowHeight = window.innerHeight;
    const footerHeight = document.querySelector("#footer").offsetHeight;
    setHeight({
      appHeight,
      windowHeight,
      footerHeight,
    });
  };

  const [height, setHeight] = useState({
    appHeight: 0,
    footerHeight: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <footer
      id="footer"
      className={clsx(styles.container, styles.calculatePosition(height))}
    >
      <div>
        Copyright © {new Date().getFullYear()} Bradley Burgess.
        <a href="https://twitter.com/bburgess_keys">
          <span className={clsx(styles.socialIcon)}>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>
        <a href="https://github.com/bradleyburgess/">
          <span className={clsx(styles.socialIcon)}>
            <FontAwesomeIcon icon={faGithub} />
          </span>
        </a>
      </div>
      <div>
        Made using{" "}
        <a className={clsx(styles.link)} href="https://reactjs.org/">
          react.js
        </a>
        ,{" "}
        <a className={clsx(styles.link)} href="https://tailwindcss.com/">
          tailwindcss
        </a>{" "}
        &{" "}
        <a className={clsx(styles.link)} href="https://neovim.io/">
          neovim
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
