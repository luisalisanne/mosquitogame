function Mosquito({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="mosquito-img mosquito-animation"
      style={{
        left: `${Math.floor(Math.random() * window.innerWidth)}px`,
        top: `${Math.floor(Math.random() * window.innerHeight + 200)}px`,
        position: "relative",
      }}
    ></div>
  );
}

export default Mosquito;
