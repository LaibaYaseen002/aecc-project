import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex  justify-center items-center space-x-1">
      <Link href="/" className="block">
        <Image
          src="/images/new-logo.webp"
          alt="aecc logo"
          width={130}
          height={40}
          className="h-[40px] w-auto object-contain"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
