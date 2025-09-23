# Estado em Componentes Filhos (React)

Em React, o **estado (state)** normalmente é gerenciado no componente que precisa dele.  
Quando temos **componentes filhos**, surgem algumas situações importantes para gerenciar o estado e passar informações entre os componentes.

---

## 1. Estado Local do Componente Filho

Um componente filho pode ter seu **próprio estado**, independente do pai.

```jsx
import { useState } from "react";

function Filho() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador do filho: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>+1</button>
    </div>
  );
}

function Pai() {
  return (
    <div>
      <h1>Componente Pai</h1>
      <Filho />
    </div>
  );
}
O estado contador é local ao filho.

Alterar o estado do filho não afeta o pai.

Bom para informações que não precisam ser compartilhadas.

2. Elevando o Estado (Lifting State Up)
Quando múltiplos componentes precisam compartilhar o mesmo estado, é recomendado mover o estado para o pai.

jsx
Copiar código
import { useState } from "react";

function Filho({ valor, mudarValor }) {
  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={() => mudarValor(valor + 1)}>Incrementar</button>
    </div>
  );
}

function Pai() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador Compartilhado</h1>
      <Filho valor={contador} mudarValor={setContador} />
      <Filho valor={contador} mudarValor={setContador} />
    </div>
  );
}
O estado contador está no pai.

Os filhos recebem o valor e a função de atualização via props.

Agora, ambos os filhos compartilham o mesmo estado.

3. Vantagens de Lifting State Up
Evita duplicação de estado.

Mantém os dados consistentes entre componentes.

Permite que múltiplos filhos interajam com o mesmo valor.

4. Dica: Evitar estado desnecessário nos filhos
Se o filho não precisa alterar o estado, mas apenas exibir informações do pai, não crie um estado no filho.
Exemplo errado:

jsx
Copiar código
function Filho({ valor }) {
  const [meuValor, setMeuValor] = useState(valor); // ❌ desnecessário

  return <p>{meuValor}</p>;
}
O correto é usar o valor diretamente das props:

jsx
Copiar código
function Filho({ valor }) {
  return <p>{valor}</p>;
}
5. Comunicação Pai-Filho Resumida
Direção	Como funciona
Pai → Filho	Através de props
Filho → Pai	Através de função passada pelo pai
Filho → Filho	Não direto, precisa passar via pai

6. Exemplo Completo: Contador Compartilhado
jsx
Copiar código
import { useState } from "react";

function Botao({ acao, texto }) {
  return <button onClick={acao}>{texto}</button>;
}

function Contador({ valor, setValor }) {
  return (
    <div>
      <p>Contador: {valor}</p>
      <Botao acao={() => setValor(valor + 1)} texto="+1" />
      <Botao acao={() => setValor(valor - 1)} texto="-1" />
    </div>
  );
}

function Pai() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Exemplo de Estado Compartilhado</h1>
      <Contador valor={contador} setValor={setContador} />
      <Contador valor={contador} setValor={setContador} />
    </div>
  );
}
Dois componentes Contador compartilham o mesmo estado contador.

Alterar em um re-renderiza os dois.

🔑 Resumo
Estado local no filho → bom para dados internos do componente.

Lifting State Up → mover estado para o pai quando vários filhos precisam compartilhar.

Nunca duplicar estado desnecessariamente.

Comunicação via props: pai passa valor e função de atualização, filhos chamam função para alterar o estado.

