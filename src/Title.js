import React from "react";
import "./title.css"
const Title=({texto,color})=>{
    return (
<>
    <h1 className='title' style={{color}}>{texto}</h1>
    <h5>hola</h5>
</>
    );
};

export default Title;