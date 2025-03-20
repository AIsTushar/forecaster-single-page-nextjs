import Image from "next/image";

function CTA() {
  return (
    <div className="h-auto w-auto flex gap-14">
      <button className="bg-gradient-to-r cursor-pointer flex gap-4 py-4 pl-8 pr-5 rounded-full from-[rgba(13,51,23,0.9)] to-[rgba(40,153,68,0.9)] border border-[#289944] shadow-[0px_0px_90px_0px_#289944B2]">
        Get Forecaster{" "}
        <Image src="GolfBall.svg" alt="Golf Ball" width={24} height={24} />
      </button>
      <button className="flex cursor-pointer gap-4 py-4 pl-8 pr-5 rounded-full bg-gradient-to-r from-[rgba(13,51,23,0.5)] via-transparent to-[rgba(40,153,68,0.5)] border border-[#289944] shadow-[0px_0px_90px_0px_#289944B2]">
        How it works{" "}
        <Image src="GolfBall.svg" alt="Golf Ball" width={24} height={24} />
      </button>
    </div>
  );
}

export default CTA;
