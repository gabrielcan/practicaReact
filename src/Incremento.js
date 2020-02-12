//@ts-check
import React, { useState, useEffect } from "react";

const Contador = ({ valorInicial }) => {
  const [valorContador, setValorContador] = useState(valorInicial);

  const handleClick = () => setValorContador(valorContador + 1);
  
  return (
    <>
      <h1>{valorContador}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
};

export default Contador;
