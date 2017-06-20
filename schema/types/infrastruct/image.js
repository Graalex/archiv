/**
 * Описание типа изображение.
 */

const { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLInt } = require('graphql');

const ImageType = new GraphQLObjectType({
	name: 'Image',
	description: 'Отсканированное изображение',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Имя файла изображения'
		},
		size: {
			type: GraphQLInt,
			description: 'Размер файла изображения в байтах'
		},
		create_at: {
			type: GraphQLString,
			description: 'Время создания файла'
		},
		modify_at: {
			type: GraphQLString,
			description: 'Время модификации файла'
		},
		url: {
			type: GraphQLString,
			description: 'Путь для загрузки файла'
		}
	}
});

module.exports = ImageType;
