import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="">
      <Navbar activePage="about" />
      <div className="about-main-content">
        <div className="bg-[#eaf6fa] text-5xl text-[#5b5b5b] p-8 text-center">
          About
        </div>
        <div className="bg-[#DDE1E5] text-xl text-[#5b5b5b] p-2 flex md:flex-row flex-col  mx-8 mt-6 gap-6 mb-4">
          <div className="md:w-[43%] w-full flex items-center">
            <img
              src="https://gclassconstruction.com/wp-content/uploads/2023/04/C078E9C0-CC71-455E-BB5B-9701B1CB4694.jpg"
              className="bject-contain"
            />
          </div>
          <div className="md:w-[53%] w-full flex flex-col justify-center text-[#5b5b5b]">
            <p className=" leading-10">
              New Aura Renovations is a leading construction and
              renovation company. We specialize in Legal Basements that are
              constructed according to city guidelines.
            </p>
            <p className="mt-6 leading-10">
              We also do customization in renovation such as Washrooms and
              redesigning house structures. Our main goal is to do all the work
              according to customer needs.
            </p>
            <Link to="/contact" className="flex justify-center mt-8 mb-2">
              <button className="bg-[#CDB259] text-white font-semibold px-5 py-2">
                GET A QUOTE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
