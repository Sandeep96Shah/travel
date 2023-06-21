import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setMenu(true)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl px-2 font-bold text-orange-500">
          World
        </h1>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search food"
        />
      </div>
      <p className=" text-white hidden md:flex"></p>
      {/* overlay */}
      {menu ? (
        <div className="bg-black/80 w-full h-screen fixed top-0 left-0 z-5"></div>
      ) : null}
      <div
        className={
          menu
            ? "bg-white w-[300px] fixed top-0 left-0 h-screen z-50 duration-500"
            : "bg-white w-[300px] fixed top-0 left-[-100%] h-screen z-50 duration-500"
        }
      >
        <AiOutlineClose
          className="absolute right-4 top-4 cursor-pointer"
          size={30}
          onClick={() => setMenu(false)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Memories</span>
        </h2>
        <nav>
          <p className="px-4 font-bold text-orange-500">To be Continue</p>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
