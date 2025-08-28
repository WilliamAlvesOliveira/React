# Reutilização de Componentes no React

## O que são componentes reutilizáveis?

Em **React**, um componente é uma função ou classe que retorna **JSX**.\
A grande vantagem é que podemos **reutilizar** esses componentes em
diferentes partes da aplicação, tornando o código mais **organizado,
modular e fácil de manter**.

------------------------------------------------------------------------

## Criando um componente simples

``` jsx
function Botao() {
  return <button>Clique aqui</button>;
}

// Uso dentro do componente principal
function App() {
  return (
    <div>
      <h1>Exemplo</h1>
      <Botao />
      <Botao />
    </div>
  );
}
```

Neste caso, criamos o componente **Botao** uma vez e o reutilizamos
múltiplas vezes.

------------------------------------------------------------------------

## Passando dados com **props**

**Props (propriedades)** permitem que um componente seja
**personalizado** a cada reutilização.\
Elas funcionam como **parâmetros de função**.

``` jsx
function Botao(props) {
  return <button>{props.texto}</button>;
}

function App() {
  return (
    <div>
      <Botao texto="Salvar" />
      <Botao texto="Cancelar" />
      <Botao texto="Excluir" />
    </div>
  );
}
```

### Usando desestruturação

``` jsx
function Botao({ texto, cor }) {
  return <button style={{ backgroundColor: cor }}>{texto}</button>;
}

function App() {
  return (
    <div>
      <Botao texto="Salvar" cor="green" />
      <Botao texto="Cancelar" cor="orange" />
      <Botao texto="Excluir" cor="red" />
    </div>
  );
}
```

------------------------------------------------------------------------

## Componente Pai e Filho

Os **componentes pais** podem passar informações para os **componentes
filhos** através de `props`.

``` jsx
function Saudacao({ nome }) {
  return <h2>Olá, {nome}!</h2>;
}

function App() {
  return (
    <div>
      <Saudacao nome="Maria" />
      <Saudacao nome="João" />
    </div>
  );
}
```

Neste exemplo, `App` é o componente **pai**, e `Saudacao` é o **filho**
que recebe `props`.

------------------------------------------------------------------------

## Reutilizando componentes fora do arquivo principal

Normalmente, para manter o projeto organizado, criamos uma **pasta
`components/`** e colocamos os componentes em arquivos separados.

Exemplo de estrutura:

    src/
      App.jsx
      components/
        Botao.jsx
        Saudacao.jsx

### `Botao.jsx`

``` jsx
export default function Botao({ texto, cor }) {
  return <button style={{ backgroundColor: cor }}>{texto}</button>;
}
```

### `Saudacao.jsx`

``` jsx
export default function Saudacao({ nome }) {
  return <h2>Olá, {nome}!</h2>;
}
```

### `App.jsx`

``` jsx
import Botao from "./components/Botao";
import Saudacao from "./components/Saudacao";

export default function App() {
  return (
    <div>
      <Saudacao nome="Lucas" />
      <Botao texto="Enviar" cor="blue" />
    </div>
  );
}
```

------------------------------------------------------------------------

## Passando funções como props

Além de valores simples, também podemos passar **funções** para os
componentes filhos.

``` jsx
function Botao({ texto, aoClicar }) {
  return <button onClick={aoClicar}>{texto}</button>;
}

function App() {
  const handleClick = () => alert("Botão clicado!");

  return <Botao texto="Clique aqui" aoClicar={handleClick} />;
}
```

------------------------------------------------------------------------

## Children: passando JSX como conteúdo

Podemos usar a `prop` especial chamada **children** para permitir que
elementos sejam passados dentro do componente.

``` jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return (
    <Card>
      <h1>Título</h1>
      <p>Conteúdo do card</p>
    </Card>
  );
}
```

------------------------------------------------------------------------

## Conclusão

-   Componentes permitem **reutilização e organização** do código.\
-   `props` são a forma de passar informações e comportamentos para
    componentes filhos.\
-   Podemos **separar os componentes em arquivos diferentes** e
    importá-los no componente pai.\
-   Além de valores, podemos passar **funções** e até mesmo outros
    **elementos JSX** via `children`.

> A reutilização de componentes é um dos pilares do React, e dominar
> `props` é essencial para criar aplicações escaláveis e organizadas.
