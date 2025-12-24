import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PortfolioCard from "./PortfolioCard";

export default function MyPortfolio() {
  return (
    <div className="w-full h-max flex justify-center items-center second-bg gap-5 py-20  lg:px-20">
      <div className="w-full flex flex-col items-center lg:flex-row gap-10 md:gap-20 xl:gap-32 justify-between  px-5  ">
        <div className="space-y-5 w-full lg:w-1/2">
          <h2 className="text-2xl">
            <span className="text-amber-300 text-2xl">{`//`}</span> My portfolio
          </h2>
          <h1 className="text-4xl font-semibold">
            Take a look at the latest projects I’ve done
          </h1>

          <div className="hidden group flex w-max space-x-2">
            <p className="border-b border-gray-500 font-semibold text-lg  transition-all duration-300 hover:border-white cursor-pointer">
              Browse all projects
            </p>
            <span>
              <ArrowRightIcon className="w-6 h-6 transition-all duration-300 group-hover:ml-2" />
            </span>
          </div>
          <div className="lg:mt-40">
            <PortfolioCard
              primaryButton="React Native Expo"
              secondaryButton="Mobile Development"
              title="Urbon Pop"
              description="Billboard tracking"
              mainImage="/assets/urbanpop1.jpg"
              subImage1="/assets/urbanpop2.png"
              subImage2="/assets/urbanpop3.png"
              mainView="w-1/3"
              mobileCard={true}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-20  ">
          <PortfolioCard
            primaryButton="React"
            secondaryButton="Web Development"
            title="Green Drive"
            description="E sarj Website"
            mainImage="/assets/greendrive1.png"
            mainView="w-1/2"
            subImage1="/assets/greendrive.png"
            subImage2="/assets/greenyeni.PNG"
          />
          <PortfolioCard
            primaryButton="Next Js"
            secondaryButton="Web Development"
            title="Şarj Noktası"
            description="E- Sarj Website"
            mainImage="/assets/eSarj4.png"
            mainView="w-1/2"
            subImage1="/assets/eSarj2.png"
            subImage2="/assets/eSarj3.png"
          />
        </div>
      </div>
    </div>
  );
}
