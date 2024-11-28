import { Input } from "antd";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeholder, showLastIcon, theme }) => {
  const svgStyle = {
    filter: theme === "dark" ? "invert(1)" : "invert(0)",
  };
  return (
    <>
      <img
        src="src/assets/icons/search.svg"
        style={svgStyle}
        alt="avatar"
        height="16px"
        width="16px"
      />
      <Input
        placeholder={placeholder}
        variant
        className="bg-transparent px-2 text-primary_text placeholder-bullet transition-none focus:outline-none"
      />
      {showLastIcon && <span className="text-bullet text-sm ml-auto">⌘/</span>}
    </>
  );
};

export default SearchBar;
