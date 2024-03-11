"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTagsByUserId } from "@/redux/slices/tagsSlice";
import { TagBadge } from "@/components/tags/tagBadge";

interface TagsListProps {
  userId: string;
}

export const TagsList = ({ userId }: TagsListProps) => {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.tagsReducer);

  console.log(entities);

  //   inserting the loaded tags from db to store
  useEffect(() => {
    if (loading === "idle") {
      dispatch(fetchTagsByUserId(userId));
    }
  }, [dispatch, loading, userId]);

  return (
    <>
      <h1 className="title">my tags</h1>

      <div className="controllers"></div>

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
