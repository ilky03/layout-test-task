import type { FC } from "react";
import mainLogo from "@/assets/icons/main-logo.svg";
import { Button } from "../components/ui/button";
import { Menu, MenuLink } from "../components/ui/menu";

export const Nav: FC = () => {
  return (
    <nav className="container mx-auto flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <img
          src={mainLogo}
          alt="Sprinters Logo"
          width={160}
          height={48}
          className="mr-12"
        />
        <Menu>
          <MenuLink href="#">Головна</MenuLink>
          <MenuLink href="#">Перевізникам</MenuLink>
          <MenuLink href="#">Про нас</MenuLink>
          <MenuLink href="#" active>
            Профіль перевізника
          </MenuLink>
        </Menu>
      </div>
      <div className="flex flex-row items-center h-full">
        <Button variant="ghost" asChild>
          <a href="#">Створити профіль</a>
        </Button>
        <Button asChild>
          <a href="#">Увійти</a>
        </Button>
      </div>
    </nav>
  );
};
