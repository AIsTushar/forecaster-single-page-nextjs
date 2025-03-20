import Image from "next/image";

function Features() {
  return (
    <div className="w-full h-[1024px] py-8 px-12 bg-[#1A1A1A]">
      <h2 className="text-[64px] mb-[64px]">Features</h2>
      <div className="grid grid-cols-5 gap-6 w-full h-screen">
        <div className="relative col-span-2 row-span-1 w-full h-full rounded-md overflow-hidden">
          <Image
            src="/female driver.jpg"
            alt="Forecaster Logo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-6 left-6 flex flex-col gap-6 w-[80%]">
            <h3 className="w-2/3 text-[40px] leading-[1.1] tracking[-0.02em]">
              Instant Shot Breakdown
            </h3>
            <p className="w-2/3 font-normal leading-[1.1] tracking[-0.02em]">
              AI-driven insights like “Wind at 12 mph, trajectory optimal for
              birdies.”
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2 col-span-3 gap-6 h-full">
          {/* Second Card */}
          <div className="relative w-full h-[400px] rounded-md overflow-hidden bg-black">
            <div className="w-full h-full relative overflow-hidden">
              <Image
                src="/Headphones.jpg"
                alt="Forecaster Logo"
                height={1524}
                width={1524}
                priority
                className="absolute object-cover  scale-125 left-52 bottom-16"
              />
            </div>

            <div className="absolute top-36 left-6 flex flex-col gap-6 w-[80%]">
              <h3 className="w-[346px] text-[40px] leading-[1.1] tracking[-0.02em]">
                Real-time <br /> Audio Feedback
              </h3>
              <p className="w-[337px] h-[81px] leading-[1.5] ">
                Live feedback through your Bluetooth <br /> earbuds, tailored to
                your preferred tone: supportive, neutral, or downright snarky.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="flex items-end gap-8 w-full h-full rounded-md overflow-hidden bg-black pt-6 pl-6 pr-6">
            <div className="w-3/5 h-full relative">
              <Image
                src="/Mobile-mockup.png"
                layout="fill"
                alt="Forecaster Logo"
              />
            </div>

            <div className="flex flex-col gap-6 ">
              <h3 className="text-[40px] leading-[1.1] tracking[-0.02em]">
                Death By Data
              </h3>
              <p className="w-[250px] h-[108px] leading-[1.5] ">
                Every swing, slice, and missed putt is stored in the app for
                review, so you can relive your worst shots whenever you want.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
