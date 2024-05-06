"use strict";
// https://the-evening-code.com/posts/ten-javascript-exercises-with-arrays
const fill = (arraySize, value) => {
    // console.log(arraySize, value);
    return new Array(arraySize).fill(value);
};
console.log(fill(5, 'a'), '- Задача 1');
// * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
// * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
// const reverse = (array: [number, number, number, number]): Array<number> => {
const reverse = (array) => {
    return array.reverse();
};
console.log(reverse([3, 2, 1]), '- Задача 2');
const compactArray = [0, 1, false, 2, undefined, '', 3, null];
let compactNewArray = [];
const compact = (array) => {
    array.map(el => {
        if (el === Number(el) && Number(el !== 0)) {
            compactNewArray.push(el);
        }
    });
    return compactNewArray;
};
console.log(compact(compactArray), '- Задача 3');
<<<<<<< HEAD
=======
// * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
// * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
const uniqueArray = [1, 2, 3, 1, 2];
const unique = (array) => {
    return Array.from(new Set(array));
};
console.log(unique(uniqueArray), '- Задача 4');
// * Описание задачи: Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 3, 4];
const array4 = [1, 2, 3, 5, 10];
const isEqual = (firstArray, secondArray) => {
    if (firstArray.length !== secondArray.length)
        return false;
    if (firstArray.length === secondArray.length) {
        const check = firstArray.map((el, id) => secondArray[id] === el);
        return !check.includes(false);
    }
};
console.log(isEqual(array1, array2), '- Задача 5');
console.log(isEqual(array2, array3), '- Задача 5');
console.log(isEqual(array3, array4), '- Задача 5');
console.log(isEqual(array4, array1), '- Задача 5');
>>>>>>> test
