# Componentes em React

Os **componentes** são a base do React. Eles permitem dividir a interface de usuário em partes independentes, reutilizáveis e fáceis de manter.  
Compreender componentes é essencial para dominar o React.

---

## 📌 O que é um Componente?

Um **componente** é uma função ou classe em JavaScript que retorna elementos React (normalmente escritos em JSX).  
Eles são responsáveis por renderizar parte da interface e podem ter sua própria lógica e estado.

- **Exemplo de Componente Simples (Funcional):**

```jsx
function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}
```

- **Exemplo com Arrow Function:**

```jsx
const Saudacao = () => <h1>Olá, mundo!</h1>;
```

---

## 📌 Tipos de Componentes

1. **Componentes Funcionais**
   - Escrevem-se como funções.
   - Usam **hooks** para gerenciar estado e ciclo de vida.
   - Forma mais moderna e recomendada.
   - Exemplo:
     ```jsx
     function Contador() {
       const [numero, setNumero] = React.useState(0);
       return (
         <div>
           <p>{numero}</p>
           <button onClick={() => setNumero(numero + 1)}>Incrementar</button>
         </div>
       );
     }
     ```

2. **Componentes de Classe (Legado)**
   - Usavam `class` e `this.state`.
   - Ainda existem, mas hoje são menos utilizados.
   - Exemplo:
     ```jsx
     class Contador extends React.Component {
       constructor(props) {
         super(props);
         this.state = { numero: 0 };
       }

       render() {
         return (
           <div>
             <p>{this.state.numero}</p>
             <button onClick={() => this.setState({ numero: this.state.numero + 1 })}>
               Incrementar
             </button>
           </div>
         );
       }
     }
     ```

---

## 📌 Props (Propriedades)

- Permitem **passar dados de um componente pai para um filho**.
- São somente leitura (imutáveis).

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

// Uso
<Saudacao nome="William" />
```

---

## 📌 Estado (State)

- O **estado** é interno ao componente.
- Pode ser alterado, e cada alteração causa uma **re-renderização**.

```jsx
function Contador() {
  const [numero, setNumero] = React.useState(0);

  return (
    <div>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>+1</button>
    </div>
  );
}
```

---

## 📌 Ciclo de Vida (Hooks Principais)

Nos componentes funcionais, usamos **hooks** para controlar o ciclo de vida:

- `useState` → estado interno.
- `useEffect` → efeitos colaterais (executar código após renderização).
- `useContext` → acessar contexto global.

Exemplo com `useEffect`:
```jsx
function Relogio() {
  const [hora, setHora] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer); // limpeza
  }, []);

  return <p>{hora.toLocaleTimeString()}</p>;
}
```

---

## 📌 Componentes Controlados vs Não Controlados

- **Controlados**: O estado vem do React (`useState`).
- **Não Controlados**: O DOM mantém o estado (ex.: `ref` para inputs).

```jsx
// Controlado
function InputControlado() {
  const [valor, setValor] = React.useState("");

  return (
    <input value={valor} onChange={(e) => setValor(e.target.value)} />
  );
}
```

---

## 📌 Reutilização de Componentes

- Componentes podem ser **combinados** e **reutilizados**.
- Exemplo de lista com reuso:

```jsx
function Item({ texto }) {
  return <li>{texto}</li>;
}

function Lista() {
  const itens = ["React", "Vue", "Angular"];
  return (
    <ul>
      {itens.map((item, index) => (
        <Item key={index} texto={item} />
      ))}
    </ul>
  );
}
```

---

## 📌 Boas Práticas

1. **Nomeie componentes com letra maiúscula** (`MeuComponente`).
2. **Mantenha componentes pequenos** e com responsabilidade única.
3. **Use props para dados de fora** e **state para dados internos**.
4. **Separe lógica de apresentação e lógica de negócios** quando possível.
5. **Prefira componentes funcionais** + hooks (mais modernos).

---

## 📌 Avançado

- **Render Props** → compartilhar lógica entre componentes.
- **Higher-Order Components (HOC)** → funções que recebem e retornam componentes.
- **Context API** → compartilhar estado global sem prop drilling.
- **Custom Hooks** → encapsular lógica reutilizável.

Exemplo de **Custom Hook**:
```jsx
function useContador(inicial = 0) {
  const [valor, setValor] = React.useState(inicial);
  const incrementar = () => setValor((v) => v + 1);
  return { valor, incrementar };
}

function App() {
  const { valor, incrementar } = useContador(10);
  return (
    <div>
      <p>{valor}</p>
      <button onClick={incrementar}>+1</button>
    </div>
  );
}
```

---

# ✅ Conclusão

- **Componentes são a base do React.**
- **Props** passam dados, **state** mantém dados internos.
- **Hooks** permitem controlar estado, efeitos e contexto.
- Com a prática, você aprenderá a **organizar, reutilizar e compor componentes** de forma eficiente.

Dominar componentes é o primeiro grande passo para **dominar React** 🚀.

