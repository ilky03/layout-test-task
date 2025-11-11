import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

type BreadcrumbProps = PropsWithChildren<{
  className?: string;
}>;

export const Breadcrumb: FC<BreadcrumbProps> = ({ children, className }) => {
  return (
    <nav className={className}>
      <ol className="flex flex-row items-center gap-2 text-muted [&_li]:last:hidden">
        {children}
      </ol>
    </nav>
  );
};

type BreadcrumbItemProps = {
  href: string;
  children: string;
  active?: boolean;
};

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  href,
  children,
  active,
}) => {
  return (
    <>
      <li className={clsx(active && "text-foreground")}>
        <a href={href}>{children}</a>
      </li>
      <li aria-hidden="true">/</li>
    </>
  );
};
