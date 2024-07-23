<h1>API Sistema PDV (em desenvolvimento)</h1>

<img src="https://img.shields.io/badge/VERSION-0.01-orange"> <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-brightgreen">

##

Desenvolvimento de uma **_API_** utilizando NestJS para um sistema de Ponto de Venda (PDV). O projeto segu práticas de código limpo e organização modular, aderindo aos princípios de arquitetura limpa. A API está integrada com o PostgreSQL utilizando Prisma ORM, é totalmente dockerizada para facilitar a implantação e tem uma boa cobertura de testes unitários com Jest.

<h2>Funcionalidades implantadas </h2>

- **`Estrutura modular e escalável`:** A estrutura é modular e desacoplada com implementação de interfaces para reduzir dependências externas e maximizar o reaproveitamento de código.
- **`Custom Exceptions e custom filters`:** Utilização dos recursos do NestJS para capturar, tratar e responder falhas e erros na aplicação.
- **`Testes unitários e e2e`:** Implementação de testes unitários e end-to-end para garantir a qualidade e funcionalidade da aplicação.
- **`Containerização (Docker)`:** API e banco de dados PostgreSQL dockerizados para facilitar a implantação e a consistência do ambiente.
- **`Pipes de validação e transformação`:** Aplicação de pipes de transformação para remover espaços no body e params de requisições, evitando falhas futuras. Os pipes de validação verificam a integridade dos dados recebidos com base em DTOs.

- **`CRUD de usuários`:** Implementação das rotas e serviços para registro e consulta de usuários no banco de dados.

##

<h4>Como rodar o projeto</h4>

#### Pré-requisitos

Certifique-se de ter o Docker e Docker Compose instalados em sua máquina. Se ainda não tiver, você pode instalar seguindo as instruções no link abaixo:

- [Instalar Docker](https://docs.docker.com/engine/install/)

## Como Rodar o Projeto

Para rodar o projeto utilizando Docker Compose, siga os passos abaixo:

#### Passos para Rodar

1. **Clone o Repositório:**

   Clone o repositório do projeto para sua máquina local:

   ```sh
   git clone https://github.com/renannevesc94/projeto-pdv.git
   cd projeto-pdv
   ```

2. **Prepare o ambiente:**

   Dentro da raiz do projeto crie um arquivo .env contendo a URL de conexão do banco de dados como no exemplo:

   ```sh
   DATABASE_URL="postgresql://"
   ```

3. **Faça o build e inicie os contêiners:**

   A partir do terminal execute o seguinte comando:

   ```sh
   docker-compose up --build

   ```

4. **Acessar a Aplicação:**

   Após a conclusão do comando anterior, a API estará rodando e acessível em http://localhost:3000.
