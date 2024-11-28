// eslint-disable-next-line react/prop-types
const TitleWithAmount = ({ title, amount, bulletColor = "black" }) => {
  return (
    <div className="flex items-center space-x-2">
      <span
        className="w-[0.3rem] h-[0.3rem] rounded-full"
        style={{ backgroundColor: bulletColor }}
      ></span>
      <div className="text-xs text-text">
        <span className="font-normal mr-1 opacity-70">{title} </span>
        <span className="font-semibold">{amount}</span>
      </div>
    </div>
  );
};

export default TitleWithAmount;
