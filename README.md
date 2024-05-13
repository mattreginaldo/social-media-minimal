# Social CRUD

Basicamente um CRUD de algumas funcionalidades de um forúm/rede social.

Projeto desenvolvido utilizando:

- React
- Vite
- Typescript
- React Hook Form
- Zod
- React Query
- Axios
- Styled Components
- Material UI

## Requisitos

Para executar o projeto, basta ter o NodeJS e o seu gerenciador de pacotes instalado, recomendo a utilização do pnpm que foi o usado para criar o projeto.

## Rodando projeto

Rodar este projeto é simples:
s

```sh
pnpm install ou pnpm i
```

```sh
pnpm dev
```

## Testando

Para testar o CRUD:

- GET

  - Alguns dados já virão de um GET na api setados inicialmente no db.json do json-server.

- POST

  - Criando uma nova postagem.

- PUT

  - O update é feito ao atualizar os dados do perfil.

- DELETE
- Apague uma postagem que você mesmo fez clicando na lixeira.

### API e Hospedagem

O projeto utiliza [json-Server](https://github.com/typicode/json-server/tree/v0) para simular uma REST API.

A hospedagem da API e do projeto front-end foi feito no Vercel.

Você pode ver o front-end rodando aqui:

[Social CRUD](https://social-media-minimal-2oy05awl1-mateus-projects-4c711f74.vercel.app/)

E a API fake aqui:

[API Fake](https://social-media-minimal-api-fake.vercel.app/)

## Consideranções sobre a API Fake

Você vai perceber que depois de um determinado tempo os dados são resetados na API e que ela volta ao estado inicial.

<p align="center"><img  src="https://user-images.githubusercontent.com/51330232/197884349-fec3877b-df77-4467-bd89-7d39a435530a.png"/></p>

<div align="center">
    <img width="75px" src="https://scontent.cdninstagram.com/v/t39.30808-6/410252134_18391801138066325_1508734687614870344_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=105&_nc_ohc=lRiQjY5Fw8YQ7kNvgEau2Cs&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzI1OTk2NTgxODY0NDUwNjc4Mw%3D%3D.2-ccb7-5&oh=00_AYBQs0a7pdtY637dcL0rhSmQAwQC4YCvGLAlRqHIw_Ug3A&oe=6645F5B3&_nc_sid=10d13b">
  <p align="center">
    Built and maintained by <a href="https://www.linkedin.com/in/mateusreginaldo/">Mateus Reginaldo</a>.
  </p>
</div>
