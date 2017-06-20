/**
 * Описание GraphQL типов
 */

const BuildingType = require('./bulding');
const EnterpriseType = require('./enterprise');
const PipeType = require('./pipe');
const PrivatHouseType = require('./private-house');
const infsruct = require('./infrastruct');
const addr = require('./address');

module.exports = {
	addr,
	infsruct,
	BuildingType,
	EnterpriseType,
	PipeType,
	PrivatHouseType
}
