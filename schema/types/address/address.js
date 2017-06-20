/**
 * AddressType - представляет адрес
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLInt } = require('graphql');
const LocalityType = require('./locality');
const AreaType = require('./area');

const AddressType = new GraphQLObjectType({
	name: 'Address',
	description: 'Административная единица - адрес',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		zip: {
			type: GraphQLString,
			description: 'Почтовый индекс'
		},
		locality: {
			type: LocalityType,
			description: 'Населенный пункт'
		},
		area: {
			type: AreaType,
			description: 'Городской район'
		},
		home: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Номер дома'
		},
		apartment: {
			type: GraphQLInt,
			description: 'Квартира'
		}
	})
});

module.exports = AddressType;
