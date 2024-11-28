import { useTheme } from "../../ThemeContext";
import Avatar from "../shared/Avatar";
import MenuItem from "../shared/MenuItem";
import menusData from "/src/data/menusData.json";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ isOpen }) => {
  const { menus, pagesMenus } = menusData;
  const { theme } = useTheme();
  const svgStyle = {
    filter: theme === "dark" ? "invert(1)" : "invert(0)",
  };
  return (
    <div
      className={`fixed top-0 inset-y-0 left-0 h-full border-r-[1px] border-border_primary overflow-y-scroll scrollbar-hide transform py-5 px-4 w-[212px] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform lg:translate-x-0 lg:block`}
    >
      <div className="flex items-center gap-3 p-1">
        <Avatar imgSrc="src/assets/icons/ByeWind.svg" h="24px" w="24px" />
        <h5 className="text-[14px] text-text">ByeWind</h5>
      </div>

      <div className="flex flex-col gap-1 mt-4 pb-3">
        <div className="flex gap-8 py-1 px-2 text-sm leading-5 text-text font-normal">
          <h4 className="opacity-40">Favorites</h4>
          <h4 className="opacity-20">Recently</h4>
        </div>

        {["Overview", "Projects"].map((menu) => (
          <div key={menu} className="flex items-center space-x-2 py-1 px-3">
            <span className="w-[0.4rem] h-[0.4rem] rounded-full bg-bullet"></span>
            <div className="text-sm text-text">
              <span className={`font-normal mr-1`}>{menu}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col py-2 px-2 mt-2">
        <h2 className="text-sm text-text opacity-40 px-1">Dashboard</h2>
        <ul>
          <li className="text-sm px-[17px] bg-selected_menu_bg flex gap-1 rounded-md p-1 mb-2 mt-3 relative">
            <span className="absolute h-[16px] w-1 -left-[1px] top-[6px] rounded-full bg-selected_menu_icon"></span>
            <img src="src/assets/icons/pie.svg" alt="icon" style={svgStyle} />
            <span className="text-text">Default</span>
          </li>
          {menus.map((menu, index) => (
            <MenuItem key={index} menu={menu} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col py-2 px-2 mt-2">
        <h2 className="text-sm text-text opacity-40 px-1 mb-3">Pages</h2>
        <ul>
          {pagesMenus.map((menu, index) => (
            <MenuItem key={index} menu={menu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
