import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { GithubLogo } from "../icons";
import { ButtonProps } from "@/src/types/ButtonProps";

const ButtonGithub = ({ displayName }: ButtonProps) => {
  return (
    <Button asChild variant="outline" className="rounded-full shadow-none" size={`${displayName ? "icon" : "default"}`}>
      <Link href="https://github.com/juanalvarezPro" target="_blank">
        <GithubLogo className="h-5 w-5" />
        <span className={`${displayName ? "hidden" : "block"}`}>Ver Github</span>
      </Link>
    </Button>
  );
};

export default ButtonGithub;
