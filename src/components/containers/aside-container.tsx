import clsx from "clsx";
import type { PropsWithChildren, FC } from "react";

type AsideContainerProps = PropsWithChildren<{
  title: string;
  className?: string;
}>;

export const AsideContainer: FC<AsideContainerProps> = ({
  children,
  title,
  className,
}) => {
  return (
    <section className={clsx("flex flex-col gap-6 py-18 px-4", className)}>
      <h3 className="text-[32px] font-extrabold">{title}</h3>
      <div>{children}</div>
    </section>
  );
};
