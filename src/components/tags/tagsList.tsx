"use client";

import { Types } from "mongoose";
import { useEffect } from "react";

import { fetchTagsByUserId, removeAll } from "@/redux/slices/tagsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { deleteAll } from "@/actions/tag";

import { TagBadge } from "@/components/tags/tagBadge";
import { Button } from "@/components/ui/button";
import { AlertButtonWrapper } from "@/components/shared/alert-button-wrapper";
import { useTags } from "@/hooks/useTags";

interface TagsListProps {
  userId: Types.ObjectId;
}

export const TagsList = ({ userId }: TagsListProps) => {
  const dispatch = useAppDispatch();
  const entities = useTags(userId);

  const deleteAllTags = async (userId: Types.ObjectId) => {
    const response = await deleteAll(userId);

    if (response?.deletedCount !== 0) dispatch(removeAll());
  };

  return (
    <>
      <h1 className="title">my tags</h1>

      <div className="pb-10">
        <AlertButtonWrapper
          actionFunction={() => deleteAllTags(userId)}
          title="Are you sure you want to delete all the tags?"
          description="Deleting this tags can be aborted, the data will be lost"
        >
          <Button variant="outline">Delete All Tags</Button>
        </AlertButtonWrapper>
      </div>

      <div className="flex flex-wrap gap-5">
        {entities.length === 0 && <p>There is no tags, create a new one</p>}
        {entities.map(({ color, textColor, title, _id, createdBy }, index) => {
          return (
            <TagBadge
              className="px-5 font-bold"
              _id={_id}
              key={index}
              color={color}
              createdBy={createdBy}
              textColor={textColor}
              title={title}
            />
          );
        })}
      </div>
    </>
  );
};
