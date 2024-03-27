"use server";

import { auth } from "@/auth";
import { AddProjectForm } from "@/components/projects/add-project-form";
import { ProjectsTable } from "@/components/projects/projects-table";

export default async function Tasks() {
  const session = await auth();

  return (
    <div className="container">
      <AddProjectForm userId={session?.user?.id} />
      <ProjectsTable userId={session?.user?.id} />
    </div>
  );
}
