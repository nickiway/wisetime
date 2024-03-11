"use client";

import { cn } from "@/lib/utils";
import { Types } from "mongoose";

import { TagType } from "@/db/models/project/Tag";

import { Badge } from "@/components/ui/badge";
import { deleteTag } from "@/actions/tag";

import { useAppDispatch } from "@/redux/hooks";
import { removeTag } from "@/redux/slices/tagsSlice";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
    <AlertDialog>
      <AlertDialogTrigger asChild>
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
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Do you want to delete this tag?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your tag.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => submitDelete(_id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
