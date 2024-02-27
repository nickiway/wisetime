"use client";

import {
  AreaChart,
  Area,
  XAxis,
  Text,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface TimeChartProps {
  data: {
    label: string;
    value: number;
  }[];
}

export const TimeChart = ({ data }: TimeChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={"250px"}>
      <AreaChart data={data} title="test">
        {/* setting up the gradient for the area fill */}
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="label"
          style={{ fontWeight: "lighter", fontSize: "12px" }}
        />
        <YAxis style={{ fontWeight: "lighter", fontSize: "12px" }} />
        <Tooltip filterNull itemStyle={{ color: "black" }} />
        <Area
          type="bump"
          fill="url(#color)"
          dataKey="value"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
