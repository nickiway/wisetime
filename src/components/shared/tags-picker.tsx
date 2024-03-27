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
import { HTMLAttributes } from "react";
import { ButtonProps } from "react-day-picker";

interface TagsPickerProps extends HTMLAttributes<HTMLDivElement> {
  selectedTags: Set<string>;
  label?: string;
  onClickCb: (id: string) => void;
  tags: ITag[];
}
export const TagsPicker = ({
  className,
  selectedTags,
  label,
  tags,
  onClickCb,
}: TagsPickerProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Button className="flex gap-x-2 items-center">
          <FaTags /> {label}
        </Button>
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
  );
};
