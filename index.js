const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos){
    todos.forEach(todo =>{
        addTodo(todo);
    });
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    addTodo();
})

// adding todo 
function addTodo(todo){
    let todotext = input.value
    if(todo){
        todotext = todo.text
    }

    if(todotext){
        const todo_element = document.createElement('li');
        if(todo && todo.completed){
            todo_element.classList.add('completed')
        }

        todo_element.innerText = todotext;

        todo_element.addEventListener('click', () =>{
            todo_element.classList.toggle('completed');
            updateLS();
        })

        todo_element.addEventListener('contextmenu', (e) =>{
            e.preventDefault();
            todo_element.remove();
            updateLS();
        })

        todosUL.appendChild(todo_element);

        input.value = '';


        updateLS(); //updating our local storage for todos
    }
}


// creating local storage for todo app

// localStorage.setItem('name','Brad');
// JSON.parse(localStorage.getItem(obj));


function updateLS(){
    todosEl = document.querySelectorAll('li');

    const todos =[];

    todosEl.forEach(todoel =>{
        todos.push({
            text:todoel.innerText,
            completed:todoel.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos));
}