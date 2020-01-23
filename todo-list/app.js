let todos = [];

function addtask(task){
    todos.push(task);
}

function completeTask(task){
    todos.splice(todos.indexOf(task),1);
}