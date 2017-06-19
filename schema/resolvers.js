/**
 * Резолверы для запросов
 */

module.exports = async function kindResolver() {
	return [
		{
			key: 1,
			name: 'Частные домостроения'
		},
		{
			key: 2,
			name: 'Квартиры'
		},
		{
			key: 3,
			name: 'Многоквартирные дома'
		},
		{
			key: 4,
			name: 'Предприятия и котельные'
		},
		{
			key: 5,
			name: 'Уличные газопроводы'
		}
	];
};
