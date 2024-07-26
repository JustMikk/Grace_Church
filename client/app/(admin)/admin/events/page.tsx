import { DataTable } from "@/components/DataTable";
import { getManyMembers } from "@/data/members";
import { ColumnDef } from "@tanstack/react-table";

import React from "react";
import { MembersProps } from "../../components/MembersCard";
import PageTitle from "../../components/PageTitle";
import CreateButton from "../../components/CreateMember";
import { getManyEvents } from "@/data/events";
import CreateEvent from "../../components/CreateEvent";

type Props = {};

export default async function page({}: Props) {
  const events = await getManyEvents();
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-wrap justify-between">
        <PageTitle title="Members" />
        <CreateEvent
          title="Add a new event here"
          trigger="Add Event"
          desc="Create a new event hosted by our community"
        />
      </div>
      <DataTable columns={columns} data={events} />
    </div>
  );
}

export const columns: ColumnDef<MembersProps>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "startDate",
    header: "Starting Date",
  },
  {
    accessorKey: "endDate",
    header: "Ending Date",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
