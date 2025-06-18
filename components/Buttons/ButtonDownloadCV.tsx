"use client"
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const MOBILE_PDF_URL = "/cv-mobile.pdf";
const DESKTOP_PDF_URL = "/CV.pdf";

function isMobile() {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
}
interface ButttonDowloadProps {
    ignoreMobileDetection?: boolean;
    forceMobile?: boolean; // Opcional: para forzar mobile si lo deseas
}

const ButtonDownloadCV = ({
    ignoreMobileDetection = false,
    forceMobile = false,
}: ButttonDowloadProps) => {
    const [mobile, setMobile] = React.useState(false);

    useEffect(() => {
        if (ignoreMobileDetection) {
            setMobile(forceMobile);
            return;
        }
        setMobile(isMobile());
        const handleResize = () => setMobile(isMobile());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [ignoreMobileDetection, forceMobile]);

    const handleDownload = () => {
        const url = mobile ? MOBILE_PDF_URL : DESKTOP_PDF_URL;
        const link = document.createElement("a");
        link.href = url;
        link.download = url.split("/").pop() || "CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button variant="outline" size={`${mobile ? "icon" : "default"}`} className="rounded-full" onClick={handleDownload} title="Descargar hoja de vida">
            <Download />
            {!mobile && <span className="ml-2">Descargar CV</span>}
        </Button>
    );
};

export default ButtonDownloadCV;
