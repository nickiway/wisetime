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
import { ISessionBody, ITimerSession } from "@/db/models/timer/TimerSessions";
import { useLoadTimerTableData } from "@/hooks/useLoadTimerTableData";
import { Session } from "next-auth";

interface ITimeTrackerTable {
  session: Session | null;
}
export const TimeTrackerTable = ({ session }: ITimeTrackerTable) => {
  const table = useLoadTimerTableData(session?.user?.id || "");

  console.log(table);

  return (
    <Table>
      <TableCaption>Your activity</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Project</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.map(({ body: item }, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell>{item.taskName}</TableCell>
              <TableCell>{item.selectedTags}</TableCell>
              <TableCell>{"Test"}</TableCell>
              <TableCell>{ticksToTime(item.totalTicks)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
