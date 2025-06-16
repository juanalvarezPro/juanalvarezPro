import React from "react";
import { Button } from "../ui/button";
import { GithubLogo } from "../icons";

const ButtonGithub = () => {
  return (
    <Button variant="outline" className="rounded-full shadow-none" size="icon">
      <GithubLogo className="h-5! w-5!" />
    </Button>
  );
};

export default ButtonGithub;
