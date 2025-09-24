# ✅ Listas e Keys no React

Neste guia você vai aprender sobre dois conceitos fundamentais do React
ao trabalhar com listas de dados: **como renderizar arrays** e a
**importância das keys únicas**.

------------------------------------------------------------------------

## 🔹 Renderizando arrays com `map`

No React, a forma mais comum de renderizar uma lista de elementos é
usando o método **`.map()`** do JavaScript.

Exemplo simples:

``` jsx
function ListaDeNomes() {
  const nomes = ["Ana", "Bruno", "Carlos", "Diana"];

  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}
```

📌 O que está acontecendo aqui: 1. Temos um **array de nomes**. 2.
Usamos `.map()` para transformar cada item em um elemento `<li>`. 3.
Cada item precisa de uma propriedade especial chamada **`key`**.

------------------------------------------------------------------------

## 🔹 Importância das **keys únicas**

As **keys** ajudam o React a identificar quais itens foram adicionados,
removidos ou modificados em uma lista.\
Sem keys corretas, o React pode se perder na hora de atualizar a
interface, causando bugs ou comportamento estranho.

⚠️ Problema comum: usar apenas o `index` como key.

``` jsx
<li key={index}>{nome}</li>
```

Isso funciona, mas pode gerar problemas se a ordem dos itens mudar,
porque o React usa o `index` para diferenciar os elementos.

✅ Melhor prática: usar um **id único** ou algum valor que identifique
de forma estável cada item.

``` jsx
function ListaDeUsuarios() {
  const usuarios = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carlos" },
  ];

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nome}</li>
      ))}
    </ul>
  );
}
```

------------------------------------------------------------------------

## 📝 Resumindo

-   Use `.map()` para transformar arrays em listas de elementos React.\
-   Sempre adicione uma `key` única em cada item da lista.\
-   Prefira usar **ids únicos** ao invés do índice do array.

------------------------------------------------------------------------

## 🚀 Exercício prático

1.  Crie um array com **nomes de matérias** que você estuda.\
2.  Renderize esse array em uma `<ul>` usando `.map()`.\
3.  Primeiro use o **index** como `key`.\
4.  Depois refaça usando **ids únicos** para cada item.\
5.  Observe a diferença ao adicionar ou remover itens.

------------------------------------------------------------------------

Com isso, você já entende um dos pilares do React para lidar com listas!
