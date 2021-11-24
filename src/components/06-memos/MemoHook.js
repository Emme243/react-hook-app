import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

const MemoHook = () => {
  const { state: counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr></hr>

      <p>{memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
