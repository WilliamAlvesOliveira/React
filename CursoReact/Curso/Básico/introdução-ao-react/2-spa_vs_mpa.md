# Diferença entre SPA e Multi-Page Apps

## O que é uma SPA (Single-Page Application)?

Uma **SPA (Single-Page Application)** é um tipo de aplicação web onde o
carregamento inicial traz uma única página HTML.\
Depois disso, o conteúdo é atualizado dinamicamente usando
**JavaScript**, geralmente com frameworks/bibliotecas como **React, Vue
ou Angular**.

### Características das SPAs:

-   O usuário não precisa recarregar a página inteira ao navegar.
-   As mudanças de tela acontecem via **JavaScript** (manipulação do DOM
    e rotas internas).
-   Melhor **experiência do usuário** (UX), pois a navegação é mais
    rápida e fluida.
-   Muito usadas em **dashboards, redes sociais, apps interativos** etc.

### Vantagens:

-   Navegação rápida (sem recarregamento completo da página).
-   Experiência semelhante a aplicativos nativos.
-   Reaproveitamento de componentes (no caso de React, Vue etc.).

### Desvantagens:

-   SEO (otimização para buscadores) mais difícil, pois o conteúdo é
    carregado dinamicamente.
-   Pode ser pesado no **carregamento inicial**.
-   Maior complexidade para lidar com **estado** e **segurança**.

------------------------------------------------------------------------

## O que é uma MPA (Multi-Page Application)?

Uma **MPA (Multi-Page Application)** é a forma tradicional de aplicações
web, onde cada nova navegação carrega uma nova página HTML diretamente
do servidor.

### Características das MPAs:

-   Cada clique em um link geralmente faz uma nova **requisição ao
    servidor**.
-   Mais fáceis de implementar em sites pequenos e **conteúdo
    estático**.
-   São o modelo usado em blogs, sites institucionais e e-commerces
    tradicionais.

### Vantagens:

-   SEO amigável (cada página tem seu próprio conteúdo indexado).
-   Menor complexidade em termos de **estado do cliente**.
-   Simplicidade para aplicações menores.

### Desvantagens:

-   Recarregamento completo da página a cada navegação.
-   Experiência do usuário menos fluida comparada às SPAs.
-   Repetição de código em páginas diferentes.

------------------------------------------------------------------------

## Quando usar SPA vs MPA?

-   **SPA**: ideal para aplicações dinâmicas, interativas, que exigem
    navegação rápida (ex: Gmail, Trello, Instagram).\
-   **MPA**: ideal para sites de conteúdo estático ou com muitas páginas
    independentes (ex: blogs, sites de notícias, e-commerces grandes).

------------------------------------------------------------------------

## Conclusão

-   SPAs focam na **experiência fluida** do usuário, sacrificando um
    pouco a simplicidade e SEO.\
-   MPAs focam na **simplicidade e SEO**, mas sacrificam a fluidez da
    navegação.\
-   Muitas aplicações modernas usam um **híbrido** (Next.js, Nuxt,
    Remix) que mistura vantagens das duas abordagens.
