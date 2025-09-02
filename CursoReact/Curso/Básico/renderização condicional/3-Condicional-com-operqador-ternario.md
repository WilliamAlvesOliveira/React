# Condicionais com Operador Ternário no React

No **React**, muitas vezes precisamos renderizar elementos de forma condicional, ou seja, mostrar uma coisa **se** uma condição for verdadeira e outra **se não** for.  
Uma das formas mais comuns de fazer isso é utilizando o **operador ternário**.

---

## Sintaxe do Operador Ternário

```javascript
condição ? valorSeVerdadeiro : valorSeFalso
condição → a expressão que será avaliada (retorna true ou false).

valorSeVerdadeiro → o que será retornado/renderizado se a condição for verdadeira.

valorSeFalso → o que será retornado/renderizado se a condição for falsa.

Uso Básico no React
jsx

function ExemploTernario({ logado }) {
  return (
    <div>
      {logado ? <h1>Bem-vindo!</h1> : <h1>Por favor, faça login.</h1>}
    </div>
  );
}
Se logado for true, renderiza "Bem-vindo!".

Caso contrário, renderiza "Por favor, faça login.".

Aninhando Operadores Ternários
É possível aninhar operadores ternários, mas deve ser feito com cuidado para não comprometer a legibilidade do código.

jsx

function Status({ nivel }) {
  return (
    <p>
      {nivel === "admin"
        ? "Você é administrador."
        : nivel === "user"
        ? "Você é usuário."
        : "Nível desconhecido."}
    </p>
  );
}
Se nivel for "admin", mostra "Você é administrador.".

Se for "user", mostra "Você é usuário.".

Qualquer outro valor, mostra "Nível desconhecido.".

⚠️ Dica: Se muitos ternários começarem a se acumular, considere usar if/else ou até uma função auxiliar.

Ternário para Renderização Condicional de Componentes
Também podemos usar o operador ternário para renderizar componentes diferentes:

jsx

function Dashboard({ logado }) {
  return (
    <div>
      {logado ? <PainelUsuario /> : <Login />}
    </div>
  );
}
Se logado for verdadeiro, renderiza o componente <PainelUsuario />.

Caso contrário, renderiza o <Login />.

Evitando Renderização com null
Se você quiser que nada seja renderizado quando a condição não for atendida, pode usar null no lugar do valor falso:

jsx

function Notificacao({ temMensagem }) {
  return (
    <div>
      {temMensagem ? <p>Você tem uma nova mensagem!</p> : null}
    </div>
  );
}
Nesse caso:

Se temMensagem for true, renderiza o <p>.

Se temMensagem for false, não renderiza nada.