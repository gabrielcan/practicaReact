//@ts-check
import React, { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
	
  const handleSubmit = event => {
    event.preventDefault();
    console.log(nombre, apellido);
  };

	const handleChangeNombre = event => setNombre(event.target.value);
	
  return (
    <>
      <form style={{ width: 200, margin: "50px auto" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="text"
            value={nombre}
            onChange={handleChangeNombre}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            value={apellido}
            onChange={event => setApellido(event.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
