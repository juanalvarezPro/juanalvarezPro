import Image from "next/image";

export const Logo = () => (
  <div
    className="flex items-center space-x-2 font-bold text-basic transition-transform duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
    aria-label="Juan Alvarez Pro Logo"
  >
    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 shadow">
      <Image
        src="/juanalvarez_avatar.webp"
        alt="Juan Alvarez Avatar"
        width={40}
        height={40}
        priority
      />
    </div>
    <div className="flex gap-1.5">
      <span className="font-bold" itemProp="name">
        Juan Alvarez
      </span>
      <span
        className="text-muted-foreground relative after:content-[''] after:block after:h-[2px] after:bg-muted-foreground after:opacity-30 after:rounded-full after:w-full after:absolute after:left-0 after:bottom-0"
        itemProp="dominio pro"
      >
        Pro
      </span>
    </div>
  </div>
);
