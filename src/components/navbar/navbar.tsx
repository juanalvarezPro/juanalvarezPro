import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ButtonGithub from "../Buttons/ButtonGithub";
import ButtonDownloadCV from "../Buttons/ButtonDownloadCV";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 h-16 w-full bg-background">
      <div className="max-w-screen-md h-full flex items-center justify-between mx-auto px-3">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <ButtonGithub displayName={true}/>
          <ButtonDownloadCV displayName={true}/>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
