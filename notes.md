# Projeto Crud

## Criando o backend

- Dentro da pasta crud criar um repositório backend.
- Dentro da pasta backend criar um arquivo json usando o npm ini -y.
- Criar o server usando npm i json-server
- Criar o arquivo db.json que será o Banco de Dados do projeto.
- Alterar o package.json usando o "start": "json-server --watch db.json --port 3001" dentro de script e deletando o test:.
- Para testar o db.json, pode ser utlizado o postman para verificar o get e o post, por exemplo.

## Criando o Frontend

### Criando o projeto

- Na pasta crud, é instalado o angular globalmente, usando o comando npm i -g @angular/cli.
- Usando o comando ng new frontend --minimal, é criado o projeto angular com o minimo de arquivos necessários para um projeto.
- Confirmar o Angular routing digitando y.
- Nesse projeto será utilizado o CSS como estilização.
- Na pasta frontend é possivel iniciar a compilação do projeto para o servidor utilizando o comando npm start.

### Criando a homepage

- Foi alterado o template e o styles do component no arquivo app.component.js para um um templateUrl: app.component.html e criado esse arquivo html.
- Instalar os componentes do Material usando ng add @angular/material.
- Escolher a cor, se irá utilizar o estilo de tipogrfia do angular e moudlo de animações.Nesse projeto usaremos ambos.

### Criando o cabeçalho

- Criar o component utilizando o comando ng g c components/template/header
- Criado o cabeçalho no html e o a estilização do CSS.

### Criando o rodapé
