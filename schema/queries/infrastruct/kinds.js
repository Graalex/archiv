/**
 * Определение запроса на получение списка видов документа.
 */

const { GraphQLInt, GraphQLNonNull, GraphQLList } = require('graphql');
const { KindDocType } = require('../../types/infrastruct/index');
const { commonRequester } = require('./client');

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
	resolve: (obj, args) => commonRequester.send({type: 'kinds', key: args.key}).then(data => data)
};
