import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/" className="block">
        <Image
          src="/images/new-logo.webp"
          alt="aecc logo"
          width={130}
          height={40}
          className="h-[36px] w-auto sm:h-[40px]"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
