"use client";

import { useProjects } from "@/hooks/useProjects";
import { Types } from "mongoose";
import { ProjectsTable } from "./projects-table";
import { columns } from "@/components/projects/columns";

export const DataTable = ({
  userId,
}: {
  userId: undefined | string | Types.ObjectId;
}) => {
  const data = useProjects(userId);
  return <ProjectsTable columns={columns} data={data} />;
};
