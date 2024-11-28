/* eslint-disable react/prop-types */
import { useState } from "react";
import Icon from "./Icon";

const MenuItem = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="pb-1">
      <div
        className="flex items-center gap-2 px-1 *:cursor-default rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {menu?.subMenus && (
          <div
            className={`transform transition-transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            <Icon iconSrc="/assets/icons/menuArrow.svg" />
          </div>
        )}
        <div className="flex items-center gap-1">
          <Icon iconSrc={menu?.iconSrc} h="20px" w="20px" />
          <span className="text-sm text-text">{menu?.title}</span>
        </div>
      </div>
      {menu?.subMenus && (
        <ul
          className={`pl-8 mt-2 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {menu?.subMenus.map((subMenu, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm text-text hover:bg-submenu_hover_bg rounded-md hover:cursor-default mb-1"
            >
              {subMenu}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
