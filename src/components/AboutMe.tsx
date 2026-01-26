export default function AboutMe() {
  return (
    <div className="h-screen  flex flex-col -mt-3  bg-white/3   space-y-5 justify-center items-center md:flex-row md:justify-between gap-5 sm:gap-10  px-5 lg:px-40 text-white/60  ">
      <div className="flex flex-col space-y-5 md:w-1/2">
        <h3 className="text-xl">
          <span className="text-amber-300 text-3xl">{`//`}</span> About Me
        </h3>
        <div className="flex flex-col space-y-10">
          <h1 className="text-4xl font-semibold ">
            Front-End Developer Focused on Modern Web Experiences
          </h1>
          <p className="font-sans">
            I’m passionate about building clean, responsive, and user-friendly
            websites. With a strong eye for detail and a love for learning, I
            constantly strive to improve both my code and user experience. I
            enjoy turning complex problems into simple, elegant solutions.
          </p>
        </div>
        {/* <div className="hidden flex group space-x-2 border-b border-gray-500 transition-all duration-700 hover:border-white w-max">
          <p className="flex justify-center items-center  md:text-2xl cursor-pointer">
            More about me
            <ArrowRightIcon className="w-6 h-6 text-amber-200 inline transition-all duration-700 ml-2 group-hover:ml-5" />
          </p>
        </div> */}
      </div>
      <div className="flex flex-col space-y-5 sm:w-1/2 md:w-1/3">
        <div className="flex justify-between ">
          <div className="flex space-x-2">
            <p className="text-6xl">3 </p>
            <p className="flex justify-center items-center">
              Years of Experience
            </p>
          </div>
          <div className="flex space-x-2">
            <p className="text-6xl">10+ </p>
            <p className="flex justify-center items-center">
              Successful project
            </p>
          </div>
        </div>
        <p className="font-sans">
          Successfully delivered 10+ projects across personal and corporate
          environments, focusing on clean UI, usability, and real-world
          requirements.
        </p>
      </div>
    </div>
  );
}
