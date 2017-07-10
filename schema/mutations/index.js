/**
 * Определение корневых мутаций.
 */

const { GraphQLObjectType } = require('graphql');
const {
	CreateCalssMutate
} = require('./infrasctruct');


const RootMutationType = new GraphQLObjectType({
	name: 'RootMutation'
});
