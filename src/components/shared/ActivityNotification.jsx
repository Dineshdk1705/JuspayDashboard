/* eslint-disable react/prop-types */

import Avatar from "./Avatar";

const ActivityNotification = ({ notification, isLast }) => {
  return (
    <div className="flex p-1 gap-2">
      <div className="relative">
        <Avatar imgSrc={notification.iconSrc} h="24px" w="24px" />
        {!isLast && (
          <div className="absolute w-[1px] h-[14px] bg-border_primary -bottom-2 top-8 left-3"></div>
        )}
      </div>
      <div>
        <h5 className="text-[14px] text-text">
          {notification?.title && notification?.title?.length > 26
            ? `${notification?.title?.slice(0, 25)}...`
            : notification?.title}
        </h5>
        <p className="text-xs text-text opacity-40">{notification.time}</p>
      </div>
    </div>
  );
};

export default ActivityNotification;
