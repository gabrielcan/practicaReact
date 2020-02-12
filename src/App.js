//@ts-check
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Contador from "./Incremento";
import Formulario from "./components/formulario/Formulario";

function App() {
  return (
    <div className="App">
      <>
        <Contador valorInicial={5} />
        <Formulario />
      </>
    </div>
  );
}

export default App;
