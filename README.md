# Projeto Node.js - README

## Requisitos

- Node.js: Versão 14.x ou superior
- MongoDB: Versão 4.x ou superior
- npm: Versão 6.x ou superior (geralmente vem com a instalação do Node.js)

## Configuração Inicial

1. Clone o repositório para a sua máquina local.
2. Navegue até a pasta do projeto via terminal ou prompt de comando.
3. Execute `npm install` para instalar todas as dependências necessárias.

## Usuário Admin Padrão

- **Usuário:** admin
- **Senha:** teste123

O sistema verifica a existência deste usuário no banco de dados na inicialização. Se não encontrado, o mesmo será criado automaticamente.

## Executando o Projeto

1. Certifique-se de que o MongoDB está rodando localmente ou em um servidor remoto configurado.
2. Execute `node app.js` para iniciar o servidor.
3. Acesse a documentação da API via `http://localhost:3000/docs` para mais detalhes sobre os endpoints disponíveis.

## Funcionalidades

- **Autenticação**: Login e registro de usuários, com criação automática de um usuário admin.
- **Produtos**: Criação, atualização, visualização e exclusão de produtos.
- **Vendas**: Registro e consulta de vendas.

## Swagger

A documentação da API está disponível via Swagger UI, facilitando o teste e a interação com os endpoints da API.