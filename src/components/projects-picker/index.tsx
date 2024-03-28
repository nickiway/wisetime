"use client";

import { useProjects } from "@/hooks/useProjects";
import { useAppDispatch } from "@/redux/hooks";
import { setProject } from "@/redux/slices/timeSessionRecordSlice";

import type { Types } from "mongoose";

import { ProjectsPickerSelect } from "@/components/projects-picker/select";
import { HTMLAttributes, useCallback } from "react";

interface ProjectsPickerProps extends HTMLAttributes<HTMLSelectElement> {
  _id: Types.ObjectId | string | undefined;
}

export default function ProjectsPicker({
  _id,
  className,
}: ProjectsPickerProps) {
  const data = useProjects(_id);
  const dispatch = useAppDispatch();

  // on select func
  const onValueChange = useCallback(
    (_id: string | Types.ObjectId) => {
      dispatch(setProject(_id));
    },
    [dispatch]
  );

  return (
    <ProjectsPickerSelect
      data={data}
      onValueChange={onValueChange}
      className={className}
    />
  );
}
