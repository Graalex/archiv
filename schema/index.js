/**
 * Экспорт GpaphQL схемы для электронного архива исполнительной документации.
 */

const { GraphQLSchema } = require('graphql');
const RootQueryType  = require('./queries');

module.exports = new GraphQLSchema({
	query: RootQueryType
});



