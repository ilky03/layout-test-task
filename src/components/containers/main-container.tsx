import clsx from "clsx";
import type { FC, PropsWithChildren, ReactNode } from "react";

type MainContainerProps = PropsWithChildren<{
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}>;

export const MainContainer: FC<MainContainerProps> = ({
  title,
  description,
  children,
  action,
  className,
}) => {
  return (
    <section
      className={clsx(
        "container mx-auto px-4 flex flex-col gap-4 py-18",
        className
      )}
    >
      <div>
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-[32px] font-extrabold">{title}</h3>
          {action}
        </div>
        {description && <p className="text-secondary mt-2">{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
};
