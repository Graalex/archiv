/**
 * Определение общих GraphQL типов проекта
 */

const KindDocType = require('./kind');
const PressureType = require('./pressure');
const ServiceType = require('./service');
const ClassDocType = require('./class');
const SideType = require('./side');
const ProjectType = require('./project');
const FolderType = require('./folder');
const ImageType = require('./image');

module.exports = {
	KindDocType,
	PressureType,
	ServiceType,
	ClassDocType,
	SideType,
	ProjectType,
	FolderType,
	ImageType
};
