# Renderização Condicional com if/else em React

## O que é renderização condicional?
Em React, **renderização condicional** significa mostrar ou esconder elementos da interface com base em uma condição.  
Isso é parecido com usar `if/else` no JavaScript tradicional, mas aplicado dentro dos componentes React.

---

## 1. Estrutura básica
No JavaScript, usamos:

```js
if (condicao) {
  // faz algo
} else {
  // faz outra coisa
}
Em React, a lógica é parecida, mas precisamos retornar JSX dentro do return do componente.

2. Usando if/else diretamente
Uma maneira comum é escrever a lógica antes do return:

jsx
function Exemplo({ logado }) {
  let conteudo;

  if (logado) {
    conteudo = <h1>Bem-vindo de volta!</h1>;
  } else {
    conteudo = <h1>Por favor, faça login.</h1>;
  }

  return <div>{conteudo}</div>;
}
3. Usando if dentro do return (não é possível direto!)
O return do React só pode retornar JSX ou null, não um if puro.
Por isso, precisamos usar operadores lógicos ou condições ternárias.

4. Usando operador ternário (condicao ? A : B)
Muito comum para if/else simples:

jsx
Copiar código
function Exemplo({ logado }) {
  return (
    <div>
      {logado ? <h1>Bem-vindo!</h1> : <h1>Faça login</h1>}
    </div>
  );
}
5. Usando && para mostrar apenas quando for verdadeiro
Quando só precisamos renderizar se for verdadeiro:

jsx

function Exemplo({ logado }) {
  return (
    <div>
      {logado && <h1>Você está logado!</h1>}
    </div>
  );
}
Se logado for false, nada aparece.

6. Misturando lógica com funções auxiliares
Para deixar o código mais limpo:

jsx

function Mensagem({ logado }) {
  function renderizarMensagem() {
    if (logado) {
      return <h1>Bem-vindo!</h1>;
    }
    return <h1>Faça login</h1>;
  }

  return <div>{renderizarMensagem()}</div>;
}
7. Resumindo
if/else antes do return → bom para lógica mais complexa.

operador ternário → ideal para casos simples.

operador && → quando só precisamos renderizar algo se for verdadeiro.

função auxiliar → deixa o código mais organizado em condições longas.

