import React from 'react'

function AulaTemplate({ voltar }) {
  // String do template que será mostrado e copiado
  const template = 
`import { useState } from 'react'

function NovaAula() {
  return (
    <section className='{nomeDaClasse}'>
      <h2>Título da Aula</h2>
      
      <div>
        {/* Conteúdo da aula aqui */}
      </div>

      <footer>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </section>
  )
}

export default NovaAula
`

  // Função para copiar para clipboard
  const copiarTemplate = () => {
    navigator.clipboard.writeText(template)
      .then(() => alert('Template copiado!'))
      .catch(err => alert('Erro ao copiar: ' + err))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Template de Aula</h2>

      {/* Botão para copiar */}
      <div>
        <button onClick={copiarTemplate} style={{ marginBottom: '20px' }}>
          Copiar Template
        </button>
      </div>

      {/* Mostra o template como código */}
      <pre style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '5px', 
        overflowX: 'auto', 
        textAlign: 'left' 
      }}>
        <code>
          {template}
        </code>
      </pre>

      <footer style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '12px', color: '#666' }}>
          Recarregue a página para voltar ao menu.
        </p>
      </footer>
    </div>
  )
}

export default AulaTemplate
