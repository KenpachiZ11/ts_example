"use strict";
const fn1 = (num) => {
    return Number(num);
};
const fn2 = (num) => {
    return String(num);
};
function fn3(cb) {
    if (cb === undefined) {
        cb = String;
    }
    cb(12);
}
;
function sum1(num1, num2) {
    return num1 + num2;
}
function sum2(num1, num2) {
    return num1 + num2;
}
// console.log(sum1(12, 10))
// console.log(sum2(12, 10))
function point(x = 0, y = 0) {
    return [x, y];
}
// console.log(point(10)) // [ 10, 0 ]
function manyParams(...nums) {
    return nums.join('-');
}
function printObj(obj) {
    console.log(obj.label);
}
const drink = {
    label: 'pepsi',
    price: 90
};
const phone = {
    label: 'Apple',
    price: 900
};
printObj(drink);
printObj(phone);
