import { useRef, useState } from "react";

const Mosquito = ({ onClick }) => {
  const [show, setShow] = useState(true);

  const mosquitoStyles = useRef({
    left: `${Math.floor(Math.random() * window.innerWidth)}px`,
    top: `${Math.floor(Math.random() * window.innerHeight + 200)}px`,
    position: "relative",
  });

  if (show) {
    return (
      <div
        onClick={() => {
          onClick();
          setShow(false);
        }}
        className="mosquito-img mosquito-animation"
        style={mosquitoStyles.current}
      ></div>
    );
  } else {
    return <div></div>;
  }
};

export default Mosquito;
