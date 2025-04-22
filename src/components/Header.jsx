import { Link } from "react-router-dom";
import logo from "../assets/images/logo-horizontal.svg";
import Button from "./Button";
import LinkComponent from "./LinkComponent";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "About", to: "/about" },
    { title: "Services", to: "/services" },
    { title: "Process", to: "/process" },
  ];

  return (
    <>
      <header className="px-4 lg:px-10 bg-tan py-3 fixed w-full z-50">
        <nav className="flex font-primary items-center justify-between">
          {/* Logo */}
          <div className="lg:w-[6rem] w-[5rem]">
            <Link to="/">
              <img src={logo} alt="the code factory logo" loading="lazy" />
            </Link>
          </div>

          {/* Hamburger Button (Mobile View) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-brown cursor-pointer"
          >
            {/* Use Bars3Icon (hamburger icon) from Heroicons */}
            <Bars3Icon className="h-8 w-8 text-brown" />
          </button>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex text-brown font-bold text-[1.1rem] gap-6 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <LinkComponent to={link.to} title={link.title} />
              </li>
            ))}
            <li>
              <Button to="contact" title="Contact" />
            </li>
          </ul>
        </nav>
      </header>

      {/* Full-Screen Navbar (Mobile View) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary bg-opacity-90 z-50 pt-40 px-12 "
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-12 text-white text-4xl font-medium"
            >
              {/* Close Button (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-4xl text-white cursor-pointer"
              >
                {/* Use XMarkIcon (close icon) from Heroicons */}
                <XMarkIcon className="h-8 w-8" />
              </button>

              {/* Links */}
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="relative group uppercase font-primary"
                  onClick={() => setIsOpen(false)} // Close on link click
                >
                  {link.title}
                  <motion.span className="block h-[2px] bg-white mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
              <Link
                to={"contact"}
                className="relative group uppercase font-primary"
                onClick={() => setIsOpen(false)} // Close on link click
              >
                Contact
                <motion.span className="block h-[2px] bg-white mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
