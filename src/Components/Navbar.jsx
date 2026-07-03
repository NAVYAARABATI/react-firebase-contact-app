import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="my-4 flex h-[60px] items-center justify-center gap-2 rounded-lg bg-white px-3">
        <img
          src="./logo.svg"
          alt="Firebase Logo"
          className="h-7 w-7 sm:h-8 sm:w-8"
        />

        <h1 className="text-sm font-semibold sm:text-lg">
          Firebase Contact App
        </h1>
      </div>
    </>
  );
};

export default Navbar;