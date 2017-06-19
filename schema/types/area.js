/**
 * AreaType - представляет городской район
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const AddressType = require('./address');
const LocalityType = require('./locality');

const AreaType = new GraphQLObjectType({
	name: 'Area',
	description: 'Административная единица - городской район',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название района'
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

module.exports = AreaType;
