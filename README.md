# MinasCap_crudUsuarios# Projeto

Esse projeto é um desafio tecnico, para realizar um CRUD de usuários.

### Como usar?

Para rodar o projeto em sua máquina, você precisará ter o postgres instalado na sua máquina ou rodar via Docker.
Existe um docker-compose no projeto, paro rodar basta usar o comando:

```bash
docker-compose up -d
```

Após clonar o repositório, basta rodar o comando:

se estiver usando npm:

```bash
  npm install
```

Depois de instalar as dependências, crie o banco de dados:

```bash
  npm run db:create
```
Execute a migrations:

```bash
  npm run db:migrate
```

Se quiser popular o banco de dados:

```bash
  npm run db:seed
```

Se quiser apagar todo o banco de dados:

```bash
  npm run db:drop
```

Para rodar o servidor utilize o script:
```bash
  npm run dev
```