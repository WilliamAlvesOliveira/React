# Estado em React

O **estado (state)** é um dos conceitos centrais do React. Ele representa informações que podem mudar durante a vida útil de um componente e que influenciam diretamente no que é renderizado na tela.

---

## O que é Estado?

- O **estado** é um objeto (ou valor) que armazena dados internos de um componente.  
- Quando o estado é atualizado, o **React re-renderiza** o componente para refletir a nova informação na interface.  
- Diferente das **props**, que são **imutáveis** e passadas de pai para filho, o **estado é mutável** e controlado dentro do próprio componente.

---

## Estado em Componentes de Função com `useState`

Desde o React 16.8, usamos **hooks** para trabalhar com estado em componentes funcionais.

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
useState(0) → inicializa o estado com valor 0.

contador → variável que armazena o estado.

setContador → função que atualiza o estado.

Atualização de Estado
O estado não deve ser atualizado diretamente.

Sempre use a função fornecida pelo hook useState.

jsx

// ❌ ERRADO
contador = contador + 1;

// ✅ CERTO
setContador(contador + 1);
Atualização baseada no estado anterior
jsx

setContador((prev) => prev + 1);
Essa forma é recomendada quando a atualização depende do estado anterior.

Imutabilidade do Estado
O estado deve ser imutável: em vez de modificar diretamente, criamos uma nova versão.

jsx

// Exemplo com array
const [lista, setLista] = useState([1, 2, 3]);

// ❌ ERRADO
lista.push(4);
setLista(lista);

// ✅ CERTO
setLista([...lista, 4]);


Estado em Componentes de Classe
Antes dos hooks, o estado era usado em classes:
jsx
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.incrementar}>Clique</button>
      </div>
    );
  }
}

Hoje, recomenda-se usar hooks em vez de classes.

Lifting State Up (Elevar o Estado)
Às vezes, precisamos compartilhar estado entre componentes. A solução é mover o estado para o ancestral comum.

jsx
function Pai() {
  const [mensagem, setMensagem] = useState("Olá!");

  return (
    <>
      <Filho valor={mensagem} />
      <OutroFilho mudarValor={setMensagem} />
    </>
  );
}

function Filho({ valor }) {
  return <p>Mensagem: {valor}</p>;
}

function OutroFilho({ mudarValor }) {
  return (
    <button onClick={() => mudarValor("Nova mensagem")}>
      Alterar Mensagem
    </button>
  );
}

Hooks Relacionados a Estado
useReducer
Alternativa ao useState quando há lógica mais complexa.

jsx
function contadorReducer(state, action) {
  switch (action.type) {
    case "incrementar":
      return { valor: state.valor + 1 };
    case "decrementar":
      return { valor: state.valor - 1 };
    default:
      return state;
  }
}

function Contador() {
  const [state, dispatch] = useReducer(contadorReducer, { valor: 0 });

  return (
    <>
      <p>{state.valor}</p>
      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
    </>
  );
}

useEffect e Estado
O useEffect é usado para executar efeitos colaterais quando o estado muda.

jsx
import { useState, useEffect } from "react";

function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // limpeza
  }, []);

  return <p>Tempo: {segundos}s</p>;
}

Boas Práticas com Estado
✅ Manter o estado mínimo necessário.
✅ Usar imutabilidade ao atualizar.
✅ Usar setState/setValor sempre que precisar alterar.
✅ Se a lógica de atualização for complexa → prefira useReducer.
✅ Se vários componentes precisam do mesmo estado → considere context API ou bibliotecas como Redux/Zustand.

Resumo
Estado controla dados que mudam no tempo.

Em funções, usamos useState e useReducer.

Atualizações devem ser imutáveis.

Estado pode ser elevado (lifting state up) para compartilhamento.

Hooks como useEffect reagem a mudanças de estado.

O domínio de estado é fundamental para criar aplicações dinâmicas e interativas no React. 