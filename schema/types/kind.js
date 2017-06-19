/**
 *  Описание типов.
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');

const KindType = new GraphQLObjectType({
	name: 'kind',
	description: 'Вид исполнительной документации',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название вида'
		}
	})
});

module.exports = KindType;
