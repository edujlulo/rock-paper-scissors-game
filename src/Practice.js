import { useState } from "react";

export default function Lista() {
  const [nombres, setNombres] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function agregarNombre() {
    if (inputValue.trim() === "") return;

    setNombres([...nombres, inputValue]);
    setInputValue("");
  }

  function eliminarNombre(ind) {
    setNombres(nombres.filter((n, i) => i !== ind));
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button onClick={agregarNombre}>Agregar</button>

      <ul>
        {nombres.map((n, i) => (
          <li key={i}>
            {n}
            <button onClick={() => eliminarNombre(i)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
}
