import { useState } from "react";

function MostrarOcultar() {
    const [valor, setValor] = useState(false);

    function mostrarInfo() {
        let result = valor === false ? true : false;
        setValor(result);
    }

    return(
        <div>
            <p>{valor}</p>
            <button onClick={mostrarInfo}>Click para mostrar mensaje secreto.</button>
        </div>
    );
}

export default MostrarOcultar;