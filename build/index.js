"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)
    .then(response => response.json())
    .then(data => {
    const todo = data;
    const { id, title, completed } = todo;
    getLogTodo(id, title, completed);
});
function getLogTodo(id, title, completed) {
    console.log(`
    id: ${id}
    title: ${title}
    complited: ${completed}
`);
}
let x = 11;
let isOdd;
// if(x % 2 === 0) return 
console.log(x % 2 === 0 ? isOdd = true : isOdd = false);
