import Heading from "@/components/Heading";
import { Card, CardContent } from "@/components/ui/card";
import { getManyAnnouncements } from "@/data/announcements";
import { formatDate } from "@/services/formatDate";
import { CalendarIcon, ClockIcon } from "lucide-react";
import React from "react";
type Announcement = {
  name: string;
  description: string;
  date: Date;
};

const page = async () => {
  const data: Announcement[] = await getManyAnnouncements();
  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/assets/images/announcement-bg.jpg')" }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-5xl">
          <Heading
            center
            title="Annoucments"
            subtitle="Check out any news and annoucments ."
          />
        </div>
      </div>

      <div>
        <section className="py-12 md:py-32 xl:px-14">
          <div className=" mx-auto flex justify-between items-center mb-8 px-4  ">
            <Heading
              title="Announcments"
              subtitle="Check out any news and announcements."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 ">
            {data.map((announcement: Announcement) => (
              <Card>
                <CardContent>
                  <Heading
                    title={announcement.name}
                    subtitle={announcement.description}
                  />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{formatDate(announcement.date).date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ClockIcon className="w-4 h-4" />
                    <span>{formatDate(announcement.date).time}</span>
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
