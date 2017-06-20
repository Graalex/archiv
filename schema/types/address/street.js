/**
 * StreetType - представляет улицу
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const AddressType = require('./address');
const LocalityType = require('./locality');
const StreetKindType = require('./street-kind');

const StreetType = new GraphQLObjectType({
	name: 'Street',
	description: 'Административная единица - улица',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		kind: {
			type: StreetKindType,
			description: 'Тип улицы'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название улицы'
		},
		addresses: {
			type: new GraphQLList(AddressType),
			description: 'Список адресов'
		},
		locality: {
			type: LocalityType,
			description: 'Населенный пункт'
		}
	})
});

module.exports = StreetType;
