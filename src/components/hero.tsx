import AnimatedGridPattern from "./ui/animated-grid-pattern";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import SystemMessage from "./ui/SystemMessage";
import HeroMeImage from "./ui/HeroMeImage";
import { myContact } from "../app/constants/mycontact";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] w-[1200px]">
        <div className=" flex justify-center items-center flex-col">
          <div className="relative lg:absolute lg:top-0 lg:left-0 lg:m-10 hidden lg:block">
            <SystemMessage message="Tu negocio sigue estancado con un sistema que parece del 2005..." />
          </div>
          <HeroMeImage />
          <div className="relative m-5 lg:absolute  lg:top-0  lg:right-0 lg:m-10">
            <SystemMessage message="¿Tu empresa está aprovechando todo el potencial que la tecnología puede ofrecerle?" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <Button asChild size="default" className="text-xl" variant="outline">
            <a href={`mailto:${myContact.emailProfessional}`}>
              Contáctame <Mail className="ml-2 !h-5.5 !w-5.5" />
            </a>
          </Button>
          <a
            href={`https://wa.me/${myContact.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:underline"
          >
            ¿Prefieres WhatsApp? Escríbeme directo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
