import { useState } from "react";

export default function () {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const validacion = () => {
    if (text.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <button onClick={validacion}>Enviar</button>
      {error && <h2>El campo es obligatorio</h2>}
    </>
  );
}
