import { useState } from "react";

function CambiadorTexto() {
    const [textOriginal, setTextOriginal] = useState("Texto original");

    function changeText() {
        let textDefault = textOriginal === "Texto original" ? "Texto modificado" : "Texto original";
        setTextOriginal(textDefault);
    }

    return (
        <div>
            <p>{textOriginal}</p>
            <button onClick={changeText}>Cambiar texto</button>
        </div>
    );
}

export default CambiadorTexto;