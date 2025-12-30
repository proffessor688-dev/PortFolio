import { RiTwitterXLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialSkype } from "react-icons/sl";
import { CiHome } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { RxResume } from "react-icons/rx";
import { GoProjectRoadmap } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { RiTailwindCssFill } from "react-icons/ri";
import InfoSec from "./InfoSec";

function Sidebar() {
  return (
    <>
      {/*------------------------------------------SideBar------------------------------------------------------------- */}
      <section className="bg-[#0d1e2e] w-70 h-screen fixed top-0 left-0 flex flex-col">
        {/*Profile Section*/}
        <div className=" h-[200px] flex flex-col items-center justify-center   ">
          <InfoSec></InfoSec>
          <ul className="flex space-x-4 pt-3 ">
            <a href="#" className="cursor-pointer">
              <li className="bg-[#aeb3cb] w-6 h-6 rounded-[50%] flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 ">
                {<RiTwitterXLine />}
              </li>
            </a>
            <a href="#" className="cursor-pointer">
              <li className="bg-[#aeb3cb] w-6 h-6 rounded-[50%] flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 ">
                {<BsInstagram />}
              </li>
            </a>
            <a href="#" className="cursor-pointer">
              <li className="bg-[#aeb3cb] w-6 h-6 rounded-[50%] flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 ">
                {<FaGithub />}
              </li>
            </a>
            <a href="#" className="cursor-pointer">
              <li className="bg-[#aeb3cb] w-6 h-6 rounded-[50%] flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 ">
                {<FaLinkedinIn />}
              </li>
            </a>
            <a href="#" className="cursor-pointer">
              <li className="bg-[#aeb3cb] w-6 h-6 rounded-[50%] flex items-center justify-center hover:bg-cyan-400 transition-all duration-300 ">
                {<SlSocialSkype />}
              </li>
            </a>
          </ul>
        </div>
        {/*Lower Part */}
        <ul className="flex flex-col mt-10 ml-8  h-[280px] justify-between">
          <li className="flex pl-4  font-semibold  text-white group">
            <div className="flex justify-center ">
              <CiHome className="text-2xl mr-2 group-hover:text-cyan-400 transition-all duration-300 " />
              Home
            </div>
          </li>

          <li className="flex pl-4  font-semibold  text-white group">
            <div className="flex justify-center ">
              <IoPersonOutline className="text-2xl mr-2 group-hover:text-cyan-400 transition-all duration-300 " />
              About
            </div>
          </li>

          <li className="flex pl-4  font-semibold  text-white group">
            <div className="flex justify-center ">
              <RxResume className="text-2xl mr-2 group-hover:text-cyan-400 transition-all duration-300 " />
              Resume
            </div>
          </li>

          <li className="flex pl-4  font-semibold  text-white group">
            <div className="flex justify-center ">
              <GoProjectRoadmap className="text-2xl mr-2 group-hover:text-cyan-400 transition-all duration-300 " />
              Project
            </div>
          </li>

          <li className="flex pl-4  font-semibold  text-white group">
            <div className="flex justify-center ">
              <CiMail className="text-2xl mr-2 group-hover:text-cyan-400 transition-all duration-300 " />
              Contact
            </div>
          </li>
        </ul>

        <div className="mt-auto flex items-center justify-center flex-col mb-3">
          <h1 className="text-white font-semibold "> Copyright Shubham</h1>
          <p className="text-white font-semibold flex justify-between items-center mb-2">
            Designed by{" "}
            <span className="ml-1.5 mt-0.5 text-blue-400">
              <i>{<RiTailwindCssFill />}</i>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
export default Sidebar;
