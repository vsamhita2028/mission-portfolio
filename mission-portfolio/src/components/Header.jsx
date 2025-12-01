import { useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";
import logo from "../assets/logo.png"

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full py-6 px-4 sm:px-8 flex justify-between items-center bg-transparent">
      <div className="text-3xl font-bold">
        {/* <img src={logo} className="h-10 w-10 rounded-full"></img> */}
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 cursor-pointer">
        <div className="hover:underline" onClick={() => handleScroll("about")}>Who Am I?</div>
        {/* <div>My Exploration</div> */}
        <div className="hover:underline" onClick={() => handleScroll("work")}>My Work</div>
        <div className="hover:underline" onClick={() => handleScroll("footer")}>Contact Me</div>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl flex flex-col justify-center items-center w-8 h-8"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
      >
       <PiHamburgerBold />
      </button>
      {/* Mobile Menu */}
      {open && (
        <nav className="absolute top-16 left-0 w-full bg-[#FCF9F9] border-2 mt-3 shadow-md flex flex-col items-center py-4 z-50 md:hidden cursor-pointer">
          <div className="py-2 hover:underline" onClick={() => { setOpen(false); handleScroll("about"); }}>Who Am I?</div>
          {/*<div className="py-2 hover:underline" onClick={() => setOpen(false)}>My Exploration</div> */}
          <div className="py-2 hover:underline" onClick={() => { setOpen(false); handleScroll("work"); }}>My Work</div>
          <div className="py-2 hover:underline" onClick={() => { setOpen(false); handleScroll("footer"); }}>Contact Me</div>
        </nav>
      )}
    </header>
  );
}