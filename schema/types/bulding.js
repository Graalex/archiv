/**
 * Описание типа проекта многоквартирного дома.
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');
const { ProjectType } = require('./infrastruct');
const { AddressType } = require('./address');
const PrivateHouseType = require('./private-house');

const BuildingType = new GraphQLObjectType({
	name: 'Building',
	description: 'Проект многоквартирного дома',
	interfaces: [ProjectType],
	fields: {
		address: {
			type: new GraphQLNonNull(AddressType),
			description: 'Адрес многоквартирного дома'
		},
		projects: {
			type: new GraphQLList(PrivateHouseType),
			description: 'Список проектов квартир для этого дома'
		}
	}
});

module.exports = BuildingType;
