/* eslint-disable react/prop-types */

const MainNotification = ({ notification }) => {
  return (
    <div className="flex p-1 gap-2">
      <div className="">
        <img
          src={notification.iconSrc}
          alt="icon"
          height="24px"
          width="24px"
          className={`p-1 rounded-lg`}
          style={{
            backgroundColor: notification?.bg_color,
          }}
        />
      </div>
      <div>
        <h5 className={`text-[14px] text-text`}>
          {notification && notification?.title?.length > 26
            ? `${notification?.title?.slice(0, 25)}...`
            : notification?.title}
        </h5>
        <p className="text-xs text-text opacity-40">{notification.time}</p>
      </div>
    </div>
  );
};

export default MainNotification;
