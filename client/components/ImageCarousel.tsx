import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full  overflow-x-hidden relative"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/assets/images/memory.jpg"
              width={800}
              height={800}
              alt="shared memories"
            />
          </div>
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/assets/images/memory3.jpg"
              width={800}
              height={800}
              alt="shared memories"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/assets/images/memory4.jpg"
              width={800}
              height={800}
              alt="shared memories"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/assets/images/memory5.jpg"
              width={800}
              height={800}
              alt="shared memories"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/assets/images/memory6.jpg"
              width={800}
              height={800}
              alt="shared memories"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute  left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer xl:size-12" />
      <CarouselNext className="absolute right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer  xl:size-12" />
    </Carousel>
  );
}
