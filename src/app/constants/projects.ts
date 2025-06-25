export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    {
        title: "ChurchSaaS - Administración de Iglesias Panama",
        description: "Plataforma administrativa para iglesias: tesorería, movimientos, ofrendas y reportes. Usada por 88+ congregaciones en Panamá. (Código privado / producto cerrado)",
        image: "/churchsaas.webp",
        technologies: ["Filament", "Livewire", "PHP", "PostgreSQL", "Redis"],
        liveUrl: "https://ipul.churchsaas.com/app/login",
        githubUrl: undefined,
    },
    {
        title: "Bigbot - Plataforma Robótica Infantil",
        description: "Plataforma educativa de robótica basada en Arduino Uno, usada en colegios de Medellín.",
        image: "/Bigbot.webp",
        technologies: ["C++", "Arduino Uno", "Vite", "VitePress"],
        liveUrl: "https://bigbot.bigtronica.tech/",
        githubUrl: "https://github.com/BigtronicaSAS/BigBot",
    },
    {
        title: "Maxpapas - Sistema POS Kiosco",
        description: "Software POS tipo kiosco para gestión de ventas y pedidos en Maxpapas. (Api Privada / producto cerrado)",
        image: "/maxpapas.webp",
        technologies: ["Laravel", "React", "MySQL", "PHP", "JavaScript", "HTML"],
        liveUrl: "",
        githubUrl: "https://github.com/JuanAlvarezzzDev/Maxpapas_client",
    },
];
