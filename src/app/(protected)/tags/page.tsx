import { auth } from "@/auth";

import { AddTagsForm } from "@/components/tags/add-tags-form";
import { TagsList } from "@/components/tags/tagsList";

export default async function TagsPage() {
  const session = await auth();

  return (
    <div className="container">
      <AddTagsForm userId={session?.user?.id} />
      <TagsList userId={session?.user?.id ?? ""} />
    </div>
  );
}
