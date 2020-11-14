import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center pt-2 pb-3">
      <h1 className="inline-block my-2 text-3xl text-center uppercase">
        256-color finder
      </h1>
      <div className="px-3 text-center">
        <div className="h-1 mb-1 rounded bg-gradient-to-r from-red-500 via-green-500 to-yellow-500"></div>
        <p className="px-3">
          A tool to find the closest standard 256 / 8bit color from a given hex
          / rgb.
        </p>
      </div>
    </header>
  );
};

export default Header;
