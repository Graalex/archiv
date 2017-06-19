/**
 * Определение запросов к серверу GraphQL
 */
const { GraphQLObjectType, GraphQLList } = require('graphql');
const { KindType } = require('./types');
const kindResolver = require('./resolvers');

module.exports = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Корневой запрос',
	fields: {
		kinds: {
			type: new GraphQLList(KindType),
			description: 'Возвращает список видов исполнительной документации.',
			resolve: kindResolver
		}
	}
});
