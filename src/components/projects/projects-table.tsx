"use client";

import { Types } from "mongoose";
import { useProjects } from "@/hooks/useProjects";

export const ProjectsTable = ({
  userId,
}: {
  userId: Types.ObjectId | string | undefined;
}) => {
  const projets = useProjects(userId);
  return <div>table</div>;
};
