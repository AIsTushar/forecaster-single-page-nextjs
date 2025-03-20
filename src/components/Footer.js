import Image from "next/image";

function Footer() {
  return (
    <div className="p-16 flex flex-col gap-10">
      <div className="flex items-center gap-12">
        <Image
          src="/logo icon.svg"
          alt="Logo"
          height={256}
          width={256}
          className=""
        />
        <p className="text-[204px]">Forecaster</p>
      </div>

      <div className="p-4 rounded-md bg-white/15 flex justify-between">
        <div className="flex gap-6 opacity-[90%]">
          <Image src="/instagram.svg" alt="Instragram" width={24} height={24} />
          <Image src="/x.svg" alt="Instragram" width={24} height={24} />
          <Image src="/youtube.svg" alt="Instragram" width={24} height={24} />
        </div>
        <p className="leading-[130%] tracking-[1%] opacity-[89%]">
          © 2025 Flux Academy
        </p>
      </div>
    </div>
  );
}

export default Footer;
