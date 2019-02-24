let money, time, appData = {};	


function start () {
	money = +prompt ('Ваш бюджет на месяц','');
	time = prompt ('Введите дату в формате YYYY-MM-DD','');

	while (isNaN(money) || money == "" || money == null){
		money = +prompt ('Ваш бюджет на месяц','');
	}
}

function detectDayBudget() {
	appData.cache = money;
	appData.timeData = time;
	appData.expenses = {};
	//appData.expenses[prompt('Введите обязательную статью расходов в этом месяце','')] = prompt ('Во сколько обойдется?','');
	appData.optionalExpenses = {};
	appData.income = [];
	appData.savings = true;
	appData.moneyPerDay = Math.round(appData.cache/30);
}

function chooseExpenses() {
		for ( let i = 0; i < 2; i++ ) {
		let a = prompt('Введите обязательную статью расходов в этом месяце','');
			b = prompt ('Во сколько обойдется?','');

		if (( (typeof(a)) === 'string' && typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&  a.length < 50 ){
			console.log('done');
			appData.expenses[a] = +b;
		}
		else i--;
	}
}

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений", ""),
			procent = +prompt("Под какой процент?","");

		appData.monthIncome = save/100/12*procent;
		alert ("Доход с вашего депозита:" + appData.monthIncome);
	}
}

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++){
		appData.optionalExpenses[i] = prompt ("Статья необязательных расходов?");
		if (appData.optionalExpenses[i] == "" || appData.optionalExpenses[i] == null)
			i--;
	}
}

/*let i = 0;
while (i < 2){
	let a = prompt('Введите обязательную статью расходов в этом месяце','');
		b = prompt ('Во сколько обойдется?','');

	if (( typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&  a.length < 50 ){
		console.log('done');
		appData.expenses[a] = +b;
		i++;
	}	
}*/

/*do {
	let a = prompt('Введите обязательную статью расходов в этом месяце','');
		b = prompt ('Во сколько обойдется?','');

	if (( typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&  a.length < 50 ){
		console.log('done');
		appData.expenses[a] = +b;
		i++;
	}
} while (i < 2); */

function detectLevel() {
	if (appData.moneyPerDay < 100)
		console.log('Минимальный уровень достатка');
	else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
		console.log('Средний уровень достатка');
	else if (appData.moneyPerDay > 2000)
		console.log('Высокий уровень достатка');
	else console.log('Произошла ошибка!');
}

start();
detectDayBudget();
chooseExpenses();
checkSavings();
detectLevel();
chooseOptExpenses();