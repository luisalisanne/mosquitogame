import { useRef } from "react";

const Mosquito = ({ onClick }) => {
  const mosquitoStyles = useRef({
    left: `${Math.floor(Math.random() * window.innerWidth)}px`,
    top: `${Math.floor(Math.random() * window.innerHeight + 200)}px`,
    position: "relative",
  });
  return (
    <div
      onClick={onClick}
      className="mosquito-img mosquito-animation"
      style={mosquitoStyles.current}
    ></div>
  );
};

export default Mosquito;
