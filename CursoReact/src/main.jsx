// Importa o StrictMode do React
// StrictMode é um componente que ativa verificações e avisos adicionais em desenvolvimento.
// Ele não altera a renderização ou o comportamento do app em produção.
// É útil para detectar problemas como efeitos colaterais inseguros ou componentes obsoletos.
import { StrictMode } from 'react'

// Importa a função createRoot do pacote react-dom/client
// createRoot é usada para criar a raiz do React no DOM e habilitar o modo concorrente (Concurrent Mode)
// Substitui o antigo ReactDOM.render do React 17.
import { createRoot } from 'react-dom/client'

// Importa o arquivo de estilos global
// index.css geralmente contém resets de CSS, variáveis e estilos globais do app.
import './index.css'

// Importa o componente principal do aplicativo
// App.jsx é o ponto de partida de toda a interface React
import App from './App.jsx'

// Seleciona o elemento root no DOM e cria a raiz React
// document.getElementById('root') retorna a div <div id="root"></div> no index.html
createRoot(document.getElementById('root')).render(
  
  // StrictMode envolve o App para habilitar verificações extras em desenvolvimento
  <StrictMode>
    <App />
  </StrictMode>,
)
