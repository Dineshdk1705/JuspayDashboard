/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../ThemeContext";
import TitleWithAmount from "../shared/TitleWithAmount";

const data = [
  { month: "Jan", current: 10, previous: 15 },
  { month: "Feb", current: 19, previous: 10 },
  { month: "Mar", current: 17, previous: 11 },
  { month: "Apr", current: 13, previous: 16 },
  { month: "May", current: 15, previous: 21 },
  { month: "Jun", current: 25, previous: 22 },
];

const RevenueChart = () => {
  const { theme } = useTheme();

  const CustomYAxisTick = ({ x, y, payload }) => (
    <text
      x={x}
      y={y}
      dx={-10}
      textAnchor="end"
      style={{
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fill: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66",
      }}
    >
      {`${payload?.value}${payload?.value === 0 ? "" : "M"}`}
    </text>
  );

  const CustomXAxisTick = ({ x, y, payload }) => (
    <text
      x={x}
      y={y}
      dy={15}
      textAnchor="middle"
      style={{
        fontSize: 12,
        fontFamily: "Inter, sans-serif",
        fill: theme === "dark" ? "#FFFFFF66" : "#1C1C1C66",
      }}
    >
      {payload.value}
    </text>
  );

  return (
    <div className="bg-primary rounded-2xl p-4">
      <div className="px-3 pt-3 flex flex-wrap gap-5">
        <h3 className="text-sm font-semibold text-text leading-5 border-r-[1px] border-bullet pr-5">
          Revenue
        </h3>
        <TitleWithAmount
          title="Current Week"
          amount="$58,211"
          bulletColor="#1C1C1C"
        />
        <TitleWithAmount
          title="Previous Week"
          amount="$68,768"
          bulletColor="#A8C5DA"
        />
      </div>
      <div className="w-full h-[200px] sm:h-[239px] mt-4">
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 30, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke={theme === "dark" ? "#ffffff1f" : "#EDEDED"}
            />
            <XAxis
              dataKey="month"
              stroke={theme === "dark" ? "#ffffff1a" : " #C7C7C7"}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={<CustomXAxisTick />}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<CustomYAxisTick />}
              tickCount={4}
              domain={[0, 30]}
              interval={0}
            />
            <Line
              dot={false}
              type="natural"
              dataKey="current"
              stroke="#A8C5DA"
              strokeWidth={3}
            />
            <Line
              dot={false}
              type="natural"
              dataKey="previous"
              stroke={theme === "dark" ? "#c6c7f8" : "#000000"}
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
