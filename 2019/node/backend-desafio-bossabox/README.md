<h1 align="center">Desafio Backend BossaBox | 
"Very Useful Tools to Remember"
</h1>

<p align="center">O desafio proposto pela BossaBox(https://bossabox.com/), foi de realizar a construção de uma API e Banco de Dados para a aplicação
Very Useful Tools to Remeber que possui as funcionalides de criação, edição, exclusão e filtro de ferramentas a partir de suas tags passadas
como query params na url da requisição como por exemplo /tools?tag=node`</p>

<h1 align="center">Instruções</h1>
<p align="center">
  Em caso de download do projeto você precisará baixar as dependências(node_modules): <br>
  Necessário: Yarn ou Npm instalados
  
  ```
  
  npm install
  yarn
  
  ```
</p>

<h2 align="center"> Ferramentas </h2>

<p align="center">
  Para construção da API, foi utilizado o Node.js em conjunto ao Express e o MongoDB Atlas
</p>

<p align="center">
<img height="200" width="300" src="https://user-images.githubusercontent.com/54908803/69638627-d0c56880-1039-11ea-8cfe-9c88ca6f48b7.jpg" />
</>
  
<hr>

<p align="center">
  A padronização do código foi feita utilizando ESLINT + PRETTIER com padronização a partir das regras pré-definidas pela AirBnb
<p>
  
<p align="center">
  o ESLINT é uma ferramente que nos ajuda a identificar erros de padronização no código e o Prettier nos ajuda a corrigir eles de maneira simples em
  conjunto com algumas configurações com o editor de texto.
</p>


<p align="center">
<img align="center" height="200" width="400" src="https://user-images.githubusercontent.com/54908803/69638933-6cef6f80-103a-11ea-8654-da50e2b081fa.png" />
</p>

<hr>

<p align="center">
Foi realizado também uma pequena validação de entrada dos valores de Title, Description, Link e Tags, através da utilização
do Yup(https://github.com/jquense/yup) que se baseia na validação em schemas
</p>


<p align="center">API online!<p>

<p align="center">
A API encontra-se online e disponível através do seguinte endereço:<br> https://toolstoremember.herokuapp.com/tools (Rota get)
</p>

<p align="center">
O Heroku foi o a plataforma utilizada para subir o projeto em nuvem
</p>

<p align="center">
<img height="180" width="400" src="https://user-images.githubusercontent.com/54908803/69639407-382fe800-103b-11ea-946e-154e21028ba5.png" />
</p>

<hr>



Exemplo do resultado da rota GET /tools

```
  {
    "_id": "5ddd10d20ac0423304b4e5c5",
    "title": "express",
    "link": "https://expressjs.com",
    "description": "Fast, unopinionated, minimalist web framework for node.",
    "tags": [
      "node",
      "nodejs",
      "javascript",
      "server"
    ]
  }
```

Busca de ferramentas a partir de filtro de tags:
Exemplo: URL: /tools?tag=node

```
[
  {
    "_id": "5ddd10790ac0423304b4e5c4",
    "title": "nodemon",
    "link": "http://nodemon.io/",
    "description": "Monitor for any changes in your node.js application and automatically restart the server - perfect for development",
    "tags": [
      "nodemon",
      "watch",
      "node"
    ]
  },
  {
    "_id": "5ddd10d20ac0423304b4e5c5",
    "title": "express",
    "link": "https://expressjs.com",
    "description": "Fast, unopinionated, minimalist web framework for node.",
    "tags": [
      "node",
      "nodejs",
      "javascript",
      "server"
    ]
  }
]

```
