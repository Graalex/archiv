/**
 * Иницилизация и старт GraphQL сервера
 */

const express = require('express');
const gHttp = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/archiv', gHttp({
	schema: schema,
	graphiql: true
}));

app.listen(9010, () => {
	console.log('Archiv GraphQL server start in port 9010 ...');
});
