import Image from "next/image";
import Frame from "./Frame";
import CTA from "./CTA";

function Hero() {
  return (
    <div className="flex py-24 items-center justify-center">
      <div className="flex flex-col w-[641px] h-[640px] gap-[80px]">
        <div className="w-[641px] h-[318px]">
          <h1 className="font-semibold text-8xl leading-[110%] tracking-[-0.02em]">
            Real-time golf analysis from the future
          </h1>
        </div>

        <Frame />
        <CTA />
      </div>
      <div className="relative w-[641px] h-[640px] gap-[80px]">
        <Image
          src="/Heroimage.png"
          alt="Forecaster Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  );
}

export default Hero;
