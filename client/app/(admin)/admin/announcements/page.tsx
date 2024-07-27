import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import CreateAnnouncement from "../../components/CreateAnnouncement";
import React from "react";
import { MembersProps } from "../../components/MembersCard";
import PageTitle from "../../components/PageTitle";
import { getManyAnnouncements } from "@/data/announcements";
import { columns } from "./columns";

type Props = {};

export default async function page({}: Props) {
  const announcements = await getManyAnnouncements();
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-wrap justify-between">
        <PageTitle title="Members" />
        <CreateAnnouncement
          title="Add a new announcement here"
          trigger="Add Announcement"
          desc="Create a new announcement made by our community"
        />
      </div>
      <DataTable columns={columns} data={announcements} />
    </div>
  );
}
