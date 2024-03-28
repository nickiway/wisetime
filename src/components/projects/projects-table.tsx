"use client";

import { useProjects } from "@/hooks/useProjects";
import { Types } from "mongoose";
import { DataTable } from "./data-table";
import { columns } from "@/components/projects/columns";

export const ProjectsTable = ({
  userId,
}: {
  userId: undefined | string | Types.ObjectId;
}) => {
  const data = useProjects(userId);
  return <DataTable columns={columns} data={data} />;
};
