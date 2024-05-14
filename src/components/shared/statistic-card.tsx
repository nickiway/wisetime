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
    <Card style={{ backgroundColor: bgColor }}>
      <CardContent>
        <p className="text-2xl  py-2">
          <span className="font-bold ">{statisticNumber}</span> {title}
        </p>
      </CardContent>

      <CardContent>{description}</CardContent>
      <CardContent>
        <Button className="w-full" asChild>
          <Link href={forwardButtonHref}>
            {forwardButtonTitle} <ArrowRightIcon />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
