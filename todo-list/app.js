/// on submit it refreshes and re-inits the tasklist
var taskList;

function initList(){
   
    taskList = [];
}

function addTask(){
    event.preventDefault();
    let task = document.createElement('li');
    let form = document.createElement('form');
    task.appendChild(form);

    let taskValue = document.getElementById('input-task').value;
    taskList.push(taskValue);
    let taskContent = document.createTextNode(taskValue);
    //task.onclick = completeTask(task);
    form.action = 'submit';
    form.onsubmit = function() {completeTask(task)};
    form.appendChild(taskContent);
    if(taskValue !== ''){
        document.getElementById('task-list').appendChild(task);           
    }
    document.getElementById('input-task').value = '';
}

function completeTask(task){
    //mark as completed
    task.classList.add('completed');
    //remove task
    setTimeout(() => {
        task.parentElement.removeChild(task); 
        //remove from arr
        taskList.splice( taskList.indexOf(task), 1);
    }, 2000);
}

class Task{
    constructor(name){
        this.name = name;
    }
}
