import React from 'react';
import ThemeToggle from "../Theme/ThemeToggle/ThemeToggle";
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineInfoCircle,
  AiOutlineContacts,
} from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import { ImBlog } from "react-icons/im";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";
import { motion } from 'framer-motion';
import { navAnimationLogo } from '../../../Animations/Animations';
import { auth } from '../../Auth/firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return
  }
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative z-50 bg-white dark:bg-slate-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center transition-all dark:border-slate-700 border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={navAnimationLogo}
              className="flex justify-start lg:w-0 lg:flex-1"
            >
              <Link to="/">
                <h1 className='text-indigo-500 font-bold text-3xl logo-font'>
                  Hazrat Ali
                </h1>
              </Link>
            </motion.div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <div className="relative">
                {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}

                <NavLink to="/" activeclassname="active">
                  <span
                    className="
                   group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 pb-8'
                  "
                  >
                    Home
                  </span>
                </NavLink>
              </div>

              <a activeclassname="active" href="/#services">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Services
                </span>
              </a>
              <a activeclassname="active" href="/#project">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Project
                </span>
              </a>
              <div className="relative">
                <a activeclassname="active" href="/#skills">
                  <span className="group dark:hover:text-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    Skills
                  </span>
                </a>
              </div>
              <a activeclassname="active" href="/#education">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Education
                </span>
              </a>
              <a activeclassname="active" href="/#blog">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </span>
              </a>
              <a activeclassname="active" href="/#team">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Team
                </span>
              </a>
              <a activeclassname="active" href="#about">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  About
                </span>
              </a>
              <a activeclassname="active" href="/#contact">
                <span className="text-base dark:hover:text-white font-medium text-gray-500 hover:text-gray-900">
                  Contact
                </span>
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <ThemeToggle />
              <a
                rel="noreferrer"
                href="https://drive.google.com/file/d/1ZBioCcrhS1JKp-6Azu61jH2RSeBtu_bB/view?usp=sharing"
                target="_blank"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Resume
              </a>
              {
                user ?
                  <button
                    onClick={() => {
                      signOut(auth)
                      window.location.reload()
                    }}
                    className="w-full ml-2 flex items-center justify-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    SingOut
                  </button>
                  :
                  <a
                    href="/login"
                    className="w-full ml-2 flex items-center justify-center  px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Singin
                  </a>
              }
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: ""
      To: ""
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  */}

        <div
          className={
            open
              ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    activeclassname="active"
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineHome />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </NavLink>
                  <a
                    activeclassname="active"
                    href="/#services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Services
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="/#project"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Project
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="/#project"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Project
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="/#education"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <ImBlog />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Education
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="/#blog"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineInfoCircle />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Blog
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="/#team"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/refresh */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineContacts />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Team
                    </span>
                  </a>
                  <a
                    activeclassname="active"
                    href="#about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </a>

                  <NavLink
                    activeclassname="active"
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <IconContext.Provider
                      value={{
                        className: "text-2xl text-indigo-600",
                      }}
                    >
                      <AiOutlineProject />
                    </IconContext.Provider>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </NavLink>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://drive.google.com/file/d/13InTZi1mAYqxdHQrN-NfIP-fr_BgEcip/view?usp=sharing"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  RESUME
                </a>
                <Link
                  to="/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sing In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;