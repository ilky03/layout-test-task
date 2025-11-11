import type { FC } from "react";
import { AsideContainer } from "../containers/aside-container";

import franceFlagImage from "@/assets/images/flags/france.png";
import italyFlagImage from "@/assets/images/flags/italy.png";
import germanyFlagImage from "@/assets/images/flags/germany.png";
import netherlandsFlagImage from "@/assets/images/flags/netherlands.png";
import spainFlagImage from "@/assets/images/flags/spain.png";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";

const countries = [
  {
    src: franceFlagImage,
    title: "Франція",
  },
  {
    src: italyFlagImage,
    title: "Італія",
  },
  {
    src: germanyFlagImage,
    title: "Німеччина",
  },
  {
    src: netherlandsFlagImage,
    title: "Нідерланди",
  },
  {
    src: spainFlagImage,
    title: "Іспанія",
  },
];

export const Trips: FC = () => {
  return (
    <AsideContainer title="Обслуговуємо країни" className="pb-0">
      <div className="flex flex-col gap-3.5">
        {countries.map((country, index) => (
          <TripItem key={index} {...country} />
        ))}
      </div>
      <Button variant="ghost" className="gap-4 p-0! my-6">
        <span>Усі країни</span>
        <ChevronDownIcon />
      </Button>
      <hr className="border-foreground/30" />
    </AsideContainer>
  );
};

type TripItemProps = {
  src: string;
  title: string;
};

const TripItem: FC<TripItemProps> = ({ src, title }) => {
  return (
    <article className="flex flex-row gap-4">
      <img src={src} alt={title} width={42} height={32} />
      <h4>{title}</h4>
    </article>
  );
};
