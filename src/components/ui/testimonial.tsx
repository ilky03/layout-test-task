import { StarIcon } from "lucide-react";
import type { FC } from "react";

type TestimonialProps = {
  src: string;
  name: string;
  route: string;
  date: string;
  review: string;
  rating: number;
};

export const Testimonial: FC<TestimonialProps> = ({
  src,
  name,
  route,
  date,
  review,
  rating,
}) => {
  return (
    <article className="bg-white shadow-md rounded-[10px] py-7.5 px-5 flex flex-col">
      <div className="flex flex-row gap-4.5 mb-4.5">
        <img
          className="size-18 rounded-full object-cover"
          src={src}
          width={72}
          height={72}
          alt="Client"
        />
        <div>
          <h3 className="font-semibold text-2xl">{name}</h3>
          <p className="text-primary font-medium">{route}</p>
          <p className="text-muted">{date}</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <p>{review}</p>
        <div className="flex flex-row gap-0.5">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              key={index}
              className="size-3.5 text-primary"
              fill={index < rating ? "#4640DE" : "#FFF"}
            />
          ))}
        </div>
      </div>
    </article>
  );
};
