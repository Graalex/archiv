/**
 * LocalityType - представляет населенный пункт
 */

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull, GraphQLList } = require('graphql');
const AreaType = require('./area');
const StreetType = require('./street');
const DistrictType = require('./district');
const RegionType = require('./region');

const LocalityType = new GraphQLObjectType({
	name: 'Locality',
	description: 'Административная единица - населенный пункт',
	fields: () => ({
		key: {
			type: new GraphQLNonNull(GraphQLID),
			description: 'Уникальный идентификатор'
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Название населенного пункта'
		},
		areas: {
			type: new GraphQLList(AreaType),
			description: 'Список городских районов'
		},
		streets: {
			type: new GraphQLList(StreetType),
			description: 'Список улиц населенного пункта'
		},
		district: {
			type: DistrictType,
			description: 'Район областного подчинения'
		},
		region: {
			type: RegionType,
			description: 'Область'
		}
	})
});

module.exports = LocalityType;
