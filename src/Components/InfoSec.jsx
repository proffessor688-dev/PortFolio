import myProfile from "../assets/myProfile-img.jpg";
function InfoSec() {
  return (
    <>
      <div className="w-[130px] border-[8px] border-[#2c2f3f] hover:border-cyan-400 transition-all duration-200 rounded-[50%]  ">
        <img
          src={myProfile}
          className="rounded-[50%]  items-center mx-auto hover:scale-105 "
          loading="lazy"
        ></img>
      </div>
      <h1 className="text-white font-bold text-2xl">Shubham Vats</h1>
    </>
  );
}
export default InfoSec;



              <div className="flex items-center flex-col">
                <div className="bg-blue-950 w-[20px] h-[22px] rounded-2xl object-cover"></div>
                <div className="h-full w-0.5 bg-white"></div>
              </div>
              {/**---------------------------------------------- */}
              <div className="mt-[-9px] ml-2.5">
                <h1 className="text-white font-bold text-2xl ">
                  Lead Developer
                </h1>
                <p className="text-blue-950 font-bold">2019 - 2022</p>
                <div className="flex items-center mt-2">
                 {/* <HiOutlineOfficeBuilding className="text-2xl text-blue-950" /> */} 
                  <p className="text-white text-lg ml-1">
                    Tech Innovations Inc.
                  </p>
                </div>
                <ul className="list-disc space-y-2 text-white text-lg mt-3 ml-5 marker:text-blue-950">
                  <li>
                    Spearheaded development of company's flagship product
                    reaching 1M+ users
                  </li>
                  <li>
                    Implemented CI/CD pipeline reducing deployment time by 60%
                  </li>
                  <li>Managed team of 8 developers across multiple projects</li>
                  <li>Increased code test coverage from 45% to 90%</li>
                </ul>
              </div>
