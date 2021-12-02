/*
    Выполните npm init
    Это даcт вам доступ к двум библиотекам:
    esprima – http://esprima.org
    esquery – https://github.com/estools/esquery
    Затем вам нужно получить доступ к файлу app.js с помощью fs и path и проверить его на соответствие заданию
*/

const esprima = require("esprima");
const esquery = require("esquery");
const fs = require("fs");

/*
  В этом комментарии напишите список, что бы вы проверили в коде студента:
  - проверить то, что в файле с сервером имплеметирована логика вывода строки "Привет, мир!" в консоль
  - проверить, что сервер работает на 3000 порту
  - проверить, что он возвращает HTML
*/

const errors = [];

// здесь напишите ваш код проверок

const fileContent = fs.readFileSync(
  "C:\\Users\\Иван Кочетков\\Desktop\\test-js-dom\\3\\post\\app.js", 
  "utf8"
);
const parsedJS = esprima.tokenize(fileContent);
console.log(parsedJS);

// 1 - проверка на вывод 'Привет, мир!' в консоль

const stringEntities = parsedJS.filter((item) => {
  return item.type.toLowerCase() === "string";
});

const stringValues = stringEntities.map((item) => item.value);
console.log(stringValues);

if (!stringValues.includes("'Привет, мир!'")) {
  errors.push('сервер не выводит строку "Привет, мир!"');
}

//  2 - проверить, что сервер работает на 3000 порту

const numericEntities = parsedJS.filter((item) => {
  return item.type.toLowerCase() === "numeric";
});

if (numericEntities[0].value !== "3000") {
  errors.push("сервер работает не на 3000 порту");
}

//  3 - проверить, что сервер возвращает HTML

const templateEntities = parsedJS.find((item) => {
  return item.type.toLowerCase() === "template";
});

if (!templateEntities) {
  errors.push("сервер не возвращает html");
}

console.log(errors);
