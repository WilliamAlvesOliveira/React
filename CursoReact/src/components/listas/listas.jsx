// Importamos o React Hook "useState" para lidar com estados
import { useState } from "react";

// ====================================================
// 1) LISTAS EM REACT
// ====================================================

// Um exemplo simples: renderizando uma lista de strings
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
// 2) KEYS (CHAVES ÚNICAS)
// ====================================================

// Exemplo com objetos e IDs únicos
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
// 3) USANDO INDEX COMO KEY (E OS PROBLEMAS DISSO)
// ====================================================

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
        ⚠️ Usar o índice como key pode causar problemas em listas dinâmicas
        (quando itens mudam de posição, são removidos ou adicionados).
      </p>
    </div>
  );
}

// ====================================================
// 4) LISTA COM COMPONENTES REUTILIZÁVEIS
// ====================================================

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
// 5) ATUALIZAÇÃO DINÂMICA DE LISTAS
// ====================================================

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
// 6) LISTAS E COMPONENTES CONTROLADOS
// ====================================================

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
// COMPONENTE PRINCIPAL (AULA SOBRE LISTAS)
// ====================================================

function Listas() {
  return (
    <section className="listas">
      <h2>Trabalhando com Listas e Keys no React</h2>

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

      <footer>
        <p style={{ fontSize: "12px", color: "#666" }}>
          ⚡ Recarregue a página para resetar os exemplos.
        </p>
      </footer>
    </section>
  );
}

export default Listas;
