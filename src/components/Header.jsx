import React from "react";
import clsx from "clsx";

const styles = {
  container: "pt-3",
  h1: "uppercase font-bold text-3xl md:text-4xl text-center leading-tight",
  subheading: "text-center",
};

const Header = () => {
  return (
    <header className={clsx(styles.container)}>
      <h1 className={clsx(styles.h1)}>256-color matcher</h1>
      <div className={clsx(styles.subheading)}>
        <h3 className={clsx(styles.h3)}>
          A tool to find the closest standard 256 color from a given hex / rgb.
        </h3>
      </div>
    </header>
  );
};

export default Header;
