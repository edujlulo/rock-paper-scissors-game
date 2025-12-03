import { useState, useEffect } from "react";

export default function List() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const id = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => clearInterval(id);
  }, []);

  return <h1>{time}</h1>;
}
