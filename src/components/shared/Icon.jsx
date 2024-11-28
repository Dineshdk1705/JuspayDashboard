import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
const Icon = ({ iconSrc, h, w }) => {
  const { theme } = useTheme();
  const svgStyle = {
    filter: theme === "dark" ? "invert(1)" : "invert(0)",
  };
  return <img src={iconSrc} alt="icon" style={svgStyle} height={h} width={w} />;
};

export default Icon;
