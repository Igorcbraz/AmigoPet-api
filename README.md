# AmigoPet-api API

API do projeto AmigoPet-api, desenvolvida como parte do projeto acadêmico do Senac.

## Sobre o Projeto

O AmigoPet-api é uma aplicação para gerenciamento dos pets, permitindo o controle de consultas, veterinários e demais funcionalidades relacionadas aos cuidados com animais de estimação.

## Requisitos

- Node.js (versão recomendada: 14.x ou superior)
- NPM
- Banco de dados (conforme configurado no projeto)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/AmigoPet-api.git
cd AmigoPet-api
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo de exemplo para `.env`:

```bash
# Unix/macOS
cp .env.example .env

# Windows (PowerShell)
Copy-Item .env.example .env
```

   - Abra `.env` e preencha as variáveis necessárias:
     - DB_USERNAME=
     - DB_PASSWORD=
     - DB_NAME=
     - DB_HOST=
     - JWT_SECRET=

4. Crie e prepare o banco de dados PostgreSQL (exemplo usando psql):

```bash
# criar o banco (ajuste usuário/host conforme necessário)
psql -U <DB_USERNAME> -h <DB_HOST> -c "CREATE DATABASE <DB_NAME>;"

# ou usando createdb
createdb -U <DB_USERNAME> -h <DB_HOST> <DB_NAME>
```

5. Execute as migrações para criar as tabelas:

```bash
# cria o banco (se ainda não criado) e aplica migrações
npx sequelize-cli db:create
npm run mig
```

6. Inicie a API em modo de desenvolvimento:

```bash
npm run dev
```

7. Verifique o health da API:

```bash
curl http://localhost:3000/health
```

Observações:
- Não comite o arquivo `.env` com segredos. Use variáveis de ambiente seguras em produção.
- Se você estiver usando Docker ou outra infraestrutura, ajuste os comandos de criação do banco conforme necessário.

## Executando o Projeto

1. Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run dev
```

2. Para iniciar em modo de produção:

```bash
npm start
```

O servidor estará disponível em `http://localhost:<PORTA>` (a porta padrão é 3000, a menos que seja configurada diferente no arquivo .env).

## Rotas da API

As principais rotas disponíveis são:

- `/api/users` - Gerenciamento de usuários

## Frontend

O frontend deste projeto está disponível em um repositório separado:
[AmigoPet Frontend](https://github.com/Igorcbraz/AmigoPet)

## Contribuição

Para contribuir com o projeto, siga as boas práticas de desenvolvimento, crie branches para novas funcionalidades e envie pull requests para revisão.

## Licença

Este projeto está licenciado sob a licença MIT
