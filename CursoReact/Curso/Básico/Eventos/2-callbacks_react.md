# Funções de Callback em React

## O que é uma função de callback?
Uma **função de callback** é uma função passada como argumento para outra função, que será chamada em um momento específico.  
No React, callbacks são usados com frequência em eventos, comunicação entre componentes e otimização de performance.

---

## Exemplo simples em JavaScript
```js
function processarDado(dado, callback) {
  console.log("Processando:", dado);
  callback(dado);
}

processarDado("Olá", function (texto) {
  console.log("Callback executado com:", texto);
});
```

---

## Callbacks no React
Em React, callbacks aparecem em diferentes contextos:

1. **Eventos**: Passamos funções como callbacks para lidar com interações do usuário.
2. **Props**: Componentes filhos podem receber callbacks de seus pais para comunicar ações de volta.
3. **Hooks (`useCallback`)**: Callbacks podem ser otimizados para evitar re-renderizações desnecessárias.

---

## Callbacks em eventos
```jsx
function App() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

Aqui, `handleClick` é uma **função callback** passada ao evento `onClick`.

---

## Callbacks em props (comunicação pai → filho)
```jsx
function Botao({ aoClicar }) {
  return <button onClick={aoClicar}>Clique no filho</button>;
}

function App() {
  function handleFilhoClick() {
    alert("O filho notificou o pai!");
  }

  return <Botao aoClicar={handleFilhoClick} />;
}
```

Nesse caso, o **pai passa um callback** para o filho. O filho executa a função quando ocorre um evento.

---

## Passando parâmetros em callbacks
```jsx
function App() {
  function handleClick(nome) {
    alert("Olá " + nome);
  }

  return (
    <div>
      <button onClick={() => handleClick("Maria")}>Maria</button>
      <button onClick={() => handleClick("João")}>João</button>
    </div>
  );
}
```

Aqui usamos uma **arrow function** para passar argumentos ao callback.

---

## Callbacks e o hook `useCallback`
Quando passamos callbacks para componentes filhos, eles podem causar **re-renderizações desnecessárias**.  
O hook `useCallback` ajuda a memorizar a função, evitando que ela seja recriada em cada renderização.

Exemplo sem `useCallback`:
```jsx
function App() {
  const [count, setCount] = React.useState(0);

  function incrementar() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
      <p>Contagem: {count}</p>
    </div>
  );
}
```

Com `useCallback`:
```jsx
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <button onClick={incrementar}>Incrementar</button>
      <p>Contagem: {count}</p>
    </div>
  );
}
```

O `useCallback` só recria a função quando as dependências mudam.

---

## Quando usar callbacks em React
- Para manipular **eventos do usuário** (`onClick`, `onChange`, etc.).
- Para permitir **comunicação entre componentes** (filho chama uma função do pai).
- Para **otimizar performance** em componentes que recebem funções como props (`useCallback`).

---

## Boas práticas
- Evite criar funções inline em JSX de componentes muito grandes (pode causar re-renderizações desnecessárias).
- Use `useCallback` em funções passadas para filhos memoizados (`React.memo`).
- Sempre nomeie callbacks de forma clara (`onClick`, `aoEnviar`, `handleSubmit`).

---

## Exemplo completo
```jsx
import React, { useState, useCallback } from "react";

function Botao({ aoClicar }) {
  return <button onClick={aoClicar}>Incrementar</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const incrementar = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <Botao aoClicar={incrementar} />
      <p>Contagem: {count}</p>
    </div>
  );
}

export default App;
```

---

## Resumo rápido
- **Callback**: função passada como argumento para ser executada depois.  
- **React**: usado em eventos, props e hooks.  
- **useCallback**: memoriza funções para evitar re-renderizações.  
- **Comunicação pai-filho**: callbacks permitem que filhos disparem ações nos pais.  

---

📌 **Conclusão:**  
Callbacks são essenciais no React para lidar com eventos, permitir comunicação entre componentes e otimizar performance. Dominar o uso de callbacks (junto com `useCallback`) é um passo importante para escrever aplicações mais eficientes e organizadas.
