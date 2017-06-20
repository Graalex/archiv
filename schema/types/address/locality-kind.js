/**
 * Определение типа видов населенных пунктов
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

const LocalityKindType = new GraphQLObjectType({
	name: 'LocalityKind',
	description: 'видов населенных пунктов',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название вида населенного пункта'
		},
		short_name: {
			type: GraphQLString,
			description: 'Краткое название'
		}
	}
});

module.exports = LocalityKindType;
