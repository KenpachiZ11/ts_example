const obj: {
    name: string,
    age: number
} = { name: 'Dan', age: 28 };

type ObjType = {
    name?: string;
    age: number;
}
type ValueType = (string | number | undefined | boolean);

interface ObjInterface {
    name: string;
    age: number;
}

interface ObjInterface2 {
    name: string;
    age: number;
    address?: string; // Адрес используется опционально. Он может быть, а может и нет
}
interface ObjInterface3 {
    name: string;
    age: number;
    address?: string;
    [key: string]: ValueType; // Ключ будет строкой: значение будет тем - что выбрано при перечислении
}

const person: ObjType = { name: 'Dan', age: 28 };
const person2: ObjInterface = { name: 'Dan', age: 28 };
const person3: ObjInterface2 = { name: 'Dan', age: 28, address: '' };
const person4: ObjInterface3 = { name: 'Dan', age: 28, address: '', a: 12312, c: '1212343dfwsdf', d: false, b: 123123123 };

// console.log(person, person2, person3, person4);

//Объединение интерфейсов:
//При создании интерфесов принято вначале имени интерфеса писать заглавную I
//Это еще служит защитой от лишних пересечений интерфесов
// extends - объеденят(унаследует) ключи интерфесов в один интерфейс, при этом в новом интерфейсе можно добавлять новые ключи


interface IObjectPerson {
    name: string;
    age: number;
    address?: string;
}

interface IPersonInfo {
    work: boolean;
    pet: boolean;
}

interface IDevelop extends IObjectPerson, IPersonInfo {
    email: string;
    skills: string[];
    level?: string
}

const dan: IDevelop = {
    name: 'Dan',
    age: 28,
    address: 'dfsdfwer1234esdfsdfsdfsdf dsfsd fsdf sdfsdfsdfsdf',
    work: true,
    pet: false,
    email: 'sdfsdf@dfsd.com',
    skills: ['JS', 'REACT', 'MongoDB']
}

console.log(dan)


//type - нельзя дублировать (2 типа с одинаковым именем выдадут ошибку)
//interface - можно дублировать (2 интерфеса с одинаковым именем объединятся)

type A = {
    a: string;
}
type B = {
    b?: string;
}
type C = {
    c: number;
}

type D = A & B & C;

const d: D = {
    a: '123123',
    c: 23423
}

console.log(d);