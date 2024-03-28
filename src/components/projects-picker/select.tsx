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

interface ProjectsPickerSelectProps {
  data: IProject[];
  onSelect: (_id: Types.ObjectId | string) => void;
}

export const ProjectsPickerSelect = ({
  onSelect,
  data,
}: ProjectsPickerSelectProps) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="flex items-center gap-x-5">
        <FaFolder />
        <SelectValue placeholder={<span>Select Project</span>}></SelectValue>
      </SelectTrigger>

      <SelectContent>
        {data.map((project) => (
          <SelectItem key={project._id} value={project._id}>
            {project.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
