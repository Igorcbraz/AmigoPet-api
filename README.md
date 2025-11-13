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
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`
   - Preencha com as informações necessárias (conexão com banco de dados, etc.)

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
