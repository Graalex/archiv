/**
 * Определяет запрос на получение списка классов документа.
 */

const { GraphQLList } = require('graphql');
const { ClassDocType } = require('../../types/infrastruct');

module.exports = {
	type: new GraphQLList(ClassDocType),
	description: 'Возвращает список классов исполнительной документации',
	resolve: () => [{key: 1, name: 'Список классов'}]
};
