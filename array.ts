//списки
const arr: string[] = ['1', '231dfdsf'];
const arr1: Array<number> = [1, 5, 6];

const arr2: string[][] = [];
arr2.push(['a', 'c']);

console.log(arr2) // [ [ 'a', 'c' ] ]

type ManyTypes = (string | number | boolean);
const arr3: ManyTypes[] = ['234234', 324234, 134234, 'dfsdfsdfas', false, true, 1231]

console.log(arr3); // [ '234234', 324234, 134234, 'dfsdfsdfas', false, true, 1231 ]

//кортежи (tuple)
const tuple1: [string, number, boolean] = ['strer', 1234324, false]; // Строго задано по типам данных

