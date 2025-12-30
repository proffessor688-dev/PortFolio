import myProfile from "../assets/myProfile-img.jpg";
function Herosection() {
  return (
    <>
      <section className="ml-70">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#00FFFF]/90 to-[#1f1f1f]/10 z-40 ] absolute right-[10%] top-[10%] opacity-25"></div>
        <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#00FFFF]/90 to-[#FFDB58]/8 z-40 ] absolute bottom-[5%] left-[30%]  opacity-25"></div>

        <div className="bg-[#6382a1] h-screen  flex  ">
          <div className="flex flex-col justify-center ml-20 pt-2 -mt-20 w-140 ">
            <h1 className="font-extrabold text-4xl pb-1.5">Shubham Vats</h1>
            <h3 className="font-bold pb-1.5 text-2xl">
              I'm a{" "}
              <span className="font-extrabold text-xl">Web Developer</span>
            </h3>
            <p className="font-sans text-xl">
              Passionate about creating exceptional digital experiences that
              blend innovative design with functional development. Let's bring
              your vision to life.
            </p>
            <div className="mt-14 flex justify-between w-65">
              <button className="bg-blue-950 text-white hover:text-blue-950 hover:bg-white transition-all duration-300 hover:scale-105  font-bold p-2.5 rounded-4xl cursor-pointer">
                View My Work
              </button>
              <button className="bg-white font-bold p-2.5 rounded-4xl border-1 hover:scale-105 cursor-pointer">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Herosection;
