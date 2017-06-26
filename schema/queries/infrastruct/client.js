/**
 * Определение провайдера запроса к микросервису Common Archiv Document.
 */

const cote = require('cote');

const commonRequester = new cote.Requester({
	name: 'Common Archiv Document Requester',
	namespace: 'archiv',
	requests: [
		'classes',
		'kinds'
	]
});

module.exports = {
	commonRequester
};
