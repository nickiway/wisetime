import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, CardContent } from "@/components/ui/card";

interface StatisticCardProps {
  title: string;
  description: string;
  statisticNumber: number | string;
  bgColor: string;
  forwardButtonTitle: string;
  forwardButtonHref: string;
}
export const StatisticCard = ({
  bgColor,
  statisticNumber,
  forwardButtonHref,
  forwardButtonTitle,
  title,
  description,
}: StatisticCardProps) => {
  return (
    <Card style={{ backgroundColor: bgColor }} className="border-0">
      <CardContent>
        <p className="text-2xl  py-2">
          <span className="font-bold ">{statisticNumber}</span> {title}
        </p>
      </CardContent>

      <CardContent>{description}</CardContent>
      <CardContent>
        <Button className="w-full" asChild>
          <Link href={forwardButtonHref} className="flex gap-x-5">
            <span>{forwardButtonTitle}</span>
            <ArrowRightIcon />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
