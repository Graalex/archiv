/**
 * Микросервис common-service.
 * Функции:
 * 	1. GRUD операции с классами документов.
 * 	2. GRUD операции с видами документов.
 */

const cote = require('cote');
const { ClassDoc, KindDoc } = require('./models');

const commonResponder = new cote.Responder({
	name: 'Common Archive Document Service',
	namespace: 'archiv',
	RespondTo: [
		'classes',
		'create class',
		'kinds'
	]
});

const commonPublisher = new cote.Publisher({
	name: 'Common Archive Document Publisher',
	namespace: 'archiv',
	broadcast: [
		'class update'
	]
});

commonResponder.on('classes', () => ClassDoc.findAll().then(data => data));
commonResponder.on('create class', req => {
	ClassDoc.create(req.name)
		.then(data => {
			commonPublisher.publish('class update', data);
			return data;
		})
		.catch(err => err);

});

commonResponder.on('kinds', req => KindDoc.find(req.key).then(data => data));
