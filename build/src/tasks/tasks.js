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
