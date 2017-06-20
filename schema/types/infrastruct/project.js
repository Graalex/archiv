/**
 * Описание интерфейса документа проект.
 */

const { GraphQLInterfaceType, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const KindDocType = require('./kind');
const SideType = require('./side');
const FolderType = require('./folder');
const ImageType = require('./image');

const ProjectType = new GraphQLInterfaceType({
	name: 'Project',
	description: 'Интерфейс документа проект',
	fields: {
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		kind_doc: {
			type: KindDocType,
			description: 'Вид документа'
		},
		number: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Архивный номер'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название проекта'
		},
		code: {
			type: GraphQLString,
			description: 'Штрих код проекта'
		},
		rank: {
			type: GraphQLInt,
			description: 'Номер стелажа'
		},
		board: {
			type: GraphQLInt,
			description: 'Номер полки стелажа'
		},
		side: {
			type: SideType,
			description: 'Сторона стелажа'
		},
		folders: {
			type: new GraphQLList(FolderType),
			description: 'Список папок связанных с проектом'
		},
		images: {
			type: new GraphQLList(ImageType),
			description: 'Список изображений не привязанных к папке'
		}
	}
});

module.exports = ProjectType;
