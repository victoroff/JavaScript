// class TODO {
//     constructor(){
//         this.todolist = document.createElement('ul', { is : 'todo-list' });//not working
//     }

//     addtask(task){
//         document.createElement('li', { is : task}); // its not that 
//     }

//     // completeTask: function (task){
//     //     let completedTask = document.getElementById(task);
//     //     if(completedTask !== null)
//     //         completedTask.remove();
//     // }

// }


// let todo = new TODO();

// todo.addtask('fix this code');
// todo.addtask('fix this code be izrod');

//odo.completeTask('fix this code be izrod');
function addTask(){
    let task = document.createElement('li');
    let taskValue = document.getElementById('input-task').value;
    let taskNode = document.createTextNode(taskValue);
    task.appendChild(taskNode);
    if(taskValue !== ''){
        document.getElementById('task-list').appendChild(task);           
    }
    document.getElementById('input-task').value = '';
    
}

function completeTask(){
    let taskList = document.getElementById('task-list');
    taskList.addEventListener('click',function(event){
        console.log(event.target.tagName );
    });
}
//addTask();