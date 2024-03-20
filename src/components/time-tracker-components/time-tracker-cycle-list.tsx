"use client";

import { useAppSelector } from "@/redux/hooks";
import { ticksToTime } from "@/utils/date-time";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TimeTrackerCycleList = () => {
  const circlesList = useAppSelector((state) => state.timerReducer.circles);
  console.log(circlesList);

  return (
    <Table>
      <TableCaption>A list of your cycles</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Cycle Time</TableHead>
          <TableHead>Total Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {circlesList.map((cycle, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{ticksToTime(cycle.ticks)}</TableCell>
              <TableCell>{ticksToTime(cycle.totalTicks)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
