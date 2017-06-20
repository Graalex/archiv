/**
 * Определение запросов к серверу GraphQL
 */
const { GraphQLObjectType, GraphQLList } = require('graphql');
const { KindDocType } = require('./types/infrastruct');
const kindResolver = require('./resolvers');

module.exports = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Корневой запрос',
	fields: {
		kinds: {
			type: new GraphQLList(KindDocType),
			description: 'Возвращает список видов исполнительной документации.',
			resolve: kindResolver
		}
	}
});
