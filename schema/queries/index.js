/**
 * Определение корневого запроса к серверу GraphQL
 */

const { GraphQLObjectType } = require('graphql');
const { ClassesQuery, KindsQuery } = require('./infrastruct');

const RootQueryType = new GraphQLObjectType({
	name: 'RootQuery',
	description: 'Корневой запрос для элетронного архива',
	fields: {
		classes: ClassesQuery,
		kinds: KindsQuery
	}
});

module.exports = RootQueryType;
