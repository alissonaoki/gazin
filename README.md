# Crud Gazin Desenvolvedores 

#### Api_Rest: Api foi desenvolvida em node.js  

#### App: front-end bem basico desenvolvido em react.js

#### API
Desenvolvida com o framework express, com o banco de dados Mongodb. Testes Unitarios desenvolvidos utilizando o framework mocha, a biblioteca chai e o pacote sinon.

#### APP
Bem basico e facil de usar.

### Instrucoes:

* Na raiz do projeto executar

* docker compose up -d --build

* Acesso ao front end: http://localhost:3000

* O banco de dados esta rodando na porta 27017, a API na porta 3030 e frontend na porta 3000.

## API:

#### POST: http://localhost:3030/developers/

#### GET: http://localhost:3030/developers/

#### PUT: http://localhost:3030/developers/ID

#### DELETE: http://localhost:3030/developers/ID


## POST: http://localhost:3030/developers/

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Obrigatorio JSON exemplo:

    { "nome": "Alisson Seiji Aoki", 
      "sexo": "Masculino",
      "idade": 25,
      "hobby": "Desenvolver Aplicações",
      "datanascimento": "1995-08-21" }

###### API Retorna o ID
    
    { "id": "6016c644d55d790013f48407" }
   

## GET: http://localhost:3030/developers/

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Retorno:
    {   "nome": "Alisson",
        "idade": 10,
        "sexo": "M",
        "hobby": "gazin",
        "datanascimento": "1994-05-05T00:00:00.000Z",
        "createdDate": "2021-01-31T14:33:29.406Z",
        "__v": 0,
        "id": "6016bfb9647aa60013cea3e2" }


## PUT: http://localhost:3030/developers/ID

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

###### Obrigatorio JSON exemplo:

    { "nome": "Alisson Seiji Aoki",
      "sexo": "Masculino",
      "idade": 25,
      "hobby": "Desenvolver Aplicações",
      "datanascimento": "1995-08-21" }


## DELETE: http://localhost:3030/developers/ID

###### Headers Obrigatorios: headers {  "Content-type": "application/json" }

Posteriormente podera ser realizado uma documentancao ultilizando por exemplo a ferramenta Petstore Swagger.

## Teste unitarios

##### Acessar a parta API_REST e rodar o comando npm test.



