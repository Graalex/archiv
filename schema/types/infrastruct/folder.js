/**
 * Описание типа папка.
 */

const { GraphQLID, GraphQLString, GraphQLNonNull, GraphQLObjectType, GraphQLList } = require('graphql');
const ImageType = require('./image');

const FolderType = new GraphQLObjectType({
	name: 'Folder',
	description: 'Папка',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название папки'
		},
		images: {
			type: new GraphQLList(ImageType),
			description: 'Список изображений в папке'
		}
	}
});

module.exports = FolderType;
