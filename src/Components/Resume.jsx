import myProfile from "../assets/myProfile-img.jpg";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuGraduationCap } from "react-icons/lu";
function Resume() {
  return (
    <section className=" h-[2000px]  bg-[#6382a1] ml-70  mt-[-100px]   ">
      <div className="flex flex-col items-center justify-center   ">
        {/*--------------------------------------Heading--------------------------------------- */}
        <div className=" flex flex-col items-center justify-center  mx-auto  ">
          <div className=" flex flex-row justify-between items-center mx-auto mt-10 ">
            <div className="bg-blue-500 h-0.5  w-10"></div>
            <div className="text-3xl font-bold ml-2 mr-2">Resume</div>
            <div className="bg-blue-500 h-0.5 w-10"></div>
          </div>
          <p className="mt-4 text-lg  items-center leading-7 ml-10 text-white">
            A dedicated web developer skilled in creating responsive and dynamic
            websites using modern technologies. Focused on writing clean code
            and delivering great user experiences.Passionate about learning new
            tools and building real-world web solutions.
          </p>
        </div>

        <div className="flex gap-3 w-full  h-[2000px]   mt-15    ">
          {/*---------------------------------------Left Part----------------------------------------- */}
          <div className="bg-blue-950 h-[800px] w-[400px] ml-[50px] rounded-2xl flex flex-col   ">
            <div className="w-45 mx-auto mt-10 bg-cyan-400 rounded-2xl object-fit">
              <img
                src={myProfile}
                loading="lazy"
                className="p-1 rounded-2xl"
              ></img>
            </div>
            <div className="ml-10 mt-5">
              <h1 className="text-white font-bold text-2xl mx-auto">
                Professional Summary
              </h1>
              <p className="text-white mt-5 text-base">
                Driven software architect with expertise in developing scalable,
                high-performance enterprise solutions. Passionate about
                leveraging cutting-edge technologies to solve complex business
                challenges.
              </p>
            </div>
            <div>
              <div className="text-white font-bold text-2xl mx-auto ml-10 mt-5">
                Contact Information
              </div>
              <div>
                <div className="flex justify-start items-center mt-5 ml-4">
                  <CiLocationOn className="text-white text-xl" />
                  <p className="text-white ml-2">
                    Baraitu,Ranchi,Jharkhand,834009
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 ml-4">
                  <CiMail className="text-white text-xl" />
                  <p className="text-white ml-2">
                    Kumarshubham250302005@gmail.com
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 ml-4">
                  <IoPhonePortraitOutline className="text-white text-xl" />
                  <p className="text-white ml-2">9153852893</p>
                </div>
                <div className="flex justify-start items-center mt-5 ml-4">
                  <CiLinkedin className="text-white text-xl" />
                  <a href="https://www.linkedin.com/in/shubham-kumar-41330b2b1/">
                    <p className="text-white ml-2">
                      https://www.linkedin.com/in/shubham-kumar-41330b2b1/
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*------------------------------------Right part------------------------ */}
          <div className=" h-full w-[750px] mr-5 ">
            <div className="flex ml-12 mt-7 flex-col">
              <div className="flex items-center flex-col mt-22 bg-amber-200">
                <div className="bg-blue-950 w-[20px] h-[22px] rounded-2xl object-cover"></div>
                <div className="h-full w-0.5 bg-white"></div>
              </div>
              <div className="flex  items-center  justify-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#172554"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 3h-8v4h8V3z" />
                </svg>
                <h1 className="text-white font-bold text-3xl ml-2  ">
                  Professional Experience
                </h1>
              </div>

              <div className="mt-5 ml-2.5">
                <h1 className="text-white font-bold text-2xl ">
                  Senior Software Architect
                </h1>
                <p className="text-blue-950 font-bold">2022 - Present</p>
                <div className="flex items-center mt-2">
                  <HiOutlineOfficeBuilding className="text-2xl text-blue-950" />
                  <p className="text-white text-lg ml-1">
                    Tech Innovations Inc.
                  </p>
                </div>
                <ul className="list-disc space-y-2 text-white text-lg mt-3 ml-5 marker:text-blue-950">
                  <li>
                    Lead the architectural design and implementation of
                    enterprise-scale applications
                  </li>
                  <li>
                    Mentor team of 12 developers and establish technical best
                    practices
                  </li>
                  <li>
                    Drive adoption of microservices architecture and
                    cloud-native solutions
                  </li>
                  <li>
                    Reduce system downtime by 75% through improved architecture
                    and monitoring
                  </li>
                </ul>
              </div>
            </div>

            {/**------------------Education---------------------------- */}
            <div className="">
              <div className="flex  items-center  justify-items-center ml-15 mt-10">
                <LuGraduationCap className=" text-[#172554] w-9 h-9" />
                <h1 className="text-white font-bold text-3xl ml-2  ">
                  Education
                </h1>
              </div>

              <div className="flex flex-col ml-12 mt-7  ">
                <div className="flex items-center flex-col">
                  <div className="bg-blue-950 w-[20px] h-[22px] rounded-2xl object-cover"></div>
                  <div className="h-full w-0.5 bg-white"></div>
                </div>
                {/**---------------------------------------------- */}
                <div className="mt-[-9px] ml-2.5">
                  <h1 className="text-white font-bold text-2xl ">
                    Intermediate
                  </h1>
                  <p className="text-blue-950 font-bold">2022</p>
                  <div className="flex items-center mt-2">
                    <HiOutlineOfficeBuilding className="text-2xl text-blue-950" />
                    <p className="text-white text-lg ml-1">
                      DAV Public School Bariatu,Ranchi
                    </p>
                  </div>
                  <p className="text-white text-md">
                    Specialized in Artificial Intelligence and Machine Learning.
                    Graduated with honors.
                  </p>
                </div>

                <div className="mt-[-9px] ml-2.5">
                  <h1 className="text-white font-bold text-2xl ">
                    Computer Science Engineering
                  </h1>
                  <p className="text-blue-950 font-bold">2022</p>
                  <div className="flex items-center mt-2">
                    <HiOutlineOfficeBuilding className="text-2xl text-blue-950" />
                    <p className="text-white text-lg ml-1">
                      Cambridge institute of technology
                    </p>
                  </div>
                  <p className="text-white text-md">
                    Specialized in Artificial Intelligence and Machine Learning.
                    Graduated with honors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Resume;
