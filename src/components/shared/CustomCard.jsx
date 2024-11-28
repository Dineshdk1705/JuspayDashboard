/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../ThemeContext";

const CustomCard = ({
  title,
  value,
  percentageChange,
  isPositive,
  bgColor = "#F7F9FB",
  textColor = "#1C1C1C",
  darkTextColor = "#FFFFFF",
  darkBgColor = "#000000",
  darkBgIconSrc,
  redirectLink,
}) => {
  const { theme } = useTheme();
  const darkIconSrc = theme === "dark" && darkBgIconSrc;

  const navigate = useNavigate();

  const handleCardClick = () => {
    if (redirectLink) {
      navigate(redirectLink);
    }
  };
  return (
    <div
      className="p-6 rounded-2xl w-full 2xl:w-[202px] h-[112px] flex flex-col"
      style={{
        backgroundColor: theme === "dark" ? darkBgColor : bgColor,
        color: theme === "dark" ? darkTextColor : textColor,
        cursor: redirectLink && "pointer",
      }}
      onClick={handleCardClick}
    >
      <h5
        className={`text-sm font-semibold leading-5 ${
          redirectLink ? "cursor-pointer" : "cursor-default"
        }`}
      >
        {title}
      </h5>

      <div
        className={`flex justify-between items-center mt-2 hover:flex-row-reverse hover:rounded-md  hover:${
          redirectLink ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <p className="text-2xl leading-9 font-semibold">{value}</p>

        <div className="flex items-center mt-1 text-sm">
          <span className="font-normal text-xs">{percentageChange}</span>
          <span className="ml-2">
            <img
              src={`${
                theme === "dark"
                  ? darkIconSrc
                  : isPositive
                  ? "/assets/icons/rise.svg"
                  : "/assets/icons/fall.svg"
              }`}
              alt="avatar"
              height="16px"
              width="16px"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
