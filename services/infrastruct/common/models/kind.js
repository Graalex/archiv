/**
 * Модель данных вид документа
 * @type {{KindDoc: KindDoc}}
 */

const config = require('./db.config');
const sql = require('mssql');

const KindDoc = class {
	/**
	 * Возвращает список видов документа по ключу класса
	 * @param keyClass	{Number}
	 * @returns {Promise.<Array<Object>>}
	 */
	static find(keyClass) {
		// иницилизация соединения с базой данных и вызов хранимой процедуры
		return sql.connect(config)
			.then(pool => {
				return pool.request()
					.input('Class', sql.Int, keyClass)
					.execute('DocKindsGetForClass');
			})
			.then(result => {
				let data = [];

				// проверяем получили мы хоть что-нибудь
				if (result.recordsets[0]) {
					data = result.recordsets[0].map(item => {
						return {
							key: item.KEY,
							name: item.NAME
						};
					});
				}

				// закрываем соединение и возвращаем результат
				sql.close();
				return data;
			})
			.catch(err => {
				sql.close();
				return err;
			});
	};
};

module.exports = KindDoc;
