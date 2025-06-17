import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";
const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              Sobre mi
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              <span className="text-[hsl(197,84%,88%)]">Creatividad</span>, tecnología y <span className="text-[hsl(142,84%,88%)]">pasión</span> por aprender
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              ¡Hola! Soy Milo, tengo {new Date().getFullYear() - 2000} años. Soy desarrollador full-stack, apasionado por la robótica y la música. Me motiva crear soluciones innovadoras, compartir conocimientos y conectar con personas. Orgullosamente pentecostal 🔥
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <GithubLogo />
                Ver Github
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/juanalvarez_aboutme.webp" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
