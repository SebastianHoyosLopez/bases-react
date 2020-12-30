import React from "react";

const Variables = () => {
  const saludo = "Hola desde constante";
  const imagen = 'https://imgur.com/zcQLtoM.jpg'

  return (
    <div>
      <h2>Nuevo componente {saludo}</h2>
      <img src={imagen} alt="logo"/>
    </div>
  );
};

export default Variables;
