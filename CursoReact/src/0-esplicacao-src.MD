======================
       SRC
======================

A pasta `src` é onde todo o **código fonte do seu projeto React** fica.  
É nela que você cria os componentes, adiciona estilos, gerencia os recursos estáticos e organiza a lógica do seu aplicativo.

---

======================
       main.jsx
======================

- Ponto de entrada do React.
- Seleciona o elemento `#root` no `index.html`.
- Cria a raiz do React usando `createRoot`.
- Renderiza o componente `<App />`.
- Geralmente envolve o app em `<StrictMode>` para detectar problemas em desenvolvimento.
- Exemplo:

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
======================
App.jsx
Componente principal do aplicativo.

Ponto de partida para renderizar outros componentes.

Pode conter JSX, lógica, estados e importações de outros componentes.

----------------------------------
Exemplo básico:

javascript

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  )
}

export default App
-----------------------------------

======================
index.css
Contém estilos globais da aplicação.

Importado no main.jsx para aplicar os estilos em todos os componentes.

Pode conter:

Reset de CSS

Cores padrão

Tipografia

Classes globais

======================
assets
Pasta opcional usada para recursos estáticos:

Imagens

Ícones

SVGs

Fontes

Exemplo de estrutura:

css

src/
  assets/
    logo.png
    background.svg
Importando arquivos da pasta assets em componentes:

-----------------------------------
javascript

import logo from './assets/logo.png'

function App() {
  return <img src={logo} alt="Logo" />
}
-----------------------------------

======================
Estrutura inicial recomendada
arduino
Copiar código
src/
├─ assets/           # imagens, ícones e recursos estáticos
├─ App.jsx           # componente principal
├─ index.css         # estilos globais
└─ main.jsx          # entrada do React