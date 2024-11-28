import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
const LocationProgressBar = ({ name, revenue, percentage }) => {
  const { theme } = useTheme();
  return (
    <li className="flex flex-col space-y-1 w-full">
      <div className="flex justify-between text-xs text-text">
        <span>{name}</span>
        <span>{revenue}</span>
      </div>
      <div
        className={`w-full ${
          theme === "dark" ? "bg-[#ffffff33]" : "bg-[#e1ecf5]"
        }  rounded-full h-[0.15rem]`}
      >
        <div
          className="bg-[#A8C5DA] h-[0.15rem] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </li>
  );
};

export default LocationProgressBar;
