import feather from "feather-icons";

const Icon = ({ name, size = 24, color = "black" }) => {
  const icon = feather.icons[name].toSvg({ width: size, height: size, color });
  return <span dangerouslySetInnerHTML={{ __html: icon }} />;
};

export default Icon;
