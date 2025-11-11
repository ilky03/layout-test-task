import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb";
import type { FC } from "react";
import busImage from "@/assets/images/bus-header.png";
import { Button } from "@/components/ui/button";
import {
  Building2Icon,
  BusIcon,
  FlameIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  UsersRoundIcon,
} from "lucide-react";
import { MetricItem, MetricList } from "@/components/ui/metric-list";

const metrics = [
  {
    icon: FlameIcon,
    title: "На ринку від:",
    description: "Травень 31, 2011",
  },
  {
    icon: UsersRoundIcon,
    title: "Перевезення пасажирів",
    description: "4000+",
  },
  {
    icon: BusIcon,
    title: "Автопарк",
    description: "8 бусів",
  },
  {
    icon: MapPinIcon,
    title: "Обслуговуємо",
    description: "8 країн",
  },
  {
    icon: Building2Icon,
    title: "Місто",
    description: "Львів",
  },
];

export const Header: FC = () => {
  return (
    <header className="bg-[#F8F8FD] bg-[url(/src/assets/images/header-background.png)] bg-cover pb-18 px-4">
      <div className="container mx-auto">
        <Breadcrumb className="py-10">
          <BreadcrumbItem href="#">Головна</BreadcrumbItem>
          <BreadcrumbItem href="#">Профіль перевізника</BreadcrumbItem>
          <BreadcrumbItem href="#" active>
            Stripe
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
          <img
            className="size-43 rounded-full object-cover"
            src={busImage}
            alt="Red truck"
            width={172}
            height={172}
          />
          <div>
            <div className="flex flex-row items-center gap-3">
              <h2 className="text-5xl font-extrabold">Stripe</h2>
              <button className="border border-primary text-primary px-3 py-1 cursor-pointer">
                43 Поїздок
              </button>
            </div>

            <div className="flex flex-row flex-wrap gap-8 mt-3 mb-6">
              <Button
                variant="ghost"
                asChild
                className="gap-px p-0! justify-start!"
              >
                <a href="#">
                  <GlobeIcon />
                  <span>https://stripe.com</span>
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="gap-px p-0! justify-start!"
              >
                <a href="tel:+380735555555">
                  <PhoneIcon />
                  <span>+38 (073) 555 55 55</span>
                </a>
              </Button>
            </div>

            <MetricList>
              {metrics.map((metric, index) => (
                <MetricItem key={index} {...metric} />
              ))}
            </MetricList>
          </div>
        </div>
      </div>
    </header>
  );
};
