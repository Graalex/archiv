/**
 * Определение типа Рабочее давление газопровода
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

const PressureType = new GraphQLObjectType({
	name: 'Pressure',
	description: 'Тип рабочего давления газопровода',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название типа давления'
		}
	}
});

module.exports = PressureType;
