/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../ThemeContext";

const data = [
  { name: "Jan", actual: 17, projection: 4 },
  { name: "Feb", actual: 21, projection: 5 },
  { name: "Mar", actual: 18, projection: 5 },
  { name: "Apr", actual: 23, projection: 6 },
  { name: "May", actual: 16, projection: 3 },
  { name: "Jun", actual: 21, projection: 5 },
];

const ProjectionChart = () => {
  const { theme } = useTheme();
  const CustomYAxisTick = ({ x, y, payload }) => {
    return (
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
  };

  const CustomXAxisTick = ({ x, y, payload }) => {
    return (
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
  };

  return (
    <div className="bg-primary rounded-2xl p-2">
      <h3 className="px-4 pt-5 text-sm font-semibold text-text leading-5">
        Projections vs Actual
      </h3>

      <div className="w-full lg:w-[384px] h-[192px]">
        <ResponsiveContainer>
          <BarChart
            width={420}
            height={190}
            data={data}
            margin={{ top: 30, right: 10, left: 0, bottom: 20 }}
          >
            <CartesianGrid
              vertical={false}
              stroke={theme === "dark" ? "#ffffff1f" : "#EDEDED"}
            />
            <XAxis
              dataKey="name"
              stroke={theme === "dark" ? "#ffffff1a" : " #C7C7C7"}
              tickLine={false}
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
            <Bar dataKey="actual" stackId="a" fill="#A8C5DA" barSize={20} />
            <Bar
              dataKey="projection"
              stackId="a"
              fill="#A8C5DA"
              radius={[5, 5, 0, 0]}
              opacity={0.5}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectionChart;
