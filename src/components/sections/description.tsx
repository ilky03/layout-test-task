import type { FC } from "react";
import { MainContainer } from "../containers/main-container";
import { Button } from "../ui/button";
import { FacebookIcon, TwitterIcon } from "lucide-react";
import { Gallery, GalleryImage } from "../ui/gallery";

import busImage1 from "@/assets/images/gallery/bus-1.jpg";
import busImage2 from "@/assets/images/gallery/bus-2.jpg";
import busImage3 from "@/assets/images/gallery/bus-3.jpg";

export const Description: FC = () => {
  return (
    <MainContainer
      title="Опис перевізника"
      description="Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud."
    >
      <div className="mt-6 mb-10">
        <h3 className="font-extrabold text-[32px] mb-4">Ми у соц. мережах</h3>
        <div className="flex flex-row flex-wrap items-center gap-4">
          <Button variant="outline" className="gap-4 p-2!">
            <TwitterIcon />
            <span>twitter.com/stripe</span>
          </Button>
          <Button variant="outline" className="gap-4 p-2!">
            <FacebookIcon />
            <span>facebook.com/StripeHQ</span>
          </Button>
        </div>
      </div>
      <Gallery>
        <GalleryImage src={busImage1} alt="Bus on the beach" />
        <GalleryImage src={busImage2} alt="Bus on the winter road" />
        <GalleryImage src={busImage3} alt="Bus on the summer road" />
      </Gallery>
    </MainContainer>
  );
};
