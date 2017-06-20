/**
 *  Описание типов.
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = require('graphql');
const ClassDocType = require('./class');

const KindDocType = new GraphQLObjectType({
	name: 'KindDoc',
	description: 'Вид исполнительной документации',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название вида'
		},
		class_doc: {
			type: ClassDocType,
			description: 'Класс документа'
		}
	}
});

module.exports = KindDocType;
