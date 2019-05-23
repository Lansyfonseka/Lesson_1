
let money, time;	

function start () {
	money = +prompt ('Ваш бюджет на месяц','');
	time = prompt ('Введите дату в формате YYYY-MM-DD','');

	while (isNaN(money) || money == "" || money == null){
		money = +prompt ('Ваш бюджет на месяц','');
	}
}

let appData = {
	cache: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	moneyPerDay: Math.round(money/30),
	chooseExpenses: function () {
				for ( let i = 0; i < 2; i++ ) {
			let a = prompt('Введите обязательную статью расходов в этом месяце','');
				b = prompt ('Во сколько обойдется?','');

			if (( (typeof(a)) === 'string' && typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' &&  a.length < 50 ){
				console.log('done');
				appData.expenses[a] = +b;
			}
			else i--;
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
				let save = +prompt("Какова сумма накоплений", ""),
					procent = +prompt("Под какой процент?","");

				appData.monthIncome = save/100/12*procent;
				alert ("Доход с вашего депозита:" + appData.monthIncome);
			}
	},
	chooseOptExpenses: function () {
		for (let i = 0; i < 3; i++){
				appData.optionalExpenses[i] = prompt ("Статья необязательных расходов?");
				if (appData.optionalExpenses[i] == "" || appData.optionalExpenses[i] == null)
					i--;
			}
	},
	detectLevel: function () {
			if (appData.moneyPerDay < 100)
			console.log('Минимальный уровень достатка');
		else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000)
			console.log('Средний уровень достатка');
		else if (appData.moneyPerDay > 2000)
			console.log('Высокий уровень достатка');
		else console.log('Произошла ошибка!');
	},
	chooseIncome: function () {
		let items;
		while (items == "" || items == null)
			items = prompt ('Что принесет дополнительный доход? (Через запятую)','');
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то ещё?', ''));
		appData.income.sort();
		console.log('Способы дополнительного заработка:')
		appData.income.forEach( function(element, i) {
			console.log( (i+1) + '. ' + element);
			}
		)
		
	}
};

console.log ('Наша программа включает в себя данные:');
for (let prop in appData) {
	console.log ('Свойство ' + prop + '= ' + appData[prop]);
};


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