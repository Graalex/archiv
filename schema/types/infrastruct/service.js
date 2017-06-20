/**
 * Определение типа эксплуатационного участка
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

const ServiceType = new GraphQLObjectType({
	name: 'Service',
	description: 'Эксплуатационный участок службы сетей и ГРП',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название эксплуатационного участка'
		}
	}
});

module.exports = ServiceType;
