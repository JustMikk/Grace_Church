import React from "react";

export type MembersProps = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export default function MembersCard(props: MembersProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <img
            width={200}
            height={200}
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${props.firstName}`}
            alt="avatar"
          />
        </div>
        <div className="text-sm">
          <p>{props.firstName + " " + props.lastName}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto">
            {props.email}
          </div>
        </div>
      </section>
      <p>{props.phoneNumber}</p>
    </div>
  );
}
