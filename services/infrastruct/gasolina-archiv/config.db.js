/**
 * Опции подключения к базам Gasolina и Globus
 */

/**
 * Gasolina (Firebird 2.5)
 */
const gasolina = {
	host: '192.168.0.211',
	port: 3050,
	database: 'E:/DATA/MARIUPOL.FDB',
	user: 'SYSDBA',
	password: 'masterkey'
};

/**
 * Globus (MS SQL Server 2014)
 */
const globus = {
	user: 'ARCHIV_APP',
	password: 'ARCHIV_APP',
	server: '192.168.0.168',
	database: 'Globus',
	connectionTimeout: 40000,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	}
};

// строка планирования задания (каждый день в 22:00)
const jobSchedule = '0 22 * * *';

module.exports = {
	gasolina,
	globus,
	jobSchedule
};
