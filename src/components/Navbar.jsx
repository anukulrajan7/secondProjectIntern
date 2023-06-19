import React, { useState } from "react";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="w-full m-0 py-2 px-1 bg-[#525fe1]">
      <nav className="flex  justify-between w-full  md:w-[80%]  px-4 py-4   bg-transparent text-white mx-auto  font-serif capitalize ">
        <h2 className="logo text-3xl shadow-sm font-mono font-semibold">
          Deliveright
        </h2>
        <button
          onClick={handleClick}
          className="md:hidden text-[24px] font-bold block px-2  py-1 "
        >
          <RxHamburgerMenu className="hamburger" />
        </button>
        <ul
          className={
            !isOpen
              ? "hidden"
              : "flex-col flex  md:hidden gap-6 absolute z-50 bg-[#525fe1] w-full top-20 transition-all  duration-150 scroll-smooth  py-4 text-center text-xl shadow-md left-0"
          }
        >
          <Link to="/">home</Link>
          <Link to="/about">about us</Link>
          <Link to="product">Product</Link>
          <Link to="/contact">contact</Link>
          <Link to="/register">
            <Button Children={"sign up"}> </Button>
          </Link>
          <Link to="/signin">
            <Button Children={"sign in"} />
          </Link>
        </ul>

        <ul className="md:flex hidden gap-6 text-xl py-3 ">
          <Link to="/">home</Link>
          <Link to="/about">about us</Link>
          <Link to="product">Product</Link>
          <Link to="/contact">contact</Link>
          <Link to="/register">
            <Button Children={"sign up"}> </Button>
          </Link>
          <Link to="/signin">
            <Button Children={"sign in"} />
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
