import type { Types } from "mongoose";
import type { IProject } from "@/types/project";

import { FaFolder } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ProjectsPickerSelectProps extends HTMLAttributes<HTMLSelectElement> {
  data: IProject[];
  onValueChange: (_id: Types.ObjectId | string) => void;
}

export const ProjectsPickerSelect = ({
  onValueChange,
  data,
  className,
}: ProjectsPickerSelectProps) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className={cn("flex items-center gap-x-5", className)}>
        <FaFolder />
        <SelectValue placeholder={<span>Select Project</span>}></SelectValue>
      </SelectTrigger>

      <SelectContent>
        {data.map((project) => {
          console.log(project);
          return (
            <SelectItem key={project?._id} value={project?._id}>
              {project?.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
