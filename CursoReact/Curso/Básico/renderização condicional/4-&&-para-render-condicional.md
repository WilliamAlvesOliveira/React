# Renderização Condicional com `&&` em React

No React, além do `if/else` e do **operador ternário (`? :`)**, uma forma muito prática de **renderizar elementos de forma condicional** é utilizando o **operador lógico `&&`**.

---

## Conceito

O operador lógico `&&` em JavaScript retorna o segundo valor **somente se o primeiro for verdadeiro**.  
No React, isso é útil porque permite **mostrar um componente ou elemento somente se a condição for verdadeira**.

Exemplo básico em JavaScript:

```js
true && "Mostra isso";   // retorna "Mostra isso"
false && "Mostra isso";  // retorna false (não renderiza nada)
Aplicando no React
No React, podemos usar essa lógica diretamente dentro do JSX para controlar a renderização:

jsx

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Bem-vindo!</h1>
      {isLoggedIn && <p>Você está logado.</p>}
    </div>
  );
}
Explicação
Se isLoggedIn for true, o React renderiza o <p>Você está logado.</p>.

Se isLoggedIn for false, não renderiza nada no lugar.

Caso Prático: Renderizar lista condicionalmente
jsx

function ListaDeTarefas({ tarefas }) {
  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tarefas.length > 0 && (
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
Se tarefas.length > 0, a lista será renderizada.

Se não houver tarefas, nada será mostrado.

Quando NÃO usar apenas &&
O operador && é ótimo quando queremos mostrar algo apenas em caso verdadeiro, mas não oferece uma opção para o caso falso.
Se precisar renderizar algo nos dois cenários (verdadeiro/falso), use o operador ternário (? :).

Exemplo:

jsx

{isLoggedIn
  ? <p>Você está logado</p>
  : <p>Você precisa fazer login</p>}
Resumo
O && é uma forma curta e limpa de renderizar condicionalmente apenas se a condição for verdadeira.

Se precisar de um caso alternativo (else), use o operador ternário.

Muito útil para renderizar mensagens, componentes e pequenos elementos opcionais no JSX.