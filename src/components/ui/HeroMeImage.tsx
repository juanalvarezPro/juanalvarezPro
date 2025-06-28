import Image from "next/image";
import React from "react";

const HeroMeImage = () => {
  return (
    <section
      className="w-100 sm:w-150 aspect-square flex flex-col justify-end relative"
      aria-label="Perfil personal"
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/backgroundHeroMe.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      >
        <Image
          src="/heroMe.webp"
          alt="Foto de perfil de Juan Alvarez"
          className="object-cover mask_image"
          fill
          priority
        />
      </div>
      <footer className="relative z-10 w-full pb-4 px-4 lg:pb-8">
        <h1 className="text-center font-bold  sm:leading-[0.9] mb-1">
          <span className="block text-5xl sm:text-6xl text-[#dbdbdb] opacity-40">
            Autenticidad
          </span>
          <span
            className="relative z-40 text-6xl sm:text-7xl"
            style={{
              background: "linear-gradient(90deg, #ff8a00, #e52e71)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              opacity: 1,
            }}
          >
            Full Stack
          </span>
          <span className="block text-5xl sm:text-6xl text-[#dbdbdb] opacity-20">
            Tecnología
          </span>
        </h1>
      </footer>
    </section>
  );
};

export default HeroMeImage;
