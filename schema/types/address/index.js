/**
 * Определение GraphQL типов для почтовых адресов
 */

const RegionType = require('./region');
const DistrictType = require('./district');
const LocalityType = require('./locality');
const AreaType = require('./area');
const StreetType = require('./street');
const AddressType = require('./address');
const LocalityKindType = require('./locality-kind');
const StreetKindType = require('./street-kind');

module.exports = {
	RegionType,
	DistrictType,
	LocalityType,
	AreaType,
	StreetType,
	AddressType,
	LocalityKindType,
	StreetKindType
};
