/**
 * Описание типа перечисления сторон стелажа.
 */

const { GraphQLEnumType } = require('graphql');

const SideType = new GraphQLEnumType({
	name: 'Side',
	description: 'Стороны стелажа',
	values: {
		LEFT: {
			value: 1,
			description: 'Левая сторона'
		},
		RIGHT: {
			value: 2,
			description: 'Правая сторона'
		}
	}
});

module.exports = SideType;
