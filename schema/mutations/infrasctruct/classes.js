/**
 * Определение мутаций для классов документов
 */

const { GraphQLString } = require('graphql');
const { ClassDocType } = require('../../types/infrastruct/index');

const CreateClassMutate = {
	type: ClassDocType,
	name: 'CreateClass',
	description: 'Создает новый класс документов',
	args: {
		name: {
			name: 'name',
			type: GraphQLString,
			description: 'Название нового класса документов'
		}
	}
};

module.exports = {
	CreateClassMutate
};
