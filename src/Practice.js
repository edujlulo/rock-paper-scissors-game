import { useState } from "react";

export default function List() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + Number(step))}>Agregar</button>
      <button onClick={() => setCount(count - Number(step))}>Restar</button>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      ></input>
    </>
  );
}
