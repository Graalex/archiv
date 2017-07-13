/**
 * Опции подключения к базам Gasolina и Globus
 */

/**
 * Gasolina (Firebird 2.5)
 */
const gasolina = {
	host: '192.168.0.211',
	port: 3050,
	database: 'D:/DATA/MARIUPOL.FDB',
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
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000
	}
};

module.exports = {
	gasolina,
	globus
};
