import { useState } from "react";

export default function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    );
}