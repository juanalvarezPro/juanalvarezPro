import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { GithubLogo } from "../icons";

const ButtonGithub = () => {
  return (
    <Button asChild variant="outline" className="rounded-full shadow-none" size="icon">
      <Link href="https://github.com/JuanAlvarezzzDev" target="_blank">
        <GithubLogo className="h-5 w-5" />
      </Link>
    </Button>
  );
};

export default ButtonGithub;
