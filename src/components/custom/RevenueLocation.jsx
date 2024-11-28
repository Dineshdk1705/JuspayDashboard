import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import data from "/src/data/world110m.json";
import { useTheme } from "../../ThemeContext";
import LocationProgressBar from "../shared/LocationProgressBar";
import locations from "/src/data/revenueLocations.json";

const RevenueLocation = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`bg-primary p-6 rounded-2xl w-[202px] flex- flex-col justify-center`}
    >
      <h3 className="text-center text-text text-sm font-semibold mb-4">
        Revenue by Location
      </h3>
      <div className="mb-5" style={{ width: "158px", height: "88px" }}>
        <ComposableMap
          projectionConfig={{
            scale: 230,
            center: [0, 0],
            rotate: [-10, 0, 0],
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography={data}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#A8C5DA9f",
                      stroke: theme === "dark" ? "#1c1c1c" : "#FFFFFF",
                      strokeWidth: 1.5,
                      outline: "none",
                    },
                    hover: { fill: "#D6E7F4", outline: "none" },
                    pressed: { fill: "#BFD8ED", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>
          {locations.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <g>
                {/* Circle for fill */}
                <circle
                  r={13}
                  fill={theme === "dark" ? "#c6c7f8" : "#1c1c1c"}
                />
                {/* Circle for border */}
                <circle
                  r={16}
                  fill="none"
                  stroke="#fff"
                  strokeWidth={6}
                  style={{
                    filter: "drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5))",
                  }}
                />
              </g>
            </Marker>
          ))}
        </ComposableMap>
      </div>
      <ul className="flex flex-col gap-[12.5px]">
        {locations.map((item) => (
          <LocationProgressBar
            key={item.name}
            name={item.name}
            revenue={item.revenue}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

export default RevenueLocation;
