/**
 * Описание типа проекта уличных газопроводов.
 */

const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');
const { DistrictType, LocalityType, AreaType } = require('./address');
const { ProjectType, ServiceType, PressureType } = require('./infrastruct');

const PipeType = new GraphQLObjectType({
	name: 'Pipe',
	description: 'Проект уличного газопровода',
	interfaces: [ProjectType],
	fields: {
		serv_numb: {
			type: GraphQLString,
			description: 'Сервисный номер'
		},
		service: {
			type: ServiceType,
			description: 'Эксплуатационный участок'
		},
		pressure: {
			type: new GraphQLNonNull(PressureType),
			description: 'Тип рабочего давления'
		},
		year: {
			type: GraphQLInt,
			description: 'Год запуска в эксплуатация'
		},
		district: {
			type: DistrictType,
			description: 'Областной район'
		},
		locality: {
			type: LocalityType,
			description: 'Населенный пункт'
		},
		area: {
			type: AreaType,
			description: 'Район населенного пункта'
		}
	}
});

module.exports = PipeType;
