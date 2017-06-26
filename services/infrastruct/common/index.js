/**
 * Микросервис common-service.
 * Функции:
 * 	1. GRUD операции с классами документов.
 * 	2. GRUD операции с видами документов.
 */

const cote = require('cote');
const { ClassDoc, KindDoc } = require('./models');

const commonResponder = new cote.Responder({
	name: 'Common Archiv Document Service',
	namespace: 'archiv',
	RespondTo: [
		'classes',
		'kinds'
	]
});

commonResponder.on('classes', () => ClassDoc.findAll().then(data => data));

commonResponder.on('kinds', req => KindDoc.find(req.key).then(data => data));
