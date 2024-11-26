<h1>API Sistema PDV - Ponto de Venda</h1>

<img src="https://img.shields.io/badge/VERSION-0.01-orange"> <img src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-brightgreen">

# Índice

1. [Visão Geral](#sobre-o-projeto)
2. [Funcionalidades Implantadas](#funcionalidades-implantadas)
3. [Como Rodar o Projeto](#como-rodar-o-projeto)
4. [Executar Testes e2e](#executar-testes-e2e)
5. [Documentação](#documentação)
6. [Tecnologias Utilizadas](#tecnologias-utilizadas)

---

#

### Sobre o projeto

Desenvolvimento de uma API utilizando NestJS para um sistema de Ponto de Venda (PDV). O projeto segue práticas de código limpo, organização modular e princípios de arquitetura limpa.

A API está integrada com o PostgreSQL utilizando Prisma ORM, é totalmente dockerizada para facilitar a implantação e possui testes unitários com Jest.

### Funcionalidades implantadas

- **`Estrutura monolítica modular`:** A estrutura é modular e desacoplada com implementação de interfaces para reduzir dependências externas e permitir reaproveitamento de código, uso do sistema de DI do NestJS.

- **`Custom Exceptions e custom filters`:** Tratamento de erros e falhas com as ferramentas nativas do NestJS.

- **`Testes e2e`:** Garantia de qualidade com testes de ponta a ponta.

- **`Containerização (Docker)`:** API e banco de dados PostgreSQL configurados em contêineres.

- **`Pipes de validação e transformação`:** Aplicação de pipes para normalizar dados recebidos (ex.: remoção de espaços em body e params).

- **`Autenticação e autorização`:** Implementação de autenticação com Passport.js e controle de acesso baseado em roles.

- **`Serviços implementados`:** Auth, Users, Products, Sales, Suppliers, Categories.

- **`Documentação da API`:** A API está documentada com Swagger.

---

---

### Como Rodar o Projeto

Para rodar o projeto utilizando Docker Compose, siga os passos abaixo:

#### Pré-requisitos

Certifique-se de ter o Docker e Docker Compose instalados em sua máquina. Se ainda não tiver, você pode instalar seguindo as instruções no link abaixo:

- [Instalar Docker](https://docs.docker.com/engine/install/)

#### Passos para Rodar

1. **Clone o Repositório:**

   Clone o repositório do projeto para sua máquina local:

   ```sh
   git clone https://github.com/renannevesc94/projeto-pdv.git
   cd projeto-pdv/back-end
   ```

2. **Configure as Variáveis de Ambiente:**

Crie um arquivo .env e .env.production na raiz do projeto com as seguintes variáveis:

```sh
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
PORT_API=3000
SECRET_JWT="my_secret_jwt_key"
```

<b>Nota:</b>

- .env para ambientes de homologação.
- .env.production para produção.

3. **Construa e Inicie os Contêineres**

   A partir do terminal execute o seguinte comando:

   ```sh
   docker-compose up --build
   ```

4. **Acessar a Aplicação:**

## Após a conclusão do comando anterior, a API estará rodando e acessível na porta definida nas variáveis de ambiente.

### Executar testes e2e

1. **Populando o banco de dados:**

```sh
npx prisma db seed
```

2. **Execute o prisma studio**

```sh
npx prisma studio
```

Copie o userId criado na tabela Users e o productId da tabela Products. Utilize essas IDs para preencher o arquivo
`src/modules/sales/tests/saleData.mock.ts`

3. **Rodando os testes**

```sh
   npm run test:e2e
```

---

### Documentação

A documentação pode ser acessada com o projeto em execução pela url: `http://localhost:[PORTA]/api`

---

### Tecnologias utilizadas:

- NestJS
- PostgreSQL
- Prisma ORM
- Docker e Docker Compose
- Jest para testes unitários
