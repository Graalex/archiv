/**
 * DistrictType - представляет областной район
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const LocalityType = require('./locality');
const RegionType = require('./region');

const DistrictType = new GraphQLObjectType({
	name: 'District',
	description: 'Административная единица - областной район',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название района'
		},
		localities: {
			type: new GraphQLList(LocalityType),
			description: 'Список населенных пунктов подчиненных району'
		},
		region: {
			type: RegionType,
			description: 'Область'
		}
	})
});

module.exports = DistrictType;
