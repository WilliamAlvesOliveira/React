# Renderização em React

A **renderização** em React é o processo de transformar os **componentes** (funções ou classes que retornam JSX) em elementos reais na **UI (User Interface)**. É um dos conceitos mais importantes do React, pois determina como e quando a interface será atualizada.

---

## 1. Como funciona a renderização no React

1. O **componente React** retorna **JSX**.
2. Esse JSX é convertido em **elementos React** (objetos em memória).
3. O React compara esses elementos com a **árvore anterior** de elementos (Virtual DOM).
4. Apenas as diferenças (diff) são aplicadas ao **DOM real** do navegador.

Esse processo garante **performance** e evita re-renderizações desnecessárias de toda a página.

---

## 2. Tipos de renderização

### 2.1 Renderização inicial
- Acontece quando o componente é **montado** pela primeira vez.
- O React cria a estrutura inicial do DOM baseada no JSX.

### 2.2 Re-renderização
- Ocorre quando o **estado (state)** ou as **propriedades (props)** de um componente mudam.
- Apenas a parte da árvore afetada é re-renderizada.
- React aplica um processo chamado **Reconciliação** usando o **Virtual DOM**.

---

## 3. O Virtual DOM e o processo de reconciliação

- O **Virtual DOM** é uma cópia leve do DOM real mantida em memória.
- Quando algo muda:
  1. React cria uma nova árvore virtual.
  2. Compara com a árvore anterior (**diffing**).
  3. Atualiza apenas os nós necessários no **DOM real**.

Isso torna o React **rápido e eficiente**, pois mexer diretamente no DOM é caro em termos de performance.

---

## 4. Fatores que disparam renderização

Um componente re-renderiza quando:
- O **estado interno (`useState`)** muda.
- As **props recebidas** mudam.
- O **contexto (`useContext`)** do qual ele depende é atualizado.
- O **pai re-renderiza** (e o filho depende de algo desse pai).

---

## 5. Evitando re-renderizações desnecessárias

- **`React.memo`**  
  Evita que um componente funcional seja re-renderizado se as props não mudarem.

- **`useMemo`**  
  Memoriza valores derivados de cálculos pesados, evitando recomputações a cada render.

- **`useCallback`**  
  Memoriza funções para que não sejam recriadas em toda renderização, útil em componentes filhos que recebem funções como props.

- **Chaves (`key`) corretas em listas**  
  Garante que o React saiba identificar cada item corretamente em renderizações de listas.

---

## 6. Renderização condicional

O React permite renderizar diferentes elementos dependendo de condições:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
7. Renderização controlada por eventos
Mudanças de estado via eventos também disparam renderização:

jsx

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}
Cada clique no botão atualiza o estado, e o React re-renderiza apenas o que mudou.

8. Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)
CSR (Client-Side Rendering)
O React roda no navegador, renderizando a aplicação após carregar o JavaScript.

SSR (Server-Side Rendering)
O React renderiza o HTML no servidor e envia para o cliente, melhorando performance inicial e SEO.
Exemplo: Next.js.

9. Técnicas de renderização avançada
Lazy Loading (React.lazy + Suspense)
Carrega componentes apenas quando necessário.

Code Splitting
Divide o código em partes menores, carregadas sob demanda.

Hydration
Processo de transformar o HTML estático (gerado no servidor) em uma aplicação React interativa no cliente.

10. Resumo
React não re-renderiza tudo sempre, apenas o que muda.

Renderização é disparada por mudanças em estado, props ou contexto.

Técnicas como memoização ajudam a otimizar.

Existem diferentes formas de renderizar: CSR, SSR, SSG, ISR (em frameworks como Next.js).

Entender quando e por que um componente renderiza é essencial para escrever aplicações performáticas.