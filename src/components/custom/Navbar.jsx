import { Breadcrumb } from "antd";
import { useTheme } from "../../ThemeContext";
import SearchBar from "../shared/SearchBar";
import Icon from "../shared/Icon";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ toggleSidebar, toggleNotification, isOnOrdersPage }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const location = useLocation();
  const isItHomePage = location.pathname === "/";

  return (
    <div className="w-full border-b-[1px] bg-background border-border_primary flex items-center gap-3 py-[20px] px-[20px] sm:px-[28px] justify-between">
      <div className="flex items-center gap-4">
        <button className="h-5 w-5 lg:cursor-default" onClick={toggleSidebar}>
          <Icon iconSrc="src/assets/icons/collapse.svg" h="20px" w="20px" />
        </button>

        <div className="hidden sm:block">
          <Icon iconSrc="src/assets/icons/star.svg" h="20px" w="20px" />
        </div>

        <Breadcrumb
          className="text-[14px] hidden sm:block cursor-default"
          separator={
            <span className="text-text opacity-40" style={{ margin: "0 12px" }}>
              /
            </span>
          }
          items={[
            {
              title: (
                <span
                  className={`text-text opacity-40 ${
                    !isItHomePage ? "cursor-pointer hover:opacity-60" : ""
                  } `}
                  onClick={() => !isItHomePage && navigate("/")}
                >
                  Dashboards
                </span>
              ),
            },
            {
              title: <span className={`text-text opacity-90`}>Default</span>,
            },
          ]}
        />
      </div>
      <div className="flex justify-end items-center w-[316px]">
        <div className="flex items-center bg-selected_menu_bg rounded-lg px-3 py-1 max-w-[160px] h-[28px]">
          <SearchBar placeholder={"Search"} showLastIcon={true} theme={theme} />
        </div>

        <div className="flex gap-3 ml-5">
          <button className="h-5 w-5" onClick={toggleTheme}>
            <Icon iconSrc="src/assets/icons/theme.svg" h="20px" w="20px" />
          </button>

          <div className="hidden sm:block">
            <Icon iconSrc="src/assets/icons/history.svg" h="20px" w="20px" />
          </div>

          <button
            className="h-5 w-5"
            onClick={!isOnOrdersPage ? toggleNotification : null}
          >
            <Icon iconSrc="src/assets/icons/bell.svg" h="20px" w="20px" />
          </button>

          <div className="hidden lg:block">
            <Icon iconSrc="src/assets/icons/collapse.svg" h="20px" w="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
