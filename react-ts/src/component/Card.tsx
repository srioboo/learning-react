import { useEffect, useState } from "react";

function Card() {
  const [count, setCount] = useState(0);

  function seteador() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <div className="card">
        <button onClick={seteador}>count is {count}</button>
      </div>
    </>
  );
}

export default Card;
