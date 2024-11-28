import ActivityNotification from "../shared/ActivityNotification";
import MainNotification from "../shared/MainNotification";
import User from "../shared/User";
import notifications from "/src/data/notifications.json";

// eslint-disable-next-line react/prop-types
const NotificationBar = ({ isOpen }) => {
  const { mainNotifications, activityNotifications, users } = notifications;
  return (
    <div
      className={`fixed top-0 right-0 h-full overflow-y-scroll scrollbar-hide p-5 text-text w-[230px] sm:w-[280px] border-l-[1px] border-border_primary transition-transform duration-300 ease-in-out bg-background z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0 flex flex-col gap-6`}
    >
      <div className="flex flex-col gap-2 p-1">
        <h5 className="text-sm font-semibold mb-2">Notifications</h5>
        {mainNotifications.map((notification) => {
          return (
            <MainNotification
              key={notification.id}
              notification={notification}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2 p-1">
        <h5 className="text-sm font-semibold mb-2">Activities</h5>
        {activityNotifications.map((notification, index) => {
          return (
            <ActivityNotification
              key={notification.id}
              notification={notification}
              isLast={index === activityNotifications.length - 1}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <h5 className="text-sm font-semibold mb-2">Contacts</h5>
        <ul className="space-y-2 p-1">
          {users.map((user) => {
            return (
              <div key={user.id} className="p-1 text-sm">
                <User key={user.id} user={user} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NotificationBar;
