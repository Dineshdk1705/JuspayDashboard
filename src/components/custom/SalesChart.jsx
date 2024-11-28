/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#C7F3D4" },
  { name: "Sponsored", value: 154.02, color: "#B4C7F7" },
  { name: "E-mail", value: 48.96, color: "#E2F2FB" },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-[#1C1C1CCC] rounded-lg py-1 px-2 text-sm outline-none bg-opacity-0">
        <p className="text-white text-xs">{data?.value?.toFixed(1)}%</p>
      </div>
    );
  }
};

const SalesChart = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-primary rounded-2xl w-full sm:w-[202px] min-w-[200px] max-w-[272px] relative">
      <h3 className="text-sm font-semibold text-text w-full">Total Sales</h3>

      <div className="w-full h-[147px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              startAngle={90}
              endAngle={450}
              innerRadius="60%"
              outerRadius="85%"
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 w-full space-y-3 text-xs px-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-xs text-text"
          >
            <div className="flex items-center space-x-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.name}</span>
            </div>
            <span className="font-medium">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesChart;
