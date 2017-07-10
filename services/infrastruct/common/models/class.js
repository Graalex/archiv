/**
 * Модель данных класс документов
 * @type {{ClassDoc: ClassDoc}}
 */

const config = require('./db.config');
const sql = require('mssql');

const ClassDoc = class {
	/**
	 * Получить список всех класов документов
	 * @returns {Promise.<Array<Object>>}
	 */
	static findAll() {
		// иницилизация соединения с базой данных и вызов хранимой процедуры
		return sql.connect(config)
			.then(pool => {
				return pool.request()
					.execute('DocClassGetAll');
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
			});
	};

	/**
	 * Записывает в базу данных новый класс документа и
	 * возвращает обновленны список
	 * @param name {String}
	 * @returns {Promise.<Array<Object>>}
	 */
	static create(name) {
		return new sql.connect(config)
			// Добавляем новую запись
			.then(pool => {
				return pool.request()
					.input('Name', sql.NVarChar, name)
					.input('UsrName', sql.NVarChar, config.user)
					.output('Key', sql.Int)
					.execute('DocClassAdd')
			})
			// запрос на обновленный список
			.then(() => {
				return new sql.Request()
					.execute('DocClassGetAll')
			})
			// обрабатываем ответ
			.then(result => {
				let data = [];

				if (result.recordsets[0]) {
					data = result.recordsets[0].map(item => {
						return {
							key: item.KEY,
							name: item.NAME
						};
					});
				}

				sql.close();
				return data;
			})
			.catch(err => {
				sql.close();
				return err;
			})
	}
};

module.exports = ClassDoc;
