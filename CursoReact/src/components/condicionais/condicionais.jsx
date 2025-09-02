import { useState } from 'react'

function CondicionaisCompletas() {
  // Estado para o exemplo inicial Mostrar/Ocultar conteúdo
  const [mostrar, setMostrar] = useState(false)

  // Estados para os exemplos detalhados de cada condicional
  const [mostrarIfElse, setMostrarIfElse] = useState(false)
  const [mostrarTernario, setMostrarTernario] = useState(false)
  const [mostrarAnd, setMostrarAnd] = useState(false)

  // Função auxiliar para demonstrar if/else
  function renderIfElse() {
    if (mostrarIfElse) {
      return <p style={{ color: 'blue' }}>O conteúdo IF/ELSE está sendo exibido!</p>
    } else {
      return <p>Clique no botão para mostrar o conteúdo IF/ELSE.</p>
    }
  }

  return (
    <section className="condicionais-completas" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Condicionais para Renderização</h2>

      {/* Introdução geral */}
      <p>
        A renderização condicional em React permite exibir diferentes elementos ou componentes na interface com base em determinadas condições. 
        Em vez de renderizar sempre o mesmo conteúdo, podemos usar if/else, operador ternário ou operador lógico &&. 
        Isso torna os componentes mais dinâmicos e interativos, permitindo que a interface reaja a mudanças de estado ou props.
      </p>

      {/* Exemplo prático inicial */}
      <p>
        Neste exemplo inicial, usamos um botão que alterna entre <strong>mostrar</strong> e <strong>ocultar</strong> um conteúdo. 
        Quando o estado <code>mostrar</code> é <code>false</code>, o parágrafo não é renderizado. 
        Ao clicar no botão, o estado muda para <code>true</code> e o conteúdo aparece.
      </p>

      {/* Condicional prática com operador lógico && */}
      {mostrar && (
        <p style={{ color: 'green' }}>
          ✅ O conteúdo agora está visível! Isso acontece porque usamos <code>mostrar && &lt;p&gt;...&lt;/p&gt;</code>.
          Se o estado for false, o parágrafo não é exibido.
        </p>
      )}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar conteúdo' : 'Mostrar conteúdo'}
      </button>

      {/* Seção detalhada com três tipos de condicional */}
      <p style={{ marginTop: '20px' }}>
        Agora vamos ver exemplos detalhados das três principais formas de renderização condicional:
        <strong>if/else</strong>, <strong>operador ternário</strong> e <strong>operador lógico &&</strong>.
      </p>

      {/* --- 1. If/Else --- */}
      <h3>1. If/Else</h3>
      <p>
        Usamos if/else quando precisamos de condições mais complexas ou múltiplos caminhos. 
        Normalmente é usado fora do JSX em funções auxiliares.
      </p>

      <pre><code>
{`// Função auxiliar renderIfElse()
function renderIfElse() {
  if (mostrarIfElse) {
    // Se verdadeiro, retorna JSX azul
    return <p style={{ color: 'blue' }}>O conteúdo IF/ELSE está sendo exibido!</p>
  } else {
    // Se falso, retorna mensagem padrão
    return <p>Clique no botão para mostrar o conteúdo IF/ELSE.</p>
  }
}`}
      </code></pre>

      {/* Renderização prática */}
      {renderIfElse()}
      <button onClick={() => setMostrarIfElse(!mostrarIfElse)}>
        {mostrarIfElse ? 'Ocultar' : 'Mostrar'}
      </button>

      {/* --- 2. Operador Ternário --- */}
      <h3>2. Operador Ternário</h3>
      <p>
        O operador ternário <code>condicao ? valorSeVerdadeiro : valorSeFalso</code> permite renderizar 
        diretamente dois resultados dentro do JSX.
      </p>

      <pre><code>
{`<p>
  {mostrarTernario 
    ? "O conteúdo TERNÁRIO está sendo exibido!"  // se true
    : "Clique no botão para mostrar o conteúdo TERNÁRIO."} // se false
</p>`}
      </code></pre>

      <p>
        {mostrarTernario
          ? "O conteúdo TERNÁRIO está sendo exibido!"
          : "Clique no botão para mostrar o conteúdo TERNÁRIO."}
      </p>
      <button onClick={() => setMostrarTernario(!mostrarTernario)}>
        {mostrarTernario ? 'Ocultar' : 'Mostrar'}
      </button>

      {/* --- 3. Operador Lógico && --- */}
      <h3>3. Operador Lógico &&</h3>
      <p>
        O operador <code>&&</code> é usado para renderizar algo somente se a condição for verdadeira. 
        Não há else nesse caso.
      </p>

      <pre><code>
{`{mostrarAnd && (
  <p>O conteúdo && está sendo exibido porque mostrarAnd é true!</p>
)}`}
      </code></pre>

      {mostrarAnd && (
        <p style={{ color: 'green' }}>
          O conteúdo && está sendo exibido porque mostrarAnd é true!
        </p>
      )}
      <button onClick={() => setMostrarAnd(!mostrarAnd)}>
        {mostrarAnd ? 'Ocultar' : 'Mostrar'}
      </button>

      {/* Footer com instrução de recarregar */}
      <footer style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </section>
  )
}

export default CondicionaisCompletas
