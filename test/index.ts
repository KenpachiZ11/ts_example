export {};
const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}


fetch(url)
    .then(response => response.json())
    .then(data => {
        const todo = data as Todo;

        const { id, title, completed } = todo;
        getLogTodo(id, title, completed);
    })


function getLogTodo(id: number, title: string, completed: boolean) {
    console.log(`
    id: ${id}
    title: ${title}
    complited: ${completed}
`)
}

let x: number = 11;
let isOdd: boolean;

// if(x % 2 === 0) return 
console.log(x % 2 === 0 ? isOdd = true : isOdd = false)
