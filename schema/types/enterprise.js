/**
 * Описание типа проекта котельных и организаций.
 */

const { GraphQLObjectType, GraphQLString } = require('graphql');
const { ProjectType } = require('./infrastruct');
const { AddressType } = require('./address');

const EnterpiseType = new GraphQLObjectType({
	name: 'Enterprise',
	description: 'Проекты предприятий и котелен',
	interfaces: [ProjectType],
	fields: {
		address: {
			type: AddressType,
			description: 'Адрес объекта'
		},
		owner: {
			type: GraphQLString,
			description: 'Название предприятия'
		}
	}
});

module.exports = EnterpiseType;
