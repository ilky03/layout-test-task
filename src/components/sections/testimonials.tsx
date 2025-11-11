import type { FC } from "react";
import { Button } from "../ui/button";
import avatarImage from "@/assets/images/julia-avatar.jpg";
import { Testimonial } from "../ui/testimonial";

const testimonials = [
  {
    name: "Ben Yardley",
    route: "Київ - Кишинів",
    date: "1 May 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
    src: avatarImage,
  },
  {
    name: "Craig Martin",
    route: "Львів - Париж",
    date: "1 May 2023",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    rating: 3,
    src: avatarImage,
  },
];

export const Testimonials: FC = () => {
  return (
    <section className="py-18 px-4 bg-[url(/src/assets/images/testimonials-background.png)] bg-cover">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div>
          <h2 className="font-extrabold text-5xl mb-5.5">
            Що <strong className="text-accent">кажуть люди?</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button className="rounded mt-10.5">Залишити відгук</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
