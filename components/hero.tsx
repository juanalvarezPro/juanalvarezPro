import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

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
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Desarrollador Full Stack & Maker Creativo
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          <span className="text-[hsl(197,84%,88%)]">Impulsa tu Negocio</span>{" "}
          con <span className="text-primary">Soluciones Digitales</span> y{" "}
          <span className=" text-[hsl(142,84%,88%)]">Tecnología Embebida</span>{" "}
          a la medida
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-justify">
          <span
            className="block mb-4 text-2xl text-primary font-light text-center"
            style={{ fontFamily: 'Caveat' }}
          >
            ¿Tu software te limita?
          </span>
          ¡Yo te ayudo a{" "}
          <span className="font-semibold text-primary">romper las barreras!</span>:
          desarrollo{" "}
          <span className="font-semibold text-[hsl(197,84%,88%)]">
            aplicaciones robustas
          </span>
          ,{" "}
          <span className="font-semibold text-[hsl(142,84%,88%)]">
            automatizo procesos
          </span>{" "}
          y conecto el <span className="font-semibold">mundo físico</span> con
          el <span className="font-semibold">digital</span> para que tu empresa{" "}
          <span className="font-bold">crezca sin límites</span>
          . ¡Hablemos de cómo puedo{" "}
          <span className="font-semibold text-[hsl(264,84%,88%)]">
            resolver tus desafíos tecnológicos
          </span>
          !
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" variant={"outline"}>
            Descubre mi trabajo{" "}
            <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
