// Importamos o React Hook "useState" para lidar com estados
import { useState } from "react";

// ====================================================
// 📌 INTRODUÇÃO
// ====================================================
//
// No React, listas aparecem o tempo todo: menus, tabelas, cards, etc.
// Para renderizar listas, usamos o método .map() do JavaScript.
// Ele percorre um array e transforma cada item em um elemento React.
//
// Vantagens do uso de listas + map():
// ✅ Código mais enxuto e legível
// ✅ Fácil de manter e reutilizar
// ✅ Reatividade: se o array mudar, a UI muda junto
// ✅ Permite aplicar transformações (filtrar, ordenar, adicionar)
//
// ====================================================
// 1) LISTA SIMPLES
// ====================================================

function ListaSimples() {
  const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}

// ====================================================
// 2) KEYS (CHAVES ÚNICAS) — BOA PRÁTICA
// ====================================================
//
// O React precisa de "keys" para identificar cada item da lista.
// Sempre que possível, use um ID único do seu dado em vez do índice.
//

function ListaComObjetos() {
  const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "Maria" },
  ];

  return (
    <ul>
      {usuarios.map((user) => (
        <li key={user.id}>{user.nome}</li>
      ))}
    </ul>
  );
}

// ====================================================
// 3) USANDO INDEX COMO KEY — ⚠️ CUIDADO!
// ====================================================
//
// O index pode ser usado como key em listas fixas.
// Mas em listas dinâmicas (com adição/remoção), isso pode causar bugs:
// o React pode "reciclar" o elemento errado.
//

function ListaComIndex() {
  const [nomes, setNomes] = useState(["João", "Pedro", "Lucas"]);

  function adicionarNome() {
    setNomes([...nomes, `NovoNome-${Date.now()}`]);
  }

  return (
    <div>
      <button onClick={adicionarNome}>Adicionar Nome</button>
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>{nome}</li>
        ))}
      </ul>
      <p style={{ fontSize: "12px", color: "#666" }}>
        ⚠️ Usar índice como key pode causar problemas quando os itens mudam de
        posição, são removidos ou adicionados.
      </p>
    </div>
  );
}

// ====================================================
// 4) LISTAS COM COMPONENTES REUTILIZÁVEIS
// ====================================================
//
// Podemos mapear arrays para componentes, deixando o código limpo.
//

function Usuario({ nome, email }) {
  return (
    <li>
      <strong>{nome}</strong> – {email}
    </li>
  );
}

function ListaUsuarios() {
  const usuarios = [
    { id: 1, nome: "Ana", email: "ana@email.com" },
    { id: 2, nome: "Carlos", email: "carlos@email.com" },
    { id: 3, nome: "Maria", email: "maria@email.com" },
  ];

  return (
    <ul>
      {usuarios.map((user) => (
        <Usuario key={user.id} nome={user.nome} email={user.email} />
      ))}
    </ul>
  );
}

// ====================================================
// 5) ATUALIZAÇÃO DINÂMICA
// ====================================================
//
// O poder do map fica claro em listas que mudam com o estado.
//

function ListaDinamica() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React" },
    { id: 2, texto: "Fazer exercícios" },
  ]);

  function adicionarTarefa() {
    const novaTarefa = {
      id: Date.now(),
      texto: `Nova tarefa ${tarefas.length + 1}`,
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <div>
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}
            <button onClick={() => removerTarefa(tarefa.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ====================================================
// 6) FORMULÁRIO CONTROLADO + LISTA
// ====================================================
//
// Combinação prática: adicionar itens via input.
//

function ListaComForm() {
  const [input, setInput] = useState("");
  const [itens, setItens] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    setItens([...itens, { id: Date.now(), texto: input }]);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>{item.texto}</li>
        ))}
      </ul>
    </div>
  );
}

// ====================================================
// 7) TRANSFORMAÇÕES EM LISTAS (EXTRA)
// ====================================================
//
// Podemos usar map junto com filter, sort, etc.
//

function ListaTransformada() {
  const numeros = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <h4>Números originais:</h4>
      <p>{numeros.join(", ")}</p>

      <h4>Dobro de cada número:</h4>
      <ul>
        {numeros.map((n) => (
          <li key={n}>{n * 2}</li>
        ))}
      </ul>

      <h4>Apenas pares:</h4>
      <ul>
        {numeros
          .filter((n) => n % 2 === 0)
          .map((n) => (
            <li key={n}>{n}</li>
          ))}
      </ul>
    </div>
  );
}

// ====================================================
// COMPONENTE PRINCIPAL
// ====================================================

function Listas() {
  return (
    <section className="listas">
      <h2>🔑 Trabalhando com Listas e o método map() no React</h2>
      <p>
        Nesta aula, vamos aprender como renderizar listas no React, por que usar
        o método <code>map()</code>, como lidar com keys e como atualizar listas
        dinamicamente.
      </p>

      <div>
        <h3>1) Renderizando uma lista simples</h3>
        <ListaSimples />
      </div>

      <hr />

      <div>
        <h3>2) Usando objetos e IDs únicos</h3>
        <ListaComObjetos />
      </div>

      <hr />

      <div>
        <h3>3) Usando o índice como key (e os problemas disso)</h3>
        <ListaComIndex />
      </div>

      <hr />

      <div>
        <h3>4) Lista com componentes reutilizáveis</h3>
        <ListaUsuarios />
      </div>

      <hr />

      <div>
        <h3>5) Atualizando listas dinamicamente</h3>
        <ListaDinamica />
      </div>

      <hr />

      <div>
        <h3>6) Lista com formulário controlado</h3>
        <ListaComForm />
      </div>

      <hr />

      <div>
        <h3>7) Transformando listas com map, filter e sort</h3>
        <ListaTransformada />
      </div>

      <footer>
        <p style={{ fontSize: "12px", color: "#666" }}>
          ⚡ Recarregue a página para resetar os exemplos. <br />
          ✅ Dica final: sempre que possível use IDs únicos como key!
        </p>
      </footer>
    </section>
  );
}

export default Listas;
