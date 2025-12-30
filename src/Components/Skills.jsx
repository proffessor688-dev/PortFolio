const Skills = () => {
  return (
    <section className="h-screen ml-70  justify-center items-center mx-auto bg-[#6382a1] ">
      <div className=" flex flex-col items-center justify-center w-[700px] mx-auto  ">
        <div className=" flex flex-row justify-between items-center mx-auto mt-10 ">
          <div className="bg-blue-500 h-0.5  w-10"></div>
          <div className="text-3xl font-bold ml-2 mr-2">Skills</div>
          <div className="bg-blue-500 h-0.5 w-10"></div>
        </div>
        <p className="mt-4 text-lg  items-center bg-amber-400">
          It Better to have a permanent income than to be rich for a year.
        </p>
      </div>
      {/*-----------------------------------Skills Part------------------------------------*/}
      {/*---------------------------------------------------LHS*/}
      <div className="flex">
        <div className="bg-blue-950 w-[550px] ml-15 mt-20 h-[350px] rounded-2xl flex flex-col justify-between ">
          <div className="ml-5 mt-5 mb-[-10px]">
            <div className="text-2xl font-medium text-white">
              Front-end Development
            </div>
            <div className="bg-blue-500 h-0.5 mt-2  w-10"></div>
          </div>

          <div className="mb-5 ml-7 mt-5 group  ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">HTML/CSS</span>
              <span className="text-white mr-5">95%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
           Expert level knowledge of semantic HTML5 and modern CSS3 techniques
            </p>
          </div>

          <div className="mb-5 ml-7 mt-5 group ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">Javascript</span>
              <span className="text-white mr-5">75%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
            Strong proficiency in ES6+, DOM manipulation, and modern frameworks
            </p>
          </div>

          <div className="mb-5 ml-7 mt-5 group ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">React</span>
              <span className="text-white mr-5">75%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
             Experience with React hooks, state management, and component architecture
            </p>
          </div>
        </div>
        {/*--------------------------------------------------- RHS*/ }
        <div className="bg-blue-950 w-[550px] ml-15 mt-20 h-[350px] rounded-2xl flex flex-col justify-between ">
          <div className="ml-5 mt-5 mb-[-10px]">
            <div className="text-2xl font-medium text-white">
              Back-end Development
            </div>
            <div className="bg-blue-500 h-0.5 mt-2  w-10"></div>
          </div>

          <div className="mb-5 ml-7 mt-5 group  ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">Nodejs</span>
              <span className="text-white mr-5">75%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
              Server-side JavaScript development with Express and REST APIs
            </p>
          </div>

          <div className="mb-5 ml-7 mt-5 group ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">Python</span>
              <span className="text-white mr-5">60%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
              Python development with Django and data analysis toolss
            </p>
          </div>

          <div className="mb-5 ml-7 mt-5 group ">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">SQL</span>
              <span className="text-white mr-5">75%</span>
            </div>
            <div className="w-[500px] bg-zinc-700 rounded-full h-2">
              <div
                className="bg-yellow-700 h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-white opacity-0 mt-0.5 group-hover:opacity-100 transition-opacity duration-300">
              Database design, optimization, and complex queries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
