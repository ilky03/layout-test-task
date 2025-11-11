import clsx from "clsx";
import type { LucideProps } from "lucide-react";
import type {
  FC,
  ForwardRefExoticComponent,
  PropsWithChildren,
  RefAttributes,
} from "react";

export type Icon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

type FeaturesListProps = PropsWithChildren<{
  className?: string;
}>;

export const FeaturesList: FC<FeaturesListProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx("flex flex-row flex-wrap items-center gap-8", className)}
    >
      {children}
    </div>
  );
};

type FeatureItemProps = {
  icon: Icon;
  title: string;
};

export const FeatureItem: FC<FeatureItemProps> = ({ icon: Icon, title }) => {
  return (
    <article className="grid grid-cols-[auto_1fr] items-center gap-2">
      <Icon className="text-primary size-12 h-full" />
      <h4 className="text-2xl font-extrabold">{title}</h4>
    </article>
  );
};
