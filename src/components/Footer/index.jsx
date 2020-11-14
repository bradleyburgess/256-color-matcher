import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import tailwindLogo from "../../assets/tailwind-logo.svg";
import neovimLogo from "../../assets/neovim-mark-flat.svg";

const Footer = () => {
  return (
    <footer className="pb-3 mt-6 text-center sm:absolute sm:bottom-0 sm:left-0 sm:right-0">
      <div>
        <p>
          Copyright © {new Date().getFullYear()}. Bradley Burgess.
          <a href="https://github.com/bradleyburgess/closest-8bit-color">
            <span className="ml-2 hover:text-green-600 transition-all duration-200">
              <FontAwesomeIcon icon={faGithub} />
            </span>
          </a>
          <a href="https://twitter.com/bburgess_keys">
            <span className="ml-2 hover:text-green-600 transition-all duration-200">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
          </a>
        </p>
      </div>
      <div>
        <p>
          Made with{" "}
          <span className="mx-1">
            <FontAwesomeIcon icon={faHeart} alt="heart emoji" />
          </span>{" "}
          using
          <span className="ml-2">
            <a href="https://reactjs.org/">
              <FontAwesomeIcon icon={faReact} alt="react logo" />
            </a>
          </span>
          <span> + </span>
          <a href="https://tailwindcss.com/">
            <span>
              <img
                className="inline w-5 mb-1 ml-0"
                src={tailwindLogo}
                alt="tailwind logo"
              />
              <span> + </span>
              <a href="https://neovim.io/">
                <span>
                  <img
                    src={neovimLogo}
                    alt="neovim logo"
                    className="inline w-3 mb-1 ml-1"
                  />
                </span>
              </a>
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
