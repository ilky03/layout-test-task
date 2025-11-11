import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

type MenuProps = PropsWithChildren<{
  className?: string;
}>;

export const Menu: FC<MenuProps> = ({ children, className }) => {
  return (
    <ul className={clsx("flex flex-row items-center gap-6", className)}>
      {children}
    </ul>
  );
};

type MenuLinkProps = PropsWithChildren<{
  href: string;
  active?: boolean;
}>;

export const MenuLink: FC<MenuLinkProps> = ({ href, active, children }) => {
  return (
    <li
      className={clsx(
        "font-semibold py-6 text-secondary",
        active && "text-primary! border-b-4 border-primary"
      )}
    >
      <a href={href}>{children}</a>
    </li>
  );
};
