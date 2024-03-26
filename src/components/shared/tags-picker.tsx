"use client";

import { FaTags } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";
import { ITag } from "@/types/tag";

interface TagsPickerProps {
  selectedTags: Set<string>;
  label?: string;
  onClickCb: (id: string) => void;
  tags: ITag[];
}
export const TagsPicker = ({
  selectedTags,
  label,
  tags,
  onClickCb,
}: TagsPickerProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-x-2">
          <FaTags color="gray" /> {label}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select your tags</DropdownMenuLabel>
          {tags.map((tag) => {
            return (
              <DropdownMenuLabel key={tag._id.toString()} className="py-2">
                <Button
                  variant="default"
                  style={{
                    backgroundColor: selectedTags.has(tag._id.toString())
                      ? "gray"
                      : tag.color,
                    color: selectedTags.has(tag._id.toString())
                      ? "black"
                      : tag.textColor,
                  }}
                  className={"cursor-pointer w-full "}
                  asChild
                  onClick={() => onClickCb(tag._id.toString())}
                >
                  <span>{tag.title}</span>
                </Button>
              </DropdownMenuLabel>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
