/**
 * Определение типа класса электронных документов
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');
// const KindDocType = require('./kind');

const ClassDocType = new GraphQLObjectType({
	name: 'ClassDoc',
	description: 'Класс электронного документа',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название класса документа'
		},

		/*
		* TODO: Разобраться почему ошибка при выполнении
		kind_docs: {
			type: new GraphQLList(KindDocType),
			description: 'Список видов документов данного класса'
		}
		*/
	}
});

module.exports = ClassDocType;
