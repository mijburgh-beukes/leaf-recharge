import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [currentCharge, setCurrentCharge] = useState(0);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [estimatedTime, setEstimatedTime] = useState({ hours: 0, minutes: 0 });

  const manufacturers = ["Tesla", "Nissan"]; // Add more manufacturers as needed
  const modelsByManufacturer = {
    Tesla: ["Model S", "Model 3", "Model X", "Model Y"],
    Nissan: ["Leaf", "Ariya", "Rogue"],
  };

  useEffect(() => {
    if (manufacturer && model) {
      // Add your own charge time calculation logic here
      const estimatedTimeInMinutes = currentCharge * 2; // Adjust this formula
      setEstimatedTime({
        hours: Math.floor(estimatedTimeInMinutes / 60),
        minutes: estimatedTimeInMinutes % 60,
      });
    } else {
      setEstimatedTime({ hours: 0, minutes: 0 });
    }
  }, [currentCharge, manufacturer, model]);

  return (
    <div className="App">
      <h1>EV Charge Time Calculator</h1>
      <div className="calculator">
        <label htmlFor="currentCharge">Current State of Charge (%)</label>
        <input
          type="number"
          id="currentCharge"
          min="0"
          max="100"
          step="1"
          value={currentCharge}
          onChange={(e) => setCurrentCharge(e.target.value)}
          required
        />

        <label htmlFor="manufacturer">Vehicle Manufacturer</label>
        <select
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Manufacturer
          </option>
          {manufacturers.map((manu) => (
            <option key={manu} value={manu}>
              {manu}
            </option>
          ))}
        </select>

        <label htmlFor="model">Vehicle Model</label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Model
          </option>
          {modelsByManufacturer[manufacturer]?.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>

        <div id="result">
          Estimated Charge Time: {estimatedTime.hours} hours{" "}
          {estimatedTime.minutes} minutes
        </div>
      </div>
    </div>
  );
}
