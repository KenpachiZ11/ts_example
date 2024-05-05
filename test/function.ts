const fn1 = (num: number):number => {
    return Number(num);
}

const fn2 = (num: number):string => {
    return String(num);
}

// console.log(fn1(12));
// console.log(fn2(12));

type Callback = (num: number) => string;

function fn3(cb?: Callback) {
    if(cb === undefined) {
        cb = String;
    }
    cb(12);
};

function sum1(num1: number, num2: number):number {
    return num1 + num2
}


type Num = number;
function sum2(num1: Num, num2: Num):number {
    return num1 + num2
}

// console.log(sum1(12, 10))
// console.log(sum2(12, 10))

function point(x: number = 0, y: number = 0): [number, number] {
    return [x, y];
}

// console.log(point(10)) // [ 10, 0 ]

function manyParams(...nums: number[]): string {
    return nums.join('-');
}

// console.log(manyParams(1, 3, 1, 2312, 324)); // 1-3-1-2312-324

interface IObj {
    label: string;
}
function printObj(obj: IObj): void {
    console.log(obj.label)
}

const drink = {
    label: 'pepsi',
    price: 90
}
const phone = {
    label: 'Apple',
    price: 900
}

printObj(drink)
printObj(phone)