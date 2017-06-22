/**
 * Определение запроса на получение списка видов документа.
 */

const { GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql');
const { KindDocType } = require('../../types/infrastruct/index');

module.exports = {
	type: new GraphQLList(KindDocType),
	description: 'Возвращает список видов исполнительной документации.',
	args: {
		key: {
			name: 'key',
			type: new GraphQLNonNull(GraphQLInt),
			description: 'Ключ класса документа'
		}
	},
	resolve: (obj, args) => {
		switch (args.key) {
			case 1:
				return [{key: 1, name: 'Список для класса 1'}];
				break;

			case 2:
				return [{key: 2, name: 'Список для класса 2'}];
				break;

			default:
				return [];
				break;
		}
	}
};
