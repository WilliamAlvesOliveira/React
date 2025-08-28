# 📘 Guia Completo sobre Props no React

## 🔹 O que são Props?
- **Props (properties)** são os parâmetros que um componente recebe para ser configurado.
- Funcionam como **argumentos de função**, permitindo passar dados de um componente pai para um filho.
- São **imutáveis** dentro do componente (não podem ser alteradas diretamente).

```jsx
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

function App() {
  return <Saudacao nome="William" />;
}
```

👉 Nesse exemplo, `nome` é uma prop passada do componente `App` para `Saudacao`.

---

## 🔹 Como usar Props

### 1. Acessando props
```jsx
function Botao(props) {
  return <button>{props.texto}</button>;
}

<Botao texto="Salvar" />
```

### 2. Usando *destructuring*
```jsx
function Botao({ texto }) {
  return <button>{texto}</button>;
}

<Botao texto="Cancelar" />
```

### 3. Props dinâmicas
```jsx
const cor = "red";
<Botao texto="Excluir" style={{ color: cor }} />
```

---

## 🔹 `children`: A Prop Automática
- Todo componente em React recebe uma prop especial chamada **`children`**.
- Representa o conteúdo passado **entre as tags de abertura e fechamento** de um componente.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <h2>Título</h2>
  <p>Conteúdo do card.</p>
</Card>
```

👉 Aqui, `children` contém `<h2>` e `<p>`.

---

## 🔹 Props de Evento
- Props também são usadas para **eventos**.
- Ex.: `onClick`, `onChange`, `onSubmit`, etc.

```jsx
function Botao({ onClick, texto }) {
  return <button onClick={onClick}>{texto}</button>;
}

function App() {
  function handleClick() {
    alert("Botão clicado!");
  }

  return <Botao texto="Clique aqui" onClick={handleClick} />;
}
```

👉 `onClick` é uma prop que recebe uma função.

---

## 🔹 Props Padrão (default props)
- Podemos definir valores padrão caso uma prop não seja passada.

### Usando parâmetro padrão
```jsx
function Saudacao({ nome = "Visitante" }) {
  return <h1>Olá, {nome}!</h1>;
}

<Saudacao /> // exibe "Olá, Visitante!"
```

### Usando `defaultProps` (mais antigo, mas ainda válido)
```jsx
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

Saudacao.defaultProps = {
  nome: "Visitante"
};
```

---

## 🔹 Tipagem de Props (PropTypes)
- Para evitar erros, podemos **tipar as props**.

```jsx
import PropTypes from 'prop-types';

function Botao({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>;
}

Botao.propTypes = {
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
```

---

## 🔹 Passando Objetos e Arrays como Props
```jsx
function Lista({ itens }) {
  return (
    <ul>
      {itens.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

<Lista itens={["Arroz", "Feijão", "Macarrão"]} />
```

---

## 🔹 Funções como Props (Render Props)
- Podemos passar **funções** como props para personalizar a lógica.

```jsx
function Lista({ itens, renderItem }) {
  return <ul>{itens.map(renderItem)}</ul>;
}

<Lista 
  itens={["JS", "React", "Node"]} 
  renderItem={(item, i) => <li key={i}>{item.toUpperCase()}</li>} 
/>
```

---

## 🔹 Boas Práticas
✅ Use **destructuring** para clareza.  
✅ Nomeie props de eventos sempre começando com `on`.  
✅ Evite passar muitas props (considere **componentes menores**).  
✅ Use `children` para conteúdos flexíveis.  
✅ Valide props com **PropTypes** ou **TypeScript**.  

---

## 🔹 Resumindo
- **Props** são a forma de **comunicação entre componentes** no React.
- São **imutáveis**, recebidas de fora e usadas para renderizar algo.
- Podem ser:
  - Valores simples (string, number, boolean)
  - Objetos/arrays
  - Funções (eventos, callbacks)
  - O próprio `children`
- Podem ter valores padrão (`defaultProps` ou valores default no destructuring).

👉 Dominar props é essencial para criar componentes **reutilizáveis, flexíveis e bem estruturados** em React.
