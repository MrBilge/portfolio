import { portfoliaCardProps } from "../app/types/portfolia";
import Image from "next/image";

export default function PortfolioCard({
  title,
  description,
  primaryButton,
  secondaryButton,
  mainImage,
  mainView,
  subImage1,
  subImage2,
  mobileCard,
}: portfoliaCardProps) {
  return (
    <div className="group rounded-2xl  bg-gray-800 transition-all duration-500 lg:hover:scale-105 overflow-hidden space-y-5 ">
      <div className="px-5 xl:px-10 py-5">
        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 p-2 rounded-2xl text-xs text-gray-700  font-semibold">
            {primaryButton}
          </button>
          <button className="bg-gray-200 p-2 rounded-2xl text-xs text-gray-700 font-semibold">
            {secondaryButton}
          </button>
        </div>
        <div className="space-y-2">
          <p className="lg:text-xl xl:text-4xl font-semibold">{title} </p>
          <div>
            <p className=" lg: text-sm font-serif">{description}</p>
          </div>
        </div>
      </div>

      {mobileCard ? (
        <div className="flex flex-row  gap-4 px-4 pb-6 transition-all duration-300 group-hover:scale-105 skew-x-10">
          <div className="w-1/2  overflow-hidden">
            <Image
              src={subImage1}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3  overflow-hidden">
            <Image
              src={subImage2}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3   overflow-hidden">
            <Image
              src={mainImage}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full  object-cover rounded-xl"
            />
          </div>
        </div>
      ) : (
        <div className="flex  transition-all duration-300 group-hover:scale-110">
          <div className="flex flex-col gap-5  skew-x-10 w-full  md:w-1/2">
            <div className="relative w-full aspect-[3/2] overflow-hidden -ml-5">
              <Image
                src={subImage1}
                alt={title}
                fill
                className=" bg-gray-200 object-cover rounded-xl"
              />
            </div>
            <div className="relative w-full aspect-[3/2] overflow-hidden -ml-5">
              <Image
                src={subImage2}
                alt={title}
                fill
                className="  bg-gray-200 object-cover rounded-xl"
              />
            </div>
          </div>
          <div
            className={`skew-x-10 w-full md:${mainView} aspect-[3/4] overflow-hidden -mr-10`}
          >
            <Image
              src={mainImage}
              alt={title}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
