/**
 * Экспорт GpaphQL схемы для электронного архива исполнительной документации.
 */

const { GraphQLSchema } = require('graphql');
const Query = require('./queries');

module.exports = new GraphQLSchema({
	query: Query
});



