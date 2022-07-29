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

### Imports para o cabeçalho e o rodapé

- No app.module.ts fazer o import { MatToolbarModule } from "@angular/material/toolbar"; e adicionar o MatToolbarModule nos imports.

### Criando o cabeçalho

- Criar o component utilizando o comando ng g c components/template/header
- Criado o cabeçalho no html e o a estilização do CSS.

### Criando o rodapé

- Criar o component utilizando o comando ng g c components/template/footer
- Criado o cabeçalho no html e o a estilização do CSS.

### Criando o componente de navegação

- Criar o component utilizando o comando ng g c components/template/nav
- Realizar os seguintes imports: import { MatSidenavModule } from "@angular/material/sidenav";
  import { MatListModule } from "@angular/material/list";
- Adicionar o MatListModule e o MatSidenavModule aos imports do app.module.ts
- Criado o cabeçalho no html e o a estilização do CSS.

### Criando o componente Menu

- Criar o component utilizando o comando ng g c views/home
- Realizar o import import { MatCardModule } from "@angular/material/card"; e adcionar o MatCardModule aos imports
- Criado o menu html e a estilização do CSS.
- Alterado o texto Aplicação CRUD do header para Início.

### Criando o comppnente product-crud

- Criar o component utilizando o comando ng g c vies/product-home.
