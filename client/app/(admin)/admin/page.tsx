import React from "react";
import PageTitle from "../components/PageTitle";
import { getManyEvents } from "@/data/events";
import { getManyAnnouncements } from "@/data/announcements";
import { getManyMembers } from "@/data/members";
import Card, { CardContent } from "../components/Card";
import { Calendar, Users } from "lucide-react";
import BarChart from "../components/BarChart";
import MembersCard, { SalesProps } from "../components/MembersCard";

const page = async () => {
  const events = await getManyEvents();
  const announcements = await getManyAnnouncements();
  const members = await getManyMembers();
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        <Card
          label="Total Members"
          amount={members.length}
          description="Current Members of our community"
          icon={Users}
        />
        <Card
          label="Active Events"
          amount={events.length}
          description="Ongoing events hosted by our community"
          icon={Calendar}
        />
        <Card
          label="Announcements"
          amount={announcements.length}
          description="Number of announcements made by our community"
          icon={Users}
        />
        <Card
          label="Members"
          amount={members.length}
          description="Members of our community"
          icon={Users}
        />
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <p className="p-4 font-semibold">Recently Added Members</p>
          <p className="text-sm text-gray-400">
            {" "}
            Beloved members of our community
          </p>
          {members.map((member: SalesProps, index: number) => (
            <MembersCard
              key={index}
              firstName={member.firstName}
              lastName={member.lastName}
              email={member.email}
              phoneNumber={member.phoneNumber}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
};

export default page;
