"use client";

import { useProjects } from "@/hooks/useProjects";
import { useAppDispatch } from "@/redux/hooks";
import { setProject } from "@/redux/slices/timeSessionRecordSlice";

import type { Types } from "mongoose";

import { ProjectsPickerSelect } from "@/components/projects-picker/select";
import { useCallback } from "react";

interface ProjectsPickerProps {
  _id: Types.ObjectId | string | undefined;
}

export default function ProjectsPicker({ _id }: ProjectsPickerProps) {
  const data = useProjects(_id);
  const dispatch = useAppDispatch();

  // on select func
  const onSelect = useCallback(
    (_id: string | Types.ObjectId) => {
      dispatch(setProject(_id));
    },
    [dispatch]
  );

  return <ProjectsPickerSelect data={data} onSelect={onSelect} />;
}
