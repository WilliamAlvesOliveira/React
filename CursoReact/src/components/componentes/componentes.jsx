// Importamos o React Hook "useState" (não vamos usar muito aqui, mas já fica preparado caso queira mostrar estados)
import { useState } from 'react'

// Importamos um componente externo que criamos em outro arquivo.
// Isso mostra como separar a lógica em vários arquivos para deixar o projeto organizado.
import  ComponenteExterno from './components/componenteExterno'
import { InputControlado, InputNaoControlado } from './components/input'
import Contador from './components/ComponenteState'


//Saudação é um componente escrito no mesmo arquivo do ponto de entrada
function Saudacao(){
    return <p>Olá, Mundo!</p>
}

//componente que cria botões com os valores passados pela propriedade texto
function Botao({ texto = 'novo botão' }) {//note que texto tem um valor default
    return <button>{texto}</button>
}


//componente criado a partir da propriedade clildren passando a estrutura entre as tags de abertura e fechamento do componente
function Card({ children }) {
    return  <div style={{border:'1px solid black', borderRadius: '10px'}}>
        {children}
    </div>
}

function BotaoClicavel({ texto, aoClicar }) {
    return <button onClick={aoClicar}>{texto}</button>
}

function handleClick(){
    alert('botão clicado!')
}

function Alerta({ tipo, mensagem }) {
    const cores = {
        sucesso: "green",
        erro: "red",
        aviso: "orange"
    }

    return <p style={{ color: cores[tipo] }}>{mensagem}</p>
}


