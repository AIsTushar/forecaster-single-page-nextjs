import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="w-full h-36 py-8 px-12">
      <div className="flex items-center justify-between h-[72px] rounded-md py-4 px-6 bg-white/15 backdrop-blur-xl ">
        <Image src="/logo.svg" alt="Forecaster Logo" width={205} height={40} />

        <nav className="flex items-center gap-24 text-sm ">
          <Link href="/">Features</Link>
          <Link href="/">Modes</Link>
          <Link href="/">Membership</Link>
          <Link href="/">FAQ</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
