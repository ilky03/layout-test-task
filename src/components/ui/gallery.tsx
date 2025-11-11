import clsx from "clsx";
import type { ComponentProps, FC, PropsWithChildren } from "react";

export const Gallery: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

export const GalleryImage: FC<ComponentProps<"img">> = ({
  className,
  ...imageProps
}) => {
  return (
    <img
      className={clsx("h-60 w-full object-cover object-[50%_75%]", className)}
      height={240}
      {...imageProps}
    />
  );
};
