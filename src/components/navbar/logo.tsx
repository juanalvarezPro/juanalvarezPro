import Image from "next/image";

export const Logo = () => (
  <div
    className="flex items-center space-x-2 font-bold text-basic transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
    aria-label="Juan Alvarez Pro Logo"
  >
    <div className=" rounded-full overflow-hidden flex-shrink-0 shadow">
      <Image
        src="/Logo.webp"
        alt="logo juanalvarez.pro"
        width={30}
        height={30}
        priority
      />
    </div>
    <div className="flex gap-1.5">
      <span className="font-bold" itemProp="name">
        Juan Alvarez
      </span>
      <span
        className=" text-[hsl(200,2%,63%)]"
        itemProp="dominio pro"
      >
        Pro
      </span>
    </div>
  </div>
);
