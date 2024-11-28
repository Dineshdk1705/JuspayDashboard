// eslint-disable-next-line react/prop-types
const Avatar = ({ imgSrc, h, w }) => {
  return (
    <img
      src={imgSrc}
      alt="avatar"
      height={h}
      width={w}
      className="rounded-full"
    />
  );
};

export default Avatar;
