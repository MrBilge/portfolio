import { ArrowRightIcon } from "@heroicons/react/24/solid";
import PortfolioCard from "./PortfolioCard";

export default function MyPortfolio() {
  return (
    <div className="w-full  min-h-dvh portrait:min-h-0 portrait:py-48 flex justify-center items-center bg-white/4 gap-5 py-20  lg:px-20">
      <div className="w-full flex flex-col items-center lg:flex-row gap-10 md:gap-20 xl:gap-32 justify-between  px-5  ">
        <div className="space-y-5 w-full lg:w-1/2 text-white/70">
          <h2 className="text-2xl tex">
            <span className="text-amber-300 text-2xl">{`//`}</span> My portfolio
          </h2>
          <h1 className="text-4xl font-semibold text-white/70 ">
            Take a look at the latest projects I’ve done
          </h1>

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
            href="https://greendrive.com.tr/"
            primaryButton="React / React Native Expo"
            secondaryButton="Mobile / Web Development"
            title="Green Drive"
            description="E sarj Website"
            mainImage="/assets/greendrive1.png"
            mainView="w-1/2"
            subImage1="/assets/greendrive.png"
            subImage2="/assets/greenyeni.PNG"
          />
          <PortfolioCard
            href="https://forsale.godaddy.com/forsale/sarjnoktasi.com?utm_source=TDFS_BINNS2&utm_medium=parkedpages&utm_campaign=x_corp_tdfs-binns2_base&traffic_type=TDFS_BINNS2&traffic_id=binns2&"
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
