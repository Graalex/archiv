/**
 * Определение типа видов улиц
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

const StreetKindType = new GraphQLObjectType({
	name: 'StreetKind',
	description: 'Вид улиц',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название вида улиц'
		},
		short_name: {
			type: GraphQLString,
			description: 'Краткое название'
		}
	}
});

module.exports = StreetKindType;
