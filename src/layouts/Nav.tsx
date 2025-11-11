import type { FC } from "react";
import mainLogo from "@/assets/icons/main-logo.svg";
import { Button } from "../components/ui/button";
import { Menu, MenuLink } from "../components/ui/menu";
import { MenuIcon, UserIcon } from "lucide-react";

export const Nav: FC = () => {
  return (
    <nav className="flex container mx-auto flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-4 lg:gap-0 p-2 lg:p-0 flex-1 w-full">
        {/* TODO: Link to Menu */}
        <Button className="block lg:hidden">
          <MenuIcon />
        </Button>

        <img
          src={mainLogo}
          alt="Sprinters Logo"
          width={160}
          height={48}
          className="mx-auto md:mx-0 md:mr-12"
        />

        <Menu className="hidden lg:flex">
          <MenuLink href="#">Головна</MenuLink>
          <MenuLink href="#">Перевізникам</MenuLink>
          <MenuLink href="#">Про нас</MenuLink>
          <MenuLink href="#" active>
            Профіль перевізника
          </MenuLink>
        </Menu>
      </div>

      {/* TODO: Link to the next div and move to a separate component  */}
      <Button variant="ghost" className="block md:hidden">
        <UserIcon />
      </Button>

      <div className="hidden md:flex flex-row items-center h-full gap-4">
        <Button variant="ghost" asChild>
          <a href="#">Створити профіль</a>
        </Button>
        <div className="h-12 w-px bg-foreground/30" />
        <Button asChild>
          <a href="#">Увійти</a>
        </Button>
      </div>
    </nav>
  );
};
