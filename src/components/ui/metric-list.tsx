import type { FC, PropsWithChildren } from "react";
import type { Icon } from "./features-list";

export const MetricList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-8">
      {children}
    </div>
  );
};

type MetricItemProps = {
  icon: Icon;
  title: string;
  description: string;
};

export const MetricItem: FC<MetricItemProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-4">
      <div className="size-11 rounded-full bg-white grid place-items-center text-accent">
        <Icon />
      </div>
      <div>
        <p>
          <span className="text-secondary">{title}</span>
          <br />
          <strong>{description}</strong>
        </p>
      </div>
    </div>
  );
};
