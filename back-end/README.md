## Iniciando

Primeiramente execute o comando abaixo para instalar as dependências.

```bash
npm install
```

Para executar esta aplicação em ambiente de desenvolvimento não será necessário configurar variáveis de ambiente, uma vez que foi implementado o bando de dados em arquivo SQLite. No entanto, se desejar rodar o projeto em produção, configure as varáveis a seguir.

```bash
ENVIRONMENT="production"
DATABASE_URL=#Insira aqui a URI de um banco Postgres
PORT=#3333 ou a porta de sua preferência
```

Na pasta  ./database se encontra o banco de dados em arquivo, carregado com a estrutura definida pelos arquivos de migrations além alguns registros de exemplo. Caso deseje recriar o banco, execute o script a seguir.

````bash
npm run migration:run
````

Após isso, basta rodar o comando abaixo para iniciar o projeto.
```bash
npm run dev
```

Essa API está disponível online, para acessa-la, [clique aqui](https://test-osten-moove.herokuapp.com/).
