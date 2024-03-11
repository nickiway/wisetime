"use client";

import { cn } from "@/lib/utils";
import { Types } from "mongoose";

import { TagType } from "@/db/models/project/Tag";

import { Badge } from "@/components/ui/badge";
import { deleteTag } from "@/actions/tag";

import { useAppDispatch } from "@/redux/hooks";
import { removeTag } from "@/redux/slices/tagsSlice";

import { AlertButtonWrapper } from "@/components/shared/alert-button-wrapper";

interface TagBadgeProps extends TagType {
  className: string;
}

export const TagBadge = ({
  color,
  textColor,
  title,
  className,
  _id,
}: TagBadgeProps) => {
  const dispatch = useAppDispatch();

  const submitDelete = async (_id: Types.ObjectId) => {
    const response = await deleteTag(_id);

    if (!!response?.deletedCount) dispatch(removeTag(_id));
  };

  return (
    <AlertButtonWrapper
      actionFunction={() => submitDelete(_id)}
      title="Do you want to delete this tag?"
      description="This action cannot be undone. This will permanently delete your tag."
    >
      <Badge
        className={cn(
          "w-fit px-5 py-2 cursor-pointer hover:opacity-60",
          className
        )}
        style={{ backgroundColor: color, color: textColor }}
        variant={"default"}
      >
        {title}
      </Badge>
    </AlertButtonWrapper>
  );
};
