import { useState, useRef } from "react";

// Input controlado
function InputControlado() {
  const [texto, setTexto] = useState("");

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4>Controlado</h4>
      <p>O output é atualizado em tempo real conforme digitamos.</p>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Digite algo..."
      />
      <p>Output: {texto}</p>
    </div>
  );
}

// Input não controlado
function InputNaoControlado() {
  const inputRef = useRef();

  function mostrarTexto() {
    alert("Output: " + inputRef.current.value);
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h4>Não Controlado</h4>
       <p>O output só é 'capturado' quando clicamos no botão.</p>
      <input type="text" ref={inputRef} placeholder="Digite algo..." />
      <button onClick={mostrarTexto}>Mostrar output</button>
    </div>
  );
}

export {InputControlado, InputNaoControlado}