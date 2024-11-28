/* eslint-disable react/prop-types */

import Avatar from "./Avatar";

const User = ({ user }) => {
  return (
    <div className="flex gap-2">
      <div className="relative ">
        <Avatar imgSrc={user?.imgSrc} h="24px" w="24px" />
      </div>
      <div>
        <h5 className={`text-text`}>
          {user?.name && user?.name?.length > 26
            ? `${user?.name?.slice(0, 25)}...`
            : user?.name}
        </h5>
      </div>
    </div>
  );
};

export default User;
