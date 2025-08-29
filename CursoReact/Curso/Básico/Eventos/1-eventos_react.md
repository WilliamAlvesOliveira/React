# Eventos no React

## O que são eventos no React?
Eventos são respostas a interações do usuário ou do navegador, como cliques, movimentos do mouse, pressionamento de teclas, envio de formulários, entre outros.  
No React, o tratamento de eventos é semelhante ao JavaScript tradicional, mas com algumas **particularidades importantes**.

---

## Diferença entre eventos em React e JavaScript puro
- **Nomeclatura em camelCase**: Em vez de `onclick`, usamos `onClick`.
- **Passagem de função**: No React passamos uma **referência de função** (não uma string ou execução direta).
- **Eventos sintéticos**: O React utiliza o `SyntheticEvent`, uma camada de abstração que normaliza o comportamento dos eventos em diferentes navegadores.
- **Comportamento declarativo**: Eventos são declarados diretamente nos elementos JSX.

Exemplo em **JavaScript puro**:
```html
<button onclick="alert('Clicado!')">Clique aqui</button>
```

Exemplo em **React**:
```jsx
function App() {
  function handleClick() {
    alert("Clicado!");
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

---

## Sintaxe dos eventos no React

1. Nome do evento em **camelCase**  
2. A função é passada **sem parênteses** (exceto quando queremos passar argumentos).

```jsx
<button onMouseEnter={handleMouseEnter}>Passe o mouse</button>
```

Com argumento:
```jsx
<button onClick={() => handleClick("Botão 1")}>Clique</button>
```

---

## Principais eventos no React

### Eventos de Mouse
- `onClick`
- `onDoubleClick`
- `onMouseEnter`
- `onMouseLeave`
- `onMouseDown`
- `onMouseUp`
- `onMouseMove`

### Eventos de Teclado
- `onKeyDown`
- `onKeyUp`
- `onKeyPress` (descontinuado, prefira `onKeyDown` ou `onKeyUp`)

### Eventos de Formulários
- `onChange` (diferente do HTML: é disparado a cada alteração, não só na perda de foco)
- `onSubmit`
- `onInput`
- `onFocus`
- `onBlur`

### Eventos de Clipboard
- `onCopy`
- `onCut`
- `onPaste`

### Eventos de Foco
- `onFocus`
- `onBlur`

### Eventos de Composição (para idiomas complexos, como japonês/chinês)
- `onCompositionStart`
- `onCompositionUpdate`
- `onCompositionEnd`

### Eventos de Seleção
- `onSelect`

### Eventos de Toque (mobile)
- `onTouchStart`
- `onTouchMove`
- `onTouchEnd`
- `onTouchCancel`

### Eventos de UI
- `onScroll`
- `onLoad`
- `onError`

---

## O objeto `SyntheticEvent`

No React, toda função de evento recebe um objeto chamado **SyntheticEvent**, que é uma versão normalizada do evento nativo, garantindo compatibilidade entre navegadores.

Exemplo:
```jsx
function handleChange(event) {
  console.log(event.target.value); // Acessando valor do input
}
```

> ⚠️ Importante: o `SyntheticEvent` é **poolado** por padrão (reutilizado pelo React), então não guarde o evento para uso assíncrono sem chamar `event.persist()`.

```jsx
function handleChange(event) {
  event.persist(); // Garante que o evento não será reutilizado
  setTimeout(() => {
    console.log(event.target.value);
  }, 1000);
}
```

---

## Prevenindo comportamento padrão

Assim como no JavaScript, usamos `event.preventDefault()` para evitar comportamentos padrão.

Exemplo em formulário:
```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log("Formulário enviado!");
}
```

---

## Passando parâmetros para eventos

Se precisamos passar parâmetros, usamos arrow functions:
```jsx
<button onClick={() => handleDelete(5)}>Deletar item</button>
```

Se passássemos direto `onClick={handleDelete(5)}`, a função seria executada imediatamente.

---

## Diferenças e particularidades
1. **onChange** em inputs funciona diferente do HTML: dispara a cada digitação.  
2. **Não existe `onHover`**: para hover, usamos CSS (`:hover`) ou combinamos `onMouseEnter` e `onMouseLeave`.  
3. O React não manipula diretamente o DOM, apenas abstrai os eventos.  
4. Eventos são declarativos, o que torna o código mais legível e fácil de manter.  

---

## Boas práticas com eventos no React
- Mantenha os handlers simples e coesos.
- Prefira declarar os handlers fora do JSX, e não funções inline, para melhor performance em componentes grandes.  
- Sempre use `camelCase` nos nomes de eventos.  
- Use `event.persist()` apenas quando realmente necessário.  

---

## Exemplo completo
```jsx
import React, { useState } from "react";

function App() {
  const [nome, setNome] = useState("");

  function handleChange(event) {
    setNome(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nome enviado: ${nome}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nome} onChange={handleChange} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
```

---

## Resumo rápido
- React usa **camelCase** nos eventos.  
- Passamos **funções** em vez de strings.  
- Os eventos são baseados em `SyntheticEvent`.  
- O `onChange` funciona diferente do HTML.  
- Podemos usar `preventDefault()` e `stopPropagation()` normalmente.  

---

📌 **Conclusão:**  
Eventos no React seguem a lógica do JavaScript, mas com sintaxe padronizada, normalização entre navegadores e integração total com o JSX. Dominar os eventos é essencial para criar interfaces interativas e dinâmicas.
