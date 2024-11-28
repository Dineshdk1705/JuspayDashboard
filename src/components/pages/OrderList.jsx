import { useTheme } from "../../ThemeContext";
import Icon from "../shared/Icon";
import SearchBar from "../shared/SearchBar";
import Table from "../shared/Table";

const OrderList = () => {
  const { theme } = useTheme();
  return (
    <div className="px-[28px] mt-[25px]">
      <h2 className="py-[4px] px-[8px] text-[14px] text-text leading-5 font-semibold mb-5">
        Order List
      </h2>
      <div className="flex items-center justify-between bg-primary mb-3 px-2 h-11 rounded-lg">
        <div className="flex gap-3">
          <Icon iconSrc="src/assets/icons/add.svg" h="18px" w="18px" />
          <Icon iconSrc="src/assets/icons/filter.svg" h="18px" w="18px" />
          <Icon iconSrc="src/assets/icons/sort.svg" h="18px" w="18px" />
        </div>
        <div
          className={`flex items-center border-[1px]
            ${
              theme === "dark"
                ? "bg-[#1C1C1C9a] border-[#ffffff1a]"
                : "bg-[#fefefe] border-[#1C1C1C1A]"
            }
           rounded-lg px-2 py-1 max-w-[160px] h-[28px]`}
        >
          <SearchBar
            placeholder={"Search"}
            showLastIcon={false}
            theme={theme}
          />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default OrderList;
