# Arrow Function vs Chamada Direta em React

## Introdução
Em React, é comum termos que passar funções como **callbacks** para eventos ou componentes.  
Duas formas comuns de escrever isso são:

1. Usar uma **arrow function** diretamente no JSX.
2. Passar a função como **referência direta**.

Cada abordagem tem suas particularidades e implicações na performance e legibilidade do código.

---

## Chamada direta (referência da função)
```jsx
function App() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

### Características:
- A função é passada como **referência**, não executada imediatamente.
- Melhor para performance, pois a função não é recriada a cada renderização.
- Não permite passar parâmetros diretamente.

---

## Arrow function no JSX
```jsx
function App() {
  function handleClick(nome) {
    alert("Olá, " + nome);
  }

  return <button onClick={() => handleClick("Maria")}>Clique em Maria</button>;
}
```

### Características:
- A arrow function é criada **a cada renderização**.
- Permite passar **parâmetros personalizados**.
- Pode impactar a performance se usada em componentes grandes ou renderizados muitas vezes.

---

## Diferença prática
```jsx
// Chamada direta
<button onClick={handleClick}>OK</button>

// Arrow function
<button onClick={() => handleClick("OK")}>OK</button>
```

- **Chamada direta**: eficiente, mas sem parâmetros extras.  
- **Arrow function**: flexível (permite parâmetros), mas menos eficiente em re-renderizações.

---

## Cuidado com a execução imediata
Se escrevermos assim:
```jsx
<button onClick={handleClick()}>Clique</button>
```
A função será **executada imediatamente** durante a renderização, e o retorno dela será passado para `onClick`.  
Isso normalmente **não é o comportamento desejado**.

---

## Quando usar cada um

✅ **Prefira chamada direta** quando:
- Não precisa passar parâmetros.  
- Funções simples de evento.  
- Performance é importante (listas grandes, componentes que renderizam muito).  

✅ **Use arrow function** quando:
- Precisa passar parâmetros.  
- Quer criar uma função inline simples.  
- O impacto de performance não será relevante.  

---

## Exemplo completo
```jsx
function App() {
  function mostrarMensagem() {
    alert("Chamada direta!");
  }

  function mostrarComParametro(nome) {
    alert("Olá, " + nome);
  }

  return (
    <div>
      {/* Chamada direta */}
      <button onClick={mostrarMensagem}>Direto</button>

      {/* Arrow function */}
      <button onClick={() => mostrarComParametro("Maria")}>
        Com parâmetro
      </button>
    </div>
  );
}
```

---

## Resumo rápido
- **onClick={funcao}** → Passa a função como referência, eficiente e comum.  
- **onClick={() => funcao(param)}** → Usa arrow function, recria função a cada render, mas permite parâmetros.  
- **onClick={funcao()}** → Executa imediatamente na renderização (⚠️ quase nunca é o que queremos).  

---

📌 **Conclusão:**  
Use **referência direta** sempre que possível, mas recorra às **arrow functions** quando precisar passar argumentos. Saber equilibrar as duas abordagens ajuda a manter o código mais legível e eficiente.
