/**
 * Определяет запрос на получение списка классов документа.
 */

const { GraphQLList } = require('graphql');
const { ClassDocType } = require('../../types/infrastruct');
const { commonRequester } = require('./client');


module.exports = {
	type: new GraphQLList(ClassDocType),
	description: 'Возвращает список классов исполнительной документации',
	resolve: () => commonRequester.send({type: 'classes'}).then(data => data)
};
