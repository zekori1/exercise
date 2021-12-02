/*
  - проверить у функции типа входящего параметра. Строка или число
  - Отправить функцию на вход тип Boolean, например значение true и посмотреть на что должна вернуть в ошибка type_error
  - Если на входе число - посмотреть уходит ли оно в тот диапазон
  - Если строка, надо посмотреть есть ли соответствие с числом на той картинке, если нет, то должна возвращена ошибка: unknown_symbol
*/

// здесь напишите ваш код
import roman from "../post/src/index";

describe("task 2 test suite", () => {
  let errors = [];
  const TYPE_ERROR = "Unsupported input value type";
  const RANGE_ERROR = "Input value must be [1; 3999]";
  const UNKNOWN_SYMBOLS = "Unknown input symbols";
  const REG_DIGITS = /^-?\d+$/;
  const REG_ROMANS = /^[IVXLCDM]+$/i;
  const REG_AVAILABLE_ROMANS =
    /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i;
  const REG_COMBINATIONS_ROMANS = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;

  beforeAll(() => {
    errors = [];
  });

  test("check right type of error if input number is out of given range", () => {
    try {
      roman(9999);
    } catch (error) {
      if (error.message !== RANGE_ERROR) {
        errors.push(
          "функция не возвращает правильный тип ошибки о том, что входное число не принадлежит диапазону"
        );
        console.log(errors);
      }
      // expect(error.message).toBe(RANGE_ERROR);
    }
  });

  test("check right type of error if input number is other type than string or number", () => {
    try {
      roman(true);
    } catch (error) {
      if (error.message !== TYPE_ERROR) {
        errors.push(
          "функция не возвращает правильный тип ошибки о том, что входное число не является строкой или числом"
        );
        console.log(errors);
      }
      // expect(error.message).toBe(TYPE_ERROR);
    }
  });

  test("check right type of error if input number is unknown symbol (doesn't belong to roman or digits symbols)", () => {
    try {
      roman("w");
    } catch (error) {
      if (error.message !== UNKNOWN_SYMBOLS) {
        errors.push(
          "функция не возвращает правильный тип ошибки о том, что входное число не принадлежит римскому алфавиту или цифрам"
        );
        console.log(errors);
      }
      // expect(error.message).toBe(UNKNOWN_SYMBOLS);
    }

    // выводим пустой массив, если ошибок не было
    !errors.length && console.log(errors);
  });
});
