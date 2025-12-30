import InfoSec from "./InfoSec";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function About() {
  return (
    <>
      <section className="ml-70 bg-[#6382a1]">
        <div className=" flex  h-screen ml-[-50px] ">
          <div className="bg-[#0d1e2e] h-[600px] w-full ml-[10%] rounded-4xl relative border-t-4 border-t-cyan-400 text-shadow-lg  ">
            <div className="flex flex-col items-center pt-4 ">
              <InfoSec />
              <h1 className="text-cyan-400 font-bold">Student & Developer</h1>
            </div>
            <div className="flex item items-center gap-6 mt-16 flex-col  ">
              <div className="w-[400px] h-[45px] bg-white flex flex-cols  rounded-[12px]  font-serif group border-2 border-black hover:border-cyan-400 ">
                <div className="flex flex-row justify-items-normal items-center">
                  <IoMailOpenOutline className="size-10 pl-2 pr-2 group-hover:text-cyan-400 transition-all duration-200  " />
                  kumarshubham25032005@gmail.com{" "}
                </div>
              </div>

              <div className="w-[400px] h-[45px] bg-white flex flex-cols rounded-[12px] font-bold  group border-2 border-black hover:border-cyan-400 ">
                <div className="flex  justify-items-normal items-center ">
                  <IoCallOutline className="size-10 pl-2 prwhite group-hover:text-cyan-400 transition-all duration-200 " />
                  +91 9153852893
                </div>
              </div>

              <div className="w-[400px] h-[45px] bg-white flex flex-cols justify-items-normal items-center rounded-[12px]  font-serif hover:bg-cyan-40 transition-all duration-200 group border-2 border-black hover:border-cyan-400">
                <div className="flex  justify-items-normal items-center ">
                  <CiLocationOn className="size-10 pl-2 pr-2 group-hover:text-cyan-400 transition-all duration-200  " />
                  Ranchi,Jharkhand
                </div>
              </div>
            </div>
          </div>
          {/*-------------------------------------Left part------------------------------------------------------ */}
          <div className="ml-10">
            <button className="bg-blue-950 w-[150px] mb-6 text-white hover:text-blue-950 hover:bg-white transition-all duration-300 hover:scale-105  font-bold p-2.5 rounded-4xl cursor-pointer">
              Get To Know Me
            </button>
            <div className="">
              <h1 className="text-4xl leading-10 font-bold text-white">
                Passionate About Creating Digital Experiences
              </h1>
              <p className="font-medium mt-5">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div class="bg-gray-900 text-white p-6 rounded-2xl max-w-4xl mx-auto my-10 mr-5">
              <div class="flex flex-col md:flex-row justify-around items-center gap-6 text-center">
                <div>
                  <h2 class="text-4xl font-bold text-yellow-400">10+</h2>
                  <p class="text-gray-300 mt-2">Projects Completed</p>
                </div>

                <div>
                  <h2 class="text-4xl font-bold text-yellow-400">2+</h2>
                  <p class="text-gray-300 mt-2">Years Experience</p>
                </div>

                <div>
                  <h2 class="text-4xl font-bold text-yellow-400">60%</h2>
                  <p class="text-gray-300 mt-2">Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-900 text-white p-6 rounded-xl max-w-5xl mx-auto space-y-8 mr-5 mt-15">
              <div class="grid md:grid-cols-2 gap-6 text-sm ">
                <div>
                  <p class="text-gray-400">Specialization</p>
                  <p class="font-semibold">UI/UX Design & Development</p>
                </div>
                <div>
                  <p class="text-gray-400">Experience Level</p>
                  <p class="font-semibold">Fresher</p>
                </div>
                <div>
                  <p class="text-gray-400">Education</p>
                  <p class="font-semibold">Computer Science, CIT</p>
                </div>
                <div>
                  <p class="text-gray-400">Languages</p>
                  <p class="font-semibold">English, Hindi</p>
                </div>
              </div>

              <div class="flex flex-wrap gap-4">
                <a
                  href="#"
                  class="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Download Resume
                </a>

                <a
                  href="#"
                  class="border border-gray-400 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
                    />
                  </svg>
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