// Criamos o componente principal chamado "Componente".
// Em React, componentes são funções que retornam JSX.
function Componente() {
  return (
    <section className='componente'>
      <h2>Componentes</h2>

      {/* ====================================================
          1) COMPONENTE NO MESMO ARQUIVO
          ==================================================== */}
      <div>
        <h3>Componente no mesmo arquivo</h3>
        <p>
          Podemos criar componentes dentro do mesmo arquivo onde usamos. 
          Isso é útil para exemplos pequenos ou quando o componente não será reutilizado em outros lugares.
        </p>
        <pre>
            {`
            function Saudacao() {
            return <h1>Olá, mundo!</h1>
            }

            function App() {
            return <Saudacao /> // uso do componente no mesmo arquivo
            }
            `}
        </pre>
      </div>

      {/* ====================================================
          2) COMPONENTE EXTERNO (IMPORTADO)
          ==================================================== */}
      <div>
        <h3>Componente externo</h3>
        <p>
          Para deixar o código mais limpo, podemos criar um componente em outro arquivo
          e importá-lo aqui. Isso facilita a reutilização em outros lugares do projeto.
        </p>
        <pre>
            {`// ComponenteExterno.jsx
            export function ComponenteExterno() {
            return <p>Sou um componente externo!</p>
            }

            // App.jsx
            import { ComponenteExterno } from './components/ComponenteExterno'

            function App() {
            return <ComponenteExterno />
            }
            `}
        </pre>

      </div>

      {/* ====================================================
          3) PROPS
          ==================================================== */}
      <h2>Props</h2>
      <div>
        <h3>Passando propriedades para o componente</h3>
        <p>
          Props (propriedades) permitem enviar dados de um componente pai para um filho.
          Elas funcionam como "parâmetros de função".
        </p>
        <p>Como os parametros de função, as props também podem conter um valor <em>defalt</em> caso nada seja passado para a propriedade</p>
        <pre>
            {`function Botao({ texto='novo botão' }) {
            return <button>{texto}</button>
            }

            function App() {
            return (
                <>
                <Botao texto="Salvar" />
                <Botao texto="Cancelar" />
                </>
            )
            }
            `}
        </pre>

        <h2>Prop Types</h2>

        <p>
        O <code>PropTypes</code> é uma forma de <strong>validar os tipos das props</strong> que um componente recebe.  
        Ele não afeta a execução em produção (o React roda normalmente mesmo se você passar o tipo errado), mas em ambiente de desenvolvimento gera <strong>warnings no console</strong> caso o valor não corresponda ao esperado.  
        Isso ajuda a prevenir erros e a manter a documentação clara do componente.
        </p>

        <pre>
        {`
            import PropTypes from "prop-types";

            // Componente que espera receber uma prop 'texto'
            function Botao({ texto }) {
                return <button>{texto}</button>;
            }

            // Definindo o tipo da prop
            Botao.propTypes = {
                texto: PropTypes.string.isRequired, // string obrigatória
            };

            // Definindo valor padrão caso a prop não seja passada
            Botao.defaultProps = {
                texto: "Clique aqui",
            };
        `}
        </pre>

        <p>
        Alguns tipos comuns disponíveis em <code>PropTypes</code>:
        </p>
        <ul>
            <li><code>PropTypes.string</code> → texto</li>
            <li><code>PropTypes.number</code> → números</li>
            <li><code>PropTypes.bool</code> → verdadeiro/falso</li>
            <li><code>PropTypes.array</code> → arrays</li>
            <li><code>PropTypes.object</code> → objetos</li>
            <li><code>PropTypes.func</code> → funções</li>
            <li><code>PropTypes.node</code> → qualquer coisa renderizável (string, número, JSX, fragmento)</li>
            <li><code>PropTypes.element</code> → um elemento React específico</li>
        </ul>

        <p>
        Você também pode combinar validadores, por exemplo:  
        <code>PropTypes.oneOf(["primario", "secundario"])</code> para restringir valores possíveis de uma prop.  
        Ou ainda <code>PropTypes.arrayOf(PropTypes.number)</code> para exigir um array apenas de números.
        </p>

       <p style={{ fontSize: '12px', color: '#666' }}>
            <strong>OBS:</strong> Em TypeScript, por ser nativamente fortemente tipado, o uso de PropTypes é menos comum. 
            A validação de tipos é feita pelo compilador, garantindo maior segurança e evitando a necessidade de checagens em runtime.
        </p>

      </div>

      {/* ====================================================
          4) PROP CHILDREN
          ==================================================== */}
      <div>
        <h2>Prop children</h2>
        <p>
          A prop <b>children</b> é especial no React e permite passar elementos
          ou conteúdo dentro do componente.
        </p>
        <pre>
            {`function Card({ children }) {
            return <div className="card">{children}</div>
            }

            function App() {
            return (
                <Card>
                <h1>Título dentro do Card</h1>
                <p>Texto dentro do Card</p>
                </Card>
            )
            }
            `}
        </pre>
      </div>

      {/* ====================================================
          5) PASSANDO FUNÇÕES COMO PROP
          ==================================================== */}
          <div>
        <h2>Passando funções como prop</h2>
        <p>
          Em React, também podemos passar <b>funções</b> como propriedades para os componentes filhos.
          Isso é muito usado, por exemplo, em botões que precisam executar uma ação definida no componente pai.
        </p>
        <p>
          ⚠️ Importante: quando passamos a função, precisamos envolvê-la em uma função anônima 
          se quisermos apenas "referenciar" e não executá-la imediatamente.
        </p>
        <pre>
            {`function BotaoClicavel({ texto, aoClicar }) {
            return <button onClick={aoClicar}>{texto}</button>
            }

            function App() {
            // Função que queremos passar como prop
            const handleClick = () => alert("Botão foi clicado!");

            return (
                <>
                {/* Aqui passamos a função corretamente */}
                <BotaoClicavel texto="Clique aqui" aoClicar={() => handleClick()} />

                {/* Se fizermos assim: aoClicar={handleClick()} 
                    -> a função será executada imediatamente ao renderizar */}
                </>
            )
            }
            `}
        </pre>
      </div>

      {/* ====================================================
          6) COMPONENTES REUTILIZÁVEIS
          ==================================================== */}
      <div>
        <h2>Componentes reutilizáveis</h2>
        <p>
          Podemos criar componentes genéricos que recebem props e podem ser usados
          em vários contextos diferentes. Isso evita repetição de código.
        </p>
        <pre>
            {`function Alerta({ tipo, mensagem }) {
            const cores = {
                sucesso: "green",
                erro: "red",
                aviso: "orange"
            }

            return <p style={{ color: cores[tipo] }}>{mensagem}</p>
            }

            function App() {
            return (
                <>
                <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
                <Alerta tipo="erro" mensagem="Algo deu errado." />
                <Alerta tipo="aviso" mensagem="Cuidado ao prosseguir." />
                </>
            )
            }
            `}
        </pre>
      </div>

      {/* ====================================================
      8) COMPONENTES CONTROLADOS vs NÃO CONTROLADOS
      ==================================================== */}
        <div>
        <h2>Componentes Controlados vs Não Controlados</h2>

        <p>
            Em React, inputs e formulários podem ser tratados de duas formas principais:
        </p>

        <ul>
            <li>
            <b>Controlados:</b> O React "controla" o valor do input através do estado (useState).  
            Todo valor exibido no input vem do estado, e qualquer alteração dispara uma atualização do estado.
            </li>
            <li>
            <b>Não Controlados:</b> O DOM mantém o valor do input internamente.  
            O React não acompanha o valor em tempo real, e você precisa usar referências (<code>ref</code>) para acessá-lo.
            </li>
        </ul>

        <p>Exemplo de componente controlado:</p>
        <pre>
            {`
        function InputControlado() {
        const [valor, setValor] = useState("");

        function handleChange(event) {
            setValor(event.target.value);
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert("Valor enviado: " + valor);
        }

        return (
            <form onSubmit={handleSubmit}>
            <input type="text" value={valor} onChange={handleChange} />
            <button type="submit">Enviar</button>
            </form>
        );
        }
            `}
        </pre>

        <p>Exemplo de componente não controlado:</p>
        <pre>
            {`
        import { useRef } from "react";

        function InputNaoControlado() {
        const inputRef = useRef();

        function handleSubmit(event) {
            event.preventDefault();
            alert("Valor enviado: " + inputRef.current.value);
        }

        return (
            <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type="submit">Enviar</button>
            </form>
        );
        }
            `}
        </pre>

        <p>
            <b>Dica:</b> Prefira componentes controlados, pois eles permitem sincronizar o estado da UI com o estado da aplicação, facilitando validação e manipulação de dados.
        </p>
        </div>

    {/* ====================================================
        DIFERENÇA ENTRE PROPS E STATE
    ==================================================== */}
        <div>
        <h2>Props vs State</h2>
        <p>
            Em React, <b>props</b> e <b>state</b> são formas de armazenar dados, mas com diferenças importantes:
        </p>

        <ul>
            <li>
            <b>Props:</b> São passadas do componente pai para o filho. 
            Servem para enviar informações e não podem ser alteradas pelo componente que as recebe.
            </li>
            <li>
            <b>State:</b> É um dado interno do componente que pode ser alterado. 
            Quando o state muda, o componente re-renderiza para refletir a alteração na UI.
            </li>
        </ul>

        <p>Exemplo prático:</p>
        <pre>
            {`
            // Componente com State
            function Contador() {
            const [contador, setContador] = useState(0);

            return (
                <>
                <p>Contador: {contador}</p>
                <button onClick={() => setContador(contador + 1)}>Incrementar</button>
                </>
            );
            }

            // Componente com Props
            function Saudacao({ nome }) {
            return <p>Olá, {nome}!</p>;
            }

            // Uso
            <Saudacao nome="William" />
            `}
        </pre>

        <p>
            Resumindo: <b>props</b> são imutáveis e vêm do pai, <b>state</b> é mutável e interno ao componente.
        </p>
        </div>



      <h2>Implementando os componentes</h2>

      <div className='result'>
        <h4>Componente Interno</h4>
        <Saudacao />
        <hr />
        <h4>Componente Externo</h4>
        <ComponenteExterno />
        <hr />
        <h4>Componente com props</h4>
        <Botao texto="Salvar" />
        <Botao texto="Cancelar" />
        <Botao />
        <hr />
        <h4>Componente com prop children</h4>
        <Card>
            <h3>Título dentro do Card</h3>
            <p>Texto dentro do Card</p>
        </Card>
        <hr />
        <h4>Passando uma função como Prop</h4>
        <BotaoClicavel texto="Clique aqui" aoClicar={() => handleClick()} />
        <hr />
        <h4>Componente Reutilizável</h4>
        <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
        <Alerta tipo="erro" mensagem="Algo deu errado." />
        <Alerta tipo="aviso" mensagem="Cuidado ao prosseguir." />
        <hr />
        <h4>Componente controlado vs não controlado</h4>
        <h5>Componente controlado</h5>
        <InputControlado />
        <h5>Componente Não Controlado</h5>
        <InputNaoControlado />
        <hr />
        <h4>Componente com State</h4>
        <Contador />
        
      </div>

      {/* Rodapé simples */}
      <footer>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </section>
  )
}

// Exportamos o componente principal para ser usado em outros arquivos
export default Componente
