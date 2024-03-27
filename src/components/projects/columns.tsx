"use client";

import { ticksToTime } from "@/utils/date-time";
import { ColumnDef } from "@tanstack/react-table";

import { IProject } from "@/types/project";
import { IUser } from "@/types/user";
import { ITag } from "@/types/tag";

import { MoreHorizontal } from "lucide-react";

import { UserAvatar } from "../shared/user-avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<IProject>[] = [
  {
    accessorKey: "createdBy",
    header: () => <p className="text-center">Created By</p>,
    cell: ({ row }) => {
      const { image, name } = row.getValue("createdBy") as IUser;
      return (
        <div className="flex justify-center">
          <UserAvatar imageUri={image} imageAlt={name} />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => {
      const tags = row.getValue("tags") as ITag[];
      return tags.map((tag) => <div key={tag._id}>{tag.title}</div>);
    },
  },
  {
    accessorKey: "totalTime",
    header: "Total Time",
    cell: ({ row }) => {
      const totalTicks = row.getValue("totalTime") as number;
      return <span>{ticksToTime(totalTicks)}</span>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
