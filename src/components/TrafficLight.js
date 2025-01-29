const TrafficLight = ({ isActive, bgColor }) => {
  return (
    <div
      className={`trafficLight ${isActive ? bgColor : "background-grey"}`}
    ></div>
  );
};

export default TrafficLight;
