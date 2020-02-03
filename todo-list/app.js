/// on submit it refreshes and re-inits the tasklist
var taskList;

function initList(){
   
    taskList = [];
}

function addTask(){
   // event.preventDefault();
    let task = document.createElement('li');

    //create task list form
    let form = document.createElement('form');
    form.id = 'list-form';
    //form.target = '_self';
    form.onsubmit = completeTask(event);

    //create field for the task value
    let outputTask = document.createElement('input');
    outputTask.type = 'text';
    outputTask.classList.add('task');
    outputTask.disabled = true;
    //get value from the input
    let taskValue = document.getElementById('input-task').value;
    taskList.push(taskValue);
    
    //set value to task list form
    outputTask.value = taskValue;
    form.appendChild(outputTask);

    //create submit button
    let completeTaskBtn = document.createElement('button');
    completeTaskBtn.id = 'complete-task' ;
    completeTaskBtn.type = 'submit';
    // visual text of the button
    completeTaskBtn.textContent = 'complete';
    
    //parent form
    completeTask.form = form.id;

    //add complete button to form
    form.appendChild(completeTaskBtn);
    
    //add form to li
    task.appendChild(form);
    if(taskValue !== ''){
        document.getElementById('task-list').appendChild(task);           
    }
    document.getElementById('input-task').value = '';
}

function completeTask(event){
   console.log(event.target);
   event.preventDefault();
    // // mark as completed
    // task.classList.add('completed');
    // //remove task
    // setTimeout(() => {
    //     task.parentElement.removeChild(task); 
    //     //remove from arr
    //     taskList.splice( taskList.indexOf(task), 1);
    // }, 2000);
}

class Task{
    constructor(name){
        this.name = name;
    }
}
