/**
 * Описание типа проекта для частных домов и квартир.
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require('graphql');
const { ProjectType } = require('./infrastruct');
const { AddressType } = require('./address');

const PrivatHouseType = new GraphQLObjectType({
	name: 'PrivatHouse',
	description: 'Проекты частных домов и квартир',
	interfaces: [ProjectType],
	fields: {
		address: {
			type: new GraphQLNonNull(AddressType),
			description: 'Адрес дома или квартиры'
		},
		ls: {
			type: GraphQLString,
			description: 'Лицевой счет абонента'
		}
	}
});

module.exports = PrivatHouseType;
