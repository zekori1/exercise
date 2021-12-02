/*
  - проверил наличие класса content
  - Проверить, что высота равна 100vh
*/

// здесь напишите ваш код

const errors = [];

const contentClassesArr = document.getElementsByClassName("content");

if (!contentClassesArr || !contentClassesArr?.length) {
  errors.push("класса content в файле нет");
}

const vhToPixels = (vh) => Math.round(window?.innerHeight / (100 / vh));

if (
  vhToPixels(100) !==
  document?.getElementsByClassName("content")[0]?.clientHeight
) {
  errors.push("высота не равна 100vh");
}

console.log(errors);
