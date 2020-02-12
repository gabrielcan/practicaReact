import React, { useState } from "react";
import './stylo.css'

export default function Formulario2() {

    const [nom, setNom] = useState("valor manejado por React");
    const [categoria, setCategoria]=useState("0");
    const[descript, setDescript]=useState("escriba su descripcion");


    const handleSubmit = event => {
        event.preventDefault();
        console.log(nom,categoria,descript);
    };

    const handleChangeNom = event => setNom(event.target.value);
    

    return (

        <>

            <div className="container-fluid cont">
                <div className="container d-flex cont_full">

                    <form className="col-6 cont_izq" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <h4>Agregar Producto</h4>
                            <label>Nombre</label>
                            <input type="text"
                                className="form-control"
                                id="nom"
                                value={nom}
                                onChange={handleChangeNom} />
                        </div>

                        <div className="form-group">
                            <label>Seleciones Categoria</label>
                            <select 
                            className="form-control"
                            id="categoria"
                            onChange={event=>setCategoria(event.target.value)}
                                >
                                <option value="0">Bebida</option>
                                <option value="1">Comestible</option>

                            </select>
                        </div>

                        <div className="form-group">
                            <label>Descripcion</label>
                            <textarea 
                            className="form-control"
                                id="descripcion"
                                rows="3"
                                value={descript}
                                onChange={event=>setDescript (event.target.value)}>
                            </textarea>

                        </div>
                        <button type="submit"
                            className="btn btn-primary btn-lg btn_agregar"
                        >Agregar</button>
                    </form>

                    <form className="col-6">
                        <div className="form-group">


                            <input type="search" className="form-control input_buscar" id="buscar" placeholder="buscar" />


                            <ul className="list-group" id='lista'>
                                <li className="list-group-item" data-toggle="modal" data-target="#exampleModal">Sin Productos </li>

                            </ul>
                        </div>

                    </form>



                </div>
            </div>

        </>

    );
}
