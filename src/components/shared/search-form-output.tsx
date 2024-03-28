import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";

interface SearchFormOutputProps extends HTMLAttributes<HTMLDivElement> {
  data: string[] | undefined;
}
export const SearchFormOutput = ({
  className,
  data,
}: SearchFormOutputProps) => {
  if (data === undefined || data.length === 0) return "";

  return (
    <div className={cn("w-full absolute", className)}>
      {data.map((item, index) => (
        <div key={index}>
          <div className="px-5 py-2 cursor-pointer hover:bg-zinc-200 duration-200">
            {item}
          </div>
          <Separator />
        </div>
      ))}
    </div>
  );
};
