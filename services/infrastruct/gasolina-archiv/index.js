/**
 * Микросервис gasolina-archiv
 * Выполняемые функции:
 * 1. Получение списка абонентов из базы данных Gasolina(Firebird) и загрузка их в базу данных Globus (MS SQL)
 *
 * ВАЖНО: Микросервис разрабатывается как временная мера до полного завершения проекта "Архив".
 */

const logger =require('tracer')
	.dailyfile({
		root:'./services/infrastruct/gasolina-archiv/logs',
		maxLogFiles: 30
	});
const scheduler = require('node-schedule');
const {getAbonents, upgradeAbonets } = require('./db');
const { jobSchedule } = require('./config.db');

logger.info('Start micro service "gasolina-archiv".');

scheduler.scheduleJob(jobSchedule, () => {
	logger.info('Start job "gasolina-archiv"');
	logger.info('Start import data from Gasolina.');

	getAbonents().then(data => {
			logger.info('End import data from Gasolina.');
			logger.info('Start export data to Globus.');

			return upgradeAbonets(data);
	})
		.then(() => logger.info('End export data to Globus.'))
		.catch(err => logger.error('Error import/export data in job "gasolina-archiv".', err));
});
