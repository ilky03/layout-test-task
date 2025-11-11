import type { ComponentProps, FC } from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  asChild?: boolean;
};

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  className,
  asChild = false,
  ...buttonProps
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "flex flex-row items-center justify-center px-6 py-3 font-bold",
        {
          "bg-primary text-white": variant === "primary",
          "text-primary border-2 border-primary": variant === "outline",
          "text-primary": variant === "ghost",
        },
        className
      )}
      {...buttonProps}
    />
  );
};
