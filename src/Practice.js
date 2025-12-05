import { useRef } from "react";

export default function List() {
  const numero = useRef(0);

  return <h1>Valor de la ref: {numero.current}</h1>;
}
