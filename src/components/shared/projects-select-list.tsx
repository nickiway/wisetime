import { FaFolder } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { IProject } from "@/types/project";

interface ProjectsSelectListProps {
  projectsList: IProject[];
}

export const ProjectsSelectList = ({
  projectsList,
}: ProjectsSelectListProps) => {
  return (
    <Select>
      <SelectTrigger className="flex items-center w-auto gap-x-2">
        <FaFolder />
        <SelectValue placeholder={"Select Project"}></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {projectsList.map((project) => (
          <SelectItem key={project._id} value={project._id}>
            {project.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
