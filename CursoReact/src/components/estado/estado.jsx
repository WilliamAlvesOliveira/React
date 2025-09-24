import { useState } from 'react'

function Estado() {
  const [contador, setContador] = useState(0)
  const [ativo, setAtivo] = useState(false)
  
  return (
    <section className='estado'>
      <h2>Estado</h2>
      
      <p>Estado é a memória de um componente. É um objeto JavaScript que armazena dados que podem mudar durante a vida do componente.</p>

      <h3>Pra que serve?</h3>

      <ul>
        <li>Controlar informações dinâmicas (como um contador, dados de um formulário, se um modal está aberto ou fechado).</li>

        <li>Quando o estado muda, o componente renderiza novamente na tela para mostrar a informação atualizada.</li>
      </ul>

      <h3>Quando usar?</h3>

      <ul><li>Em componentes funcionais (os mais comuns hoje), usamos o hook useState:</li></ul>

      <pre>
        <code>
            {`
                import { useState } from 'react';

                    function MeuComponente() {
                    // [valor, funçãoParaMudarOValor]
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
            `}
        </code>
      </pre>

      <p><strong>Obs </strong><em>Hook </em>é uma função especial que permite você "conectar-se" a recursos do React a partir de componentes funcionais.</p>

      
      <div style={{padding: '20px', border: '1px solid #ccc', marginTop: '20px'}}>
        <h4>Demonstração:</h4>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>
          Incrementar
        </button>
        
        <p style={{marginTop: '10px'}}>
          Status: {ativo ? 'ATIVO' : 'INATIVO'}
        </p>
        <button onClick={() => setAtivo(!ativo)}>
          Alternar
        </button>
      </div>

      <footer>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </section>
  )
}

export default Estado
