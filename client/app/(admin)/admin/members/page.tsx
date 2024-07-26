import { DataTable } from "@/components/DataTable";
import { getManyMembers } from "@/data/members";
import { ColumnDef } from "@tanstack/react-table";

import React from "react";
import { MembersProps } from "../../components/MembersCard";
import PageTitle from "../../components/PageTitle";
import CreateButton from "../../components/CreateMember";

type Props = {};

export default async function page({}: Props) {
  const members = await getManyMembers();
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-wrap justify-between">
        <PageTitle title="Members" />
        <CreateButton
          title="Add a new member here"
          trigger="Add member"
          desc="Create a new member to join our community"
        />
      </div>
      <DataTable columns={columns} data={members} />
    </div>
  );
}

export const columns: ColumnDef<MembersProps>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
];
