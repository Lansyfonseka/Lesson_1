let money = prompt ('Ваш бюджет на месяц?',''),
	time = prompt ('Введите дату в формате YYYY-MM-DD',''),
	appData = {};

appData.cache = money;
appData.timeData = time;
appData.expenses = {};
//appData.expenses[prompt('Введите обязательную статью расходов в этом месяце','')] = prompt ('Во сколько обойдется?','');
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
appData.moneyPerDay = Math.round(appData.cache/30);

for ( let i = 0; i < 2: i++ ) {
	let a = prompt('Введите обязательную статью расходов в этом месяце','');
		b = prompt ('Во сколько обойдется?','');

	if (a != '' && b != '' && a.length < 50){
		console.log('done');
		appData.expenses[a] = +b;
	}
	else 

}





//console.log (''); //Вывести информацию
//console.count(); //Ввести информацию