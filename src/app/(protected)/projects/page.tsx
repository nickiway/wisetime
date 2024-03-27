"use server";

import { auth } from "@/auth";
import { AddProjectForm } from "@/components/projects/add-project-form";
import { DataTable } from "@/components/projects/data-table";

export default async function Tasks() {
  const session = await auth();

  return (
    <div className="container">
      <AddProjectForm userId={session?.user?.id} />
      <DataTable userId={session?.user?.id} />
    </div>
  );
}
