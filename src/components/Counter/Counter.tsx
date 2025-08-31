import { useState } from "react";

const Counter = ({ initial = 0 }: { initial?: number }) => {
  const [value, setValue] = useState(initial);
  const [stepText, setStepText] = useState("1");
  const parsed = Number(stepText);

  const step = stepText.trim() === "" || Number.isNaN(parsed) ? 1 : parsed;
  return (
    <div>
      <input
        aria-label="step"
        type="number"
        value={stepText}
        onChange={(e) => setStepText(e.target.value)}
      />
      <p aria-label="value">{value}</p>
      <button onClick={() => setValue((v) => v + step)}>Inc</button>
      <button onClick={() => setValue((v) => v - step)}>Dec</button>
    </div>
  );
};

export default Counter;
