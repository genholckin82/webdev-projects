'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

//Вешаем соб. prompt клик на кнопку "начать расчет"
startBtn.addEventListener('click', function() {
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "");
    

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", ""); 
    } //проверка, чтобы вводились только числа
    appData.budget = money; //запис. в массив даных пользов.
    appData. timeData = time; //запись в массив даты
    budgetValue.textContent = money.toFixed();//вывод на стран. данн. бюджета пользователя
    yearValue.value = new Date(Date.parse(time)).getFullYear(); //вывод на страницу даты от пользователя
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false; // делаем активными кнопки при старте
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;


});
expensesBtn.addEventListener('click', function() { // снач. запуск ф-ция. при клике
    let sum = 0; // созд. перемен. суммы собир. ценники польз.
    
    
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
            sum += +b; // += чтобы каждый раз прибав. сумма b; +b чтобы b было числов знач. т.к  данные польз. строка
        } else {
            console.log ("bad result");
            i--;
        }
    
    }
    expensesValue.textContent = sum; //вывод сумму на страницу
});
optionalExpensesBtn.addEventListener('click',function() {
    
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;// выводим данные со страниц. и  помещаем в объект appData
        appData.optionalExpenses[i] = questionOptExpenses;// выводим данные со страниц. и  помещаем в объект appData
        console.log(appData.optionalExpenses);
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; //пробел. ' ' для читаем. текста
   }

});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) { // проверка что знач польз не != undefined 
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();//бюджет на 1 день с учитом суммы обязательных трат и округл. до ближ. целого значен.
    dayBudgetValue.textContent = appData.moneyPerDay;
    
    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Это средний уровень достатка!";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Это высокий уровень достатка!";
    } else {
        levelValue.textContent = "Ошибочка...!";
    } 
} else {
    dayBudgetValue.textContent = "Произошла ошибка!";

}
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(", "); //split превращ. строку в массив
    incomeValue.textContent = appData.income;


});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
           percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;  
        appData.yearIncome = sum/100*percent;  

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1); // округл. после запят. до одной цифры
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 
    }
});

    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;
 
         appData.monthIncome = sum/100/12*percent;  
         appData.yearIncome = sum/100*percent;  
 
         monthSavingsValue.textContent = appData.monthIncome.toFixed(1); // округл. после запят. до одной цифры
         yearSavingsValue.textContent = appData.yearIncome.toFixed(1); 
     }
 });
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};