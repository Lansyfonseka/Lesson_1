let money = prompt ('Ваш бюджет на месяц?',''),
	time = prompt ('Введите дату в формате YYYY-MM-DD',''),
	appData = {},
	mass = {};


appData.cache = parseInt(money);
appData.timeData = time;
appData.expenses = {};
appData.expenses[prompt('Введите обязательную статью расходов в этом месяце','')] = prompt ('Во сколько обойдется?','');
console.log(appData.expenses);
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

alert ('Бюджет на один день - '+Math.round(appData.cache/30));



//console.log (''); //Вывести информацию
//console.count(); //Ввести информацию