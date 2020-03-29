const express = require('express');
const routes = require('./routes');
const {errors} = require('celebrate');
const cors = require('cors');

const app = express();

/**
 * método use é usado para indicar ao express qual formato será usados na requisição
 * método cors restringe quem pode acessar a aplicação. Para o caso de a aplicação estar em desenvolvimento,
 * pode-se chamar sem especificar quaisquer parametros. Para o caso de a aplicação estar em produção, especificamos
 * seu domínio de hospedagem
 */

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros usados para identificar recursos
 * Request body: Corpo da requisição, usado para criar ou alterar recursos
 * 
 */

 /**
  *  SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  *  NoSQL: MongoDB, CouchDB, etc
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
module.exports = app;


