# Sintaxe JSX (JavaScript XML)

## O que é JSX?

**JSX (JavaScript XML)** é uma extensão de sintaxe para o
**JavaScript**, criada para ser usada com o **React**.\
Ela permite escrever **HTML dentro do JavaScript**, tornando o código
mais declarativo e intuitivo.

Exemplo simples em JSX:

``` jsx
const element = <h1>Olá, mundo!</h1>;
```

Esse código cria um elemento `h1` que será interpretado pelo React e
transformado em **JavaScript puro**.

------------------------------------------------------------------------

## Por que usar JSX?

-   **Sintaxe declarativa:** facilita visualizar a estrutura da
    interface de usuário.\
-   **Integração com JavaScript:** permite misturar expressões JS dentro
    do HTML usando `{ }`.\
-   **Produtividade:** deixa o código mais legível e próximo do que
    realmente aparece na tela.\
-   **Poderoso:** por baixo dos panos, cada JSX é convertido em chamadas
    para `React.createElement()`.

------------------------------------------------------------------------

## Diferença entre JSX e HTML

Embora pareça HTML, JSX **não é HTML**, mas sim **JavaScript**.\
Algumas diferenças importantes:

1.  **Atributos diferentes:**

    -   HTML → `class`\
    -   JSX → `className`

    ``` jsx
    <div className="container">Conteúdo</div>
    ```

2.  **camelCase para propriedades:**

    -   HTML → `onclick`\
    -   JSX → `onClick`

    ``` jsx
    <button onClick={handleClick}>Clique</button>
    ```

3.  **Fechamento de tags:**

    -   JSX exige que todas as tags sejam **fechadas**.\

    ``` jsx
    <img src="logo.png" alt="Logo" />
    ```

4.  **Expressões dentro de chaves `{ }`:**

    ``` jsx
    const nome = "Maria";
    const element = <h1>Olá, {nome}!</h1>;
    ```

------------------------------------------------------------------------

## Expressões em JSX

Você pode inserir qualquer expressão JavaScript dentro de `{ }`:

``` jsx
const a = 5;
const b = 10;
const element = <h1>{a + b}</h1>; // 15
```

### Renderização condicional

``` jsx
const isLoggedIn = true;
const element = (
  <div>
    {isLoggedIn ? <p>Bem-vindo!</p> : <p>Faça login</p>}
  </div>
);
```

### Listas com `.map()`

``` jsx
const items = ["Arroz", "Feijão", "Macarrão"];
const list = (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

------------------------------------------------------------------------

## Diferença entre JSX e JavaScript comum

JSX é **compilado para JavaScript**. Por exemplo:

``` jsx
const element = <h1>Olá!</h1>;
```

É convertido para:

``` js
const element = React.createElement("h1", null, "Olá!");
```

Ou seja, JSX é apenas **açúcar sintático** para facilitar a escrita.

------------------------------------------------------------------------

## Regras importantes do JSX

1.  **Um único elemento pai por retorno:**

    ``` jsx
    // Errado
    return (
      <h1>Olá</h1>
      <p>Mundo</p>
    );

    // Certo
    return (
      <div>
        <h1>Olá</h1>
        <p>Mundo</p>
      </div>
    );
    ```

    Ou usar `<> </>` (Fragment):

    ``` jsx
    return (
      <>
        <h1>Olá</h1>
        <p>Mundo</p>
      </>
    );
    ```

2.  **Todas as tags devem ser fechadas.**\

3.  **Nomes de componentes devem começar com letra maiúscula.**

    ``` jsx
    function Botao() {
      return <button>Clique</button>;
    }

    // Uso:
    <Botao />
    ```

------------------------------------------------------------------------

## 🗨️ Comentários em JSX (React)

Em JSX, que é uma extensão da sintaxe JavaScript usada no React, os comentários precisam seguir uma estrutura específica para funcionarem corretamente dentro do retorno do componente.

### ✅ Como comentar dentro do JSX

Para inserir comentários **dentro do `return`**, você deve usar a sintaxe:

```jsx
{/* Este é um comentário em JSX */}

Fora do return, você pode usar os comentários normais do JavaScript:

------------------------------------------------------------------------

## Benefícios do JSX

-   Escreve-se de forma muito parecida ao HTML.\
-   Mantém a lógica de UI e a marcação no mesmo lugar.\
-   Favorece componentização.\
-   Fácil integração com variáveis, funções e lógica condicional.

------------------------------------------------------------------------

## Conclusão

JSX é uma ponte entre **JavaScript e a estrutura de interface (UI)**.\
Ele facilita a construção de componentes em React, tornando o código
mais **legível, expressivo e próximo daquilo que o usuário vê**.

> Apesar de parecer HTML, **JSX é JavaScript** e passa por um processo
> de compilação (geralmente com Babel) para virar código que o navegador
> entende.
