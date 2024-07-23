import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="">
      <section className=" py-12 md:py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-32 items-center px-4 sm:px-6">
          <div>
            <h1 className=" text-3xl   xl:text-5xl font-bold mb-4 lg:mb-12 text-white">
              Welcome to Grace Church
            </h1>
            <p className="text-white mb-6 lg:mb-16">
              We are a community of believers dedicated to worshiping God,
              growing in faith, and serving our local and global communities.
              Join us as we celebrate the love and grace of Jesus Christ.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="text-lg font-medium"
              >
                <Link href="#">Upcoming Events</Link>
              </Button>
              <Button asChild size="lg" className="text-lg font-normal">
                <Link href="#">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-lg font-normal sm:flex lg:hidden xl:flex"
              >
                <Link href="#">
                  Take me to church{" "}
                  <ChevronRightIcon className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              width={600}
              height={400}
              src="/assets/images/Hero-section-img.jpg"
              alt="Church"
              className="rounded-lg "
            />
          </div>
        </div>
        di
      </section>
      <section className="py-12 md:py-32 bg-black xl:px-14">
        <div className=" mx-auto flex justify-between items-center mb-8 px-4  ">
          <Heading
            title="Upcoming Events"
            subtitle="Check out our upcoming services and events."
          />
          <Button asChild variant="secondary">
            <Link href="#" className="text-lg">
              See More
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
          <Card>
            <CardContent>
              <Heading
                title="Sunday Service"
                subtitle="Join us for our weekly Sunday service at 10:00 AM."
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>August 5, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>6:00 PM - 8:00 PM</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading
                title="Sunday Service"
                subtitle="Join us for our weekly Sunday service at 10:00 AM."
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>August 5, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>6:00 PM - 8:00 PM</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading
                title="Sunday Service"
                subtitle="Join us for our weekly Sunday service at 10:00 AM."
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>August 5, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>6:00 PM - 8:00 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="py-12 md:py-24 w-full xl:px-14">
        <div className="px-4">
          <Heading
            title="Shared Memories"
            subtitle="Take a look at some of our favorite moments from the past."
          />
        </div>
        <ImageCarousel />
      </section>
      <section className="py-12 md:py-24 xl:px-14">
        <hr className="border-gray-300 mb-12" />
        <div className=" mx-auto flex justify-between items-center mb-8 px-4">
          <Heading
            title="Announcements"
            subtitle="Check out our latest announcements."
          />
          <Button asChild variant="secondary">
            <Link href="#" className="text-lg">
              See More
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <Card>
            <CardContent>
              <Heading
                title="Sunday Service"
                subtitle="Join us for our weekly Sunday service at 10:00 AM."
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>July 30, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>7:00 PM - 8:30 PM</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading
                title="Volunteering"
                subtitle="We need volunteers to help with our upcoming events."
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>August 12, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>9:00 AM - 3:00 PM</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Heading
                title="Baptism"
                subtitle="Join us as we celebrate the baptism of new believers"
              />
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarIcon className="w-4 h-4" />
                <span>September 3, 2023</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <ClockIcon className="w-4 h-4" />
                <span>11:00 AM - 12:30 PM</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default page;
