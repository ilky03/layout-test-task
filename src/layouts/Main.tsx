import type { FC } from "react";
import { Testimonials } from "@/components/sections/testimonials";
import { Service } from "@/components/sections/service";
import { Team } from "@/components/sections/team";
import { Trips } from "@/components/sections/trips";
import { Calendar } from "@/components/sections/calendar";
import { Description } from "@/components/sections/description";

export const Main: FC = () => {
  return (
    <main>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:gap-16">
        <Description />
        <aside>
          <Trips />
          <Calendar />
        </aside>
      </div>
      <Team />
      <Service />
      <Testimonials />
    </main>
  );
};
