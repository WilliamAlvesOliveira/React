import { useState } from 'react'

function BoasPraticas() {
  return (
    <section className='boasPraticas'>
        <h2>Aula Boas Práticas em React</h2>

        <p>Quando começamos com React, é comum cair em alguns erros: código bagunçado, nomes genéricos e falta de organização.</p>

        <p>Aqui estão 3 boas práticas essenciais para o iniciante.</p>

        <ul>
            <li>
                <h3>1) Estrutura de pastas simples</h3>
                <p>📌 No início não é preciso criar uma arquitetura gigante.</p>
                <p>Mas ter uma organização mínima já ajuda bastante:</p>

                <pre>
                    <code>
                        {`
                        src/
                        ├── components/   # Componentes reutilizáveis
                        │   ├── Botao.jsx
                        │   └── Card.jsx
                        ├── pages/        # Páginas da aplicação
                        │   └── Home.jsx
                        ├── App.jsx       # Componente principal
                        └── index.js      # Ponto de entrada
                        `}
                    </code>
                </pre>
                <p>👉 Isso evita jogar tudo no App.jsx e facilita a manutenção.</p>
            </li>

            <li>
                <h3> 2) Comentários didáticos</h3>
                <p>📌 Use comentários para explicar a intenção do código e não apenas o que ele faz.</p>
                <p>Isso ajuda não só você no futuro, mas também outras pessoas que vão ler seu código.</p>

                <pre>
                    <code>
                        {`
                        // Componente simples de botão
                        // - props: texto do botão e ação ao clicar
                        // - boa prática: props claras e autoexplicativas
                        function Botao({ texto, aoClicar }) {
                        return <button onClick={aoClicar}>{texto}</button>;
                         `}
                     </code>
                </pre>
                 <p style={{ fontSize: '12px', color: '#666' }}>
                    ⚡ Dica: comentários devem ser curtos e objetivos. Se precisar escrever muito, talvez seja melhor refatorar o código.
                 </p>
            </li>

            <li>
                <h3>3) Nomeação clara de props e funções</h3>
                <p>📌 Use nomes que explicam o que o código faz.</p>
                <p>Evite abreviações sem sentido ou nomes genéricos como x, y, handleClick1.</p>
                <h4>❌ Mau exemplo:</h4>
                <pre>
                    <code>
                        {`
                        function Btn({ t, f }) {
                            return <button onClick={f}>{t}</button>;
                        }
                        `}
                    </code>
                </pre>
                <h4>✅ Bom exemplo:</h4>
                <pre>
                    <code>
                        {`
                        function Botao({ texto, aoClicar }) {
                            return <button onClick={aoClicar}>{texto}</button>;
                        }
                        `}
                    </code>
                </pre>
            </li>
        </ul>

        <h3>📌 Exemplo completo de boas práticas</h3>

        <pre>
            <code>
                {`
                // src/components/ListaTarefas.jsx

                // ====================================================
                // 📌 Lista de Tarefas
                // - Estrutura organizada em pasta components/
                // - Comentários claros em cada função
                // - Nomeação de props e funções autoexplicativas
                // ====================================================

                function ListaTarefas() {
                // Estado que guarda a lista de tarefas
                const [tarefas, setTarefas] = useState([]);

                // Função para adicionar uma nova tarefa
                function adicionarTarefa() {
                    const nova = { id: Date.now(), texto: \`Tarefa \${tarefas.length + 1}\` };
                    setTarefas([...tarefas, nova]);
                }

                // Função para remover uma tarefa pelo id
                function removerTarefa(id) {
                    setTarefas(tarefas.filter((t) => t.id !== id));
                }

                return (
                    <div>
                    <h3>📋 Minhas Tarefas</h3>
                    <button onClick={adicionarTarefa}>Adicionar</button>
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

                export default ListaTarefas;
                `}
            </code>
        </pre>

      <footer>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </section>
  )
}

export default BoasPraticas
