//task01

// 1. Таблицу с `id="age-table"`.

let ageTable = document.getElementById('age-table');
// 2. Все элементы `label` внутри этой таблицы (их три).
let labels = document.getElementsByTagName('label')

// 3. Первый `td` в этой таблице (со словом «Age»).

let tdAge = document.getElementsByTagName('td')[0];
// 4. Форму `form` с именем `name="search"`.
let form = document.getElementsByName('search');
document.querySelector('form[name="search"]');
// 5. Первый `input` в этой форме.
form.getElementsByTagName('input')[0];
// 6. Последний `input` в этой форме.

let inputs = document.querySelector('input');
inputs[inputs.length-1];


// task02 - answer - BODY element