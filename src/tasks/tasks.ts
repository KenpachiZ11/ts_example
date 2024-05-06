// https://the-evening-code.com/posts/ten-javascript-exercises-with-arrays

// * Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
// * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']

type Value = (number | string);

const fill = (arraySize: Value, value: Value): Array<Value> => {
    // console.log(arraySize, value);
    return new Array(arraySize).fill(value);
}

console.log(fill(5, 'a'), '- Задача 1');

// * Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
// * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]

// const reverse = (array: [number, number, number, number]): Array<number> => {
const reverse = (array: number[]): Array<number> => {
    return array.reverse();
}

console.log(reverse([3, 2, 1]), '- Задача 2');


// * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
type ValueCompact = (number | string | undefined | null | boolean);
const compactArray: ValueCompact[] = [0, 1, false, 2, undefined, '', 3, null];
let compactNewArray: number[] = [];

const compact = (array: ValueCompact[]): Array<number> => {

    array.map(el => {
        if(el === Number(el) && Number(el !== 0)) {
            compactNewArray.push(el);
        }
    })

    return compactNewArray;

}

console.log(compact(compactArray), '- Задача 3');