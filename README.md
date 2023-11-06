
# Node CRUD de Clientes e Produtos

Este é um projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido em Node.js, que permite gerenciar clientes e produtos em um banco de dados.

## Instalação

Certifique-se de ter o Node.js instalado. Em seguida, siga estas etapas:

1. Clone este repositório.
2. Na pasta raiz do projeto, execute o seguinte comando para instalar as dependências:
npm install

3. Configure o banco de dados de sua escolha. Certifique-se de atualizar as credenciais de conexão no arquivo `config/database.js`.

## Uso

Para iniciar o servidor, use o seguinte comando:

npm start


Isso iniciará o servidor Node.js. Você pode então acessar os endpoints disponíveis para gerenciar os clientes e produtos.

## Endpoints

### Clientes

- `GET /clientes`: Retorna todos os clientes.
- `GET /clientes/:id`: Retorna um cliente específico com o ID fornecido.
- `POST /clientes`: Cria um novo cliente.
- `PUT /clientes/:id`: Atualiza um cliente existente com o ID fornecido.
- `DELETE /clientes/:id`: Remove um cliente com o ID fornecido.

### Produtos

- `GET /produtos`: Retorna todos os produtos.
- `GET /produtos/:id`: Retorna um produto específico com o ID fornecido.
- `POST /produtos`: Cria um novo produto.
- `PUT /produtos/:id`: Atualiza um produto existente com o ID fornecido.
- `DELETE /produtos/:id`: Remove um produto com o ID fornecido.

Certifique-se de usar um cliente de API, como Postman ou Insomnia, para interagir com os endpoints.

## Contribuição

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


