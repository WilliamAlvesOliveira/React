/*
  App.jsx

  Componente principal do aplicativo React.
  - Ponto de partida da interface, onde outros componentes podem ser renderizados.
  - Importa seu próprio arquivo de estilos (App.css) para manter o layout e design específicos do App.
  - Normalmente contém JSX, lógica, estados (useState) e funções que controlam o comportamento do App.
  - Pode servir como "pai" de outros componentes, recebendo e passando props conforme necessário.
  - É exportado como padrão para que o main.jsx possa importá-lo e renderizá-lo no DOM.
  
  Observação:
  - O React usa JSX para criar elementos que serão renderizados dentro do root (div #root do index.html).
  - Mesmo que o App esteja vazio inicialmente (<> </>), ele é o contêiner principal do aplicativo.
*/

import './App.css' //importa o app.css

import { useState } from 'react'
import AulaTeste from './components/aula-teste/AulaTeste'


function App() {
  const [pagina, setPagina] = useState(null)

  return (
    <div>
      <h1>Curso React</h1>

      {/* Menu principal */}
      {!pagina && (
        <>
          <button onClick={() => setPagina('aulaTeste')}>Aula Teste</button>
        </>
      )}

      {/* Renderiza a aula escolhida como um "App2" */}
      {pagina === 'aulaTeste' && <AulaTeste />}
   
    </div>
  )
}

export default App
