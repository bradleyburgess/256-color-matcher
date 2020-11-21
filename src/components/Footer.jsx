import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const styles = {
  container: "text-center pb-3 mt-10",
  link: "hover:text-blue-600 transition-all duration-200",
  socialIcon: "ml-1 hover:text-blue-600 duration-200",
};

const Footer = () => {
  return (
    <footer id="footer" className={clsx(styles.container)}>
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
