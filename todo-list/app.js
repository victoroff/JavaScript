function addTask(){
    let task = document.createElement('li');
    let taskValue = document.getElementById('input-task').value;
    let taskContent = document.createTextNode(taskValue);
    task.onclick = () => {
        //mark as completed
        task.classList.add('completed');
        //remove task
        setTimeout(() => {
            task.parentElement.removeChild(task); 
        }, 2000);
    };
    task.appendChild(taskContent);
    if(taskValue !== ''){
        document.getElementById('task-list').appendChild(task);           
    }
    document.getElementById('input-task').value = '';
    
}
