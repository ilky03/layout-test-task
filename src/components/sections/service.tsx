import type { FC } from "react";
import { MainContainer } from "../containers/main-container";
import { FeaturesList, FeatureItem } from "../ui/features-list";
import {
  FanIcon,
  HandHeart,
  MonitorIcon,
  SofaIcon,
  ToiletIcon,
  WifiIcon,
} from "lucide-react";

const features = [
  { icon: FanIcon, title: "Кондиціонер" },
  { icon: WifiIcon, title: "Wi-Fi" },
  { icon: MonitorIcon, title: "TV" },
  { icon: ToiletIcon, title: "Туалет" },
  { icon: SofaIcon, title: "Зручні сидіння" },
  { icon: HandHeart, title: "Перевозимо тварин" },
];

export const Service: FC = () => {
  return (
    <MainContainer
      title="Сервіс"
      description="Найкращі умови для вашого комфорту"
      className="container mx-auto"
    >
      <FeaturesList className="mt-2">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </FeaturesList>
    </MainContainer>
  );
};
