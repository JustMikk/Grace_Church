import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getManyEvents } from "@/data/events";
import { formatDate } from "@/services/formatDate";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Event = {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: "UPCOMING" | "ONGOING" | "COMPLETED" | "CANCELLED";
};

const page = async () => {
  const data: Event[] = await getManyEvents();
  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/assets/images/event-bg.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-5xl">
          <Heading
            center
            title="Events"
            subtitle="Check out our upcoming services and events."
          />
        </div>
      </div>

      <div>
        <section className="py-12 md:py-32 xl:px-14">
          <div className=" mx-auto flex justify-between items-center mb-8 px-4  ">
            <Heading
              title="Events"
              subtitle="Check out our upcoming, ongoing and past services and events."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
            {data.map((event: Event) => (
              <Card>
                <CardContent>
                  <Heading title={event.name} subtitle={event.description} />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>
                      {formatDate(event.startDate).date} -{" "}
                      {formatDate(event.endDate).date}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ClockIcon className="w-4 h-4" />
                    <span>
                      {formatDate(event.startDate).time} -{" "}
                      {formatDate(event.endDate).time}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
