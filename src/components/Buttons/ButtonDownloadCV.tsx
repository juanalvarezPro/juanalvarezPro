"use client";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useDownloadCV } from "@/src/hooks/useDownloadCV";
import { ButtonProps } from "@/src/types/ButtonProps";

const ButtonDownloadCV = ({ displayName }: ButtonProps) => {
  const { downloadCV } = useDownloadCV();
  return (
    <Button
      variant="outline"
      className="rounded-full shadow-none"
      size={`${displayName ? "icon" : "default"}`}
      onClick={downloadCV}
      title="Descargar hoja de vida"
    >
      <Download />
      <span className={`${displayName ? "hidden" : "block"}`}>
        Descargar CV
      </span>
    </Button>
  );
};

export default ButtonDownloadCV;
