# TechMan
Este repositório contém o código-fonte do desafio/projeto TechMan uma aplicação web que tem finalidade de preparar nossa turma para o saep
e exercitar nossa produtividade.

## Instalação
Para executar a aplicação localmente, siga os passos abaixo:

- Clone este repositório em sua máquina local.
  ```
  git clone https://github.com/GleidsonSousa/techman
  ```

- Acesse a pasta backend:
  ```
  cd backend
  ```

- Instale as dependências necessárias, utilizando o gerenciador de pacotes de sua preferência. Recomendamos o uso do npm:
```
  npm install
```
 
- De Start em um servidor local:
  - utilizamos XAMPP no nosso curso, start o Apache e MySQL.

- Crie um arquivo .env no  backEnd e coloque  as seguintes informnações:
```
  DATABASE_URL="mysql://root:@localhost:3306/techman"
  PORT=2550
```

- Depois de seguir esses passos de um comando para que o prisma faça a migração do banco de dados no seu Computador:

- Inicie a aplicação:
  ```
  nodemon
  ```

Então o servidor estará funcionando no endereço http://localhost:2550 ou http://localhost:3000 (caso não defina uma PORT no arquivo .env) . Cheque o arquivo de rotas para prosseguir com requisições.


O projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express.js
- Prisma
