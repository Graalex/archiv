/**
 * Экспорт и импорт данных абонентов.
 */

const fb = require('node-firebird');
const cp = require('windows-1251');
const { gasolina, globus } = require('./config.db');
const mssql = require('mssql');

/**
 * Импорт данных абонентов из базы Gasolina.
 * @returns {Promise}
 */
const getAbonents = () => {
	return new Promise((resolve, reject) => {
		// текст запроса
		const query = `
			select a.peracc as LS, a.name as FAMILY, a.firstname as NAME,
				a.patronymic as PATRONYMIC, rd.name as DISTRICT, inh.name as CITYKIND,
				c.name as CITY, m.name as AREA, st.name as STRTKIND, s.name as STREET, a.buildnum as HOME,
				a.buildlitter as LITERA, a.apartmentnum as APART, a.apartmentlitter as APTLIT
			from abon a
			left join street s on s.streetkey = a.streetr
			left join microrajon m on m.microrajonkey = a.microrajonsr
			left join streettype st on st.streettypekey = s.streettyper
			left join city c on c.citykey = s.cityr
			left join inhabitedlocalitytype inh on inh.inhabitedlocalitytypekey = c.inhabitedlocalitytyper
			left join regdivision rd on rd.regdivisionkey = c.regdivisionr
			where a.isclosed = 0
		`;

		// соединение с базой данных
		fb.attach(gasolina, (err, db) => {
			if (err) {
				console.log('ERR:');
				console.dir(err);
				reject(err);
				return;
			}

			// выполняем запрос
			db.query(query, (err, result) => {
				if (err) {
					reject(err);
					return;
				}

				// если результат не пустой массив
				let data = [];
				if (result && result.length > 0) {
					data = result.map(item => {
						// создаеем новый массив данных попутно преобразуя строки из кодировк windows-1251 в utf-8
						return {
							ls: cp.decode(item.LS.toString('binary')).trim(),
							family: cp.decode(item.FAMILY.toString('binary')).trim(),
							name: item.NAME !== null ? cp.decode(item.NAME.toString('binary')).trim() : null,
							patronymic: item.PATRONYMIC !== null ? cp.decode(item.PATRONYMIC.toString('binary')).trim() : null,
							district: item.DISTRICT !== null ? cp.decode(item.DISTRICT.toString('binary')).trim() : null,
							city_kind: item.CITYKIND !== null ? cp.decode(item.CITYKIND.toString('binary')).trim() : null,
							city: item.CITY !== null ? cp.decode(item.CITY.toString('binary')).trim() : null,
							area: item.AREA !== null ? cp.decode(item.AREA.toString('binary')).trim() : null,
							str_kind: item.STRTKIND !== null ? cp.decode(item.STRTKIND.toString('binary')).trim() : null,
							street: item.STREET !== null ? cp.decode(item.STREET.toString('binary')).trim() : null,
							home: item.HOME,
							litera: item.LITERA !== null ? cp.decode(item.LITERA.toString('binary')).trim() : null,
							apartment: item.APART,
							apart_lit: item.APTLIT !== null ? cp.decode(item.APTLIT.toString('binary')).trim() : null
						};
					});
				}

				db.detach();
				resolve(data);
			});
		});
	});
};

/**
 * Экспорт данных абонентов в базу данных Globus.
 * @param abons	{Object}	список данных об абонентах
 * @returns {Promise}
 */
const upgradeAbonets = abons => {
	// создаем структуру временной таблицы
	const table = new mssql.Table('GSL_ABONETS');
	table.create = true;
	table.columns.add('ls', mssql.NVarChar(10), {nullable: true});
	table.columns.add('family', mssql.NVarChar(50), {nullable: true});
	table.columns.add('name', mssql.NVarChar(50), {nullable: true});
	table.columns.add('patronymic', mssql.NVarChar(50), {nullable: true});
	table.columns.add('distict', mssql.NVarChar(150), {nullable: true});
	table.columns.add('city_kind', mssql.NVarChar(50), {nullable: true});
	table.columns.add('city', mssql.NVarChar(250), {nullable: true});
	table.columns.add('area', mssql.NVarChar(150), {nullable: true});
	table.columns.add('str_kind', mssql.NVarChar(50), {nullable: true});
	table.columns.add('street', mssql.NVarChar(250), {nullable: true});
	table.columns.add('home', mssql.Int(), {nullable: true});
	table.columns.add('litera', mssql.NVarChar(50), {nullable: true});
	table.columns.add('apartment', mssql.Int(), {nullable: true});
	table.columns.add('apt_lit', mssql.NVarChar(50), {nullable: true});

	return new Promise((resolve, reject) => {
		mssql.connect(globus).then(() => {
			// очищаем таблицу от предыдущих данных
			return new mssql.Request().query('truncate table GSL_ABONETS');
		}).then(() => {

			// заполняем временную таблицк данными
			abons.forEach(item => {
					table.rows.add(
						item.ls,
						item.family,
						item.name,
						item.patronymic,
						item.district,
						item.city_kind,
						item.city,
						item.area,
						item.str_kind,
						item.street,
						item.home,
						item.litera,
						item.apartment,
						item.apart_lit
					);
			});

			// экспортируем в таблицу базы данных
			return new mssql.Request().bulk(table);
		}).then(() => {
			resolve();
		}).catch(err => {
			reject(err);
		});

		mssql.on('error', err => {
			reject(err);
		});
	});
};

module.exports = {
	getAbonents,
	upgradeAbonets
};
