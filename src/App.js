import { useState, useEffect } from "react/cjs/react.development";
import TrafficLight from "./components/TrafficLight";

import "./styles.css";

const trafficLight = [
  {
    color: "red",
    bgColorClass: "background-red",
    wait: 3000,
  },
  {
    color: "yellow",
    bgColorClass: "background-yellow",
    wait: 1000,
  },
  {
    color: "green",
    bgColorClass: "background-green",
    wait: 2000,
  },
];

export default function App() {
  const [activeLight, setActiveLight] = useState("red");
  const light = trafficLight.find((light) => light.color === activeLight);
  const currentIndex = trafficLight.findIndex(
    (light) => light.color === activeLight
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const idx = (currentIndex + 1) % trafficLight.length;
      setActiveLight(trafficLight[idx].color);
    }, light.wait);

    return () => clearTimeout(timer);
  }, [activeLight]);
  console.log(activeLight);
  return (
    <div className="App">
      <h1>React Traffic Light</h1>
      <div className="main-container">
        <div className="trafficLightContainer">
          {trafficLight.map((light, index) => (
            <TrafficLight
              key={index}
              isActive={activeLight === light.color}
              bgColor={light.bgColorClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
