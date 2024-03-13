"use client";

import { useAppSelector } from "@/redux/hooks";

import { convertToDdMo } from "@/utils/date-time";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TimeChartProps {
  data: {
    label: string;
    tasks: number;
  }[];
}

export const TimeChart = ({ data }: TimeChartProps) => {
  // getting the date from redux store and parsing it
  const date = convertToDdMo(
    useAppSelector(
      (state) => state.analyticsReducer.value.calendarDay
    ).getTime()
  );

  if (data.length === 0) return <h1>There is no data</h1>;

  return (
    <div>
      <h1 className="title">time analytics {date}</h1>

      <section>
        <ResponsiveContainer width="100%" height="100%" minHeight={"250px"}>
          <AreaChart data={data}>
            {/* setting up the gradient for the area fill */}
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="label"
              style={{ fontWeight: "lighter", fontSize: "12px" }}
            />
            <YAxis style={{ fontWeight: "lighter", fontSize: "12px" }} />
            <Tooltip filterNull itemStyle={{ color: "black" }} />
            <Area
              type="bump"
              fill="url(#color)"
              dataKey="tasks"
              stroke="#82ca9d"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};
