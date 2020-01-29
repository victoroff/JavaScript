/// on submit it refreshes and re-inits the tasklist
var taskList;

function initList(){
   
    taskList = [];
}

function addTask(){
    event.preventDefault();
    let task = document.createElement('li');
    let taskValue = document.getElementById('input-task').value;
    taskList.push(taskValue);
    let taskContent = document.createTextNode(taskValue);
    task.onclick = () => {
        //mark as completed
        task.classList.add('completed');
        //remove task
        setTimeout(() => {
            task.parentElement.removeChild(task); 
             taskList.removeChild(task);   
        }, 2000);
    };
    task.appendChild(taskContent);
    if(taskValue !== ''){
        document.getElementById('task-list').appendChild(task);           
    }
    document.getElementById('input-task').value = '';
}



class Task{
    constructor(name){
        this.name = name;
    }
}
