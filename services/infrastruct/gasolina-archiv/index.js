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

scheduler.scheduleJob(jobSchedule, () => {
	logger.info('Начало выполнения задания gasolina-archiv');
	logger.info('Начат импорт даных из Gasolina.');

	getAbonents()
		.then(data => {
			logger.info('Закончен импорт даных из Gasolina.');
			logger.info('Начат экспорт даных в Globus.');

			upgradeAbonets(data)
				.then(() => {
					logger.info('Закончен экспорт даных в Globus.');
				})
				.catch(err => {
					logger.error('Ошибка экспорта данных в Globus.', err);
				});
		})
		.catch(err => {
			logger.error('Ошибка импорта данных из Gasolina.', err);
		});
});
