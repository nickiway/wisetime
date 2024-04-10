import type { IconType } from "react-icons/lib";
import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Props {
  title: string;
  data: string | number;

  description?: string;
  dataType?: string;
  size?: {
    width?: number | string;
    height?: number | string;
  };

  Icon: IconType | LucideIcon;
}

export const AnalyticsDashboardCard = ({
  title,
  Icon,
  data,
  description,
  dataType,
  size,
}: Props) => {
  return (
    <Card
      style={{ height: size?.height ?? "auto", width: size?.width ?? "auto" }}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-x-5">
          <p>{title}</p>
          <Icon />
        </CardTitle>
      </CardHeader>

      <CardContent>
        <span className="text-4xl font-bold">{data}</span>
        <span> {dataType}</span>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
