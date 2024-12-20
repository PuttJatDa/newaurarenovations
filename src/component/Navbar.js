import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import navbar_img from "../assets/navbar/navbar-img.png";

const Navbar = ({ activePage, setServiceTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const views = [
    { display: "HOME", key: "home", path: "/" },
    { display: "SERVICE", key: "service", path: "/#service" },
    { display: "ABOUT", key: "about", path: "/about" },
    { display: "GALLERY", key: "gallery", path: "/gallery" },
    { display: "CONTACT", key: "contact", path: "/contact" },
  ];

  return (
    <>
    <div className="sm:block hidden ">

      <header className="bg-yellow-500 text-white px-4 py-2 ">
        <div className="container mx-auto flex justify-between items-center flex-wrap md:w-[85%] w-[95%]">
          {/* Contact Details on the Left */}
          <div className="flex flex-col sm:flex-row sm:space-x-4  text-black">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" fill="white" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </p>
            <a href="tel:+16475491720" className="hover:underline ">
              +1 (647) 549-1720
            </a>
            
          </div>

          {/* Icons on the Right */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
    </div>
      <nav className="flex items-center justify-between bg-black sm:px-[8%] px-6 py-3">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={navbar_img} alt="Logo" className="h-28 w-auto" />
          </Link>
        </div>

        {/* Right Section: Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {views.map((item) => (
            <Link
              key={item.key}
              onClick={() => {
                if (item.key === "service" && setServiceTab) {
                  setServiceTab((prev) => prev + 1);
                }
              }}
              to={item.path}
              className={`  transition duration-200 ${
                activePage === item.key ? "text-orange-300" : "text-white"
              }`}
            >
              {item.display}
            </Link>
          ))}
        </div>

        <button
          onClick={toggleDrawer}
          className="text-white text-2xl md:hidden"
        >
          ☰
        </button>

        <div
          className={`fixed top-0 left-0 h-screen w-full z-50 transition-opacity duration-500  ${
            isOpen
              ? "bg-black bg-opacity-10 opacity-100 pointer-events-auto ease-in"
              : "opacity-0 pointer-events-none ease-out"
          }`}
        >
          <div
            className={`bg-white w-[300px] h-full opacity-100 transform transition-transform duration-500 ease-in-out  w3-container w3-center  ${
              isOpen ? "translate-x-0 w3-animate-left" : "-translate-x-full "
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleDrawer}
                className="text-gray-500 font-bold text-3xl"
              >
                ×
              </button>
            </div>
            <div className="border-b border-gray-200 mx-1"></div>

            {/* Drawer Links */}
            <div className="flex flex-col items-start space-y-4 mt-4 px-4">
              {views.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  // onClick={item.onClick}
                  className={` text-lg  hover:text-orange-300 transition duration-600 ease-in-out ${
                    activePage === item.key ? "text-orange-300" : "text-black"
                  }`}
                  onClick={() => {
                    if (item.key === "service" && setServiceTab) {
                      setServiceTab((prev) => prev + 1);
                    }
                  }}
                >
                  {item.display}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* )} */}
      </nav>
    </>
  );
};

export default Navbar;
