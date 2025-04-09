// IIEF

const modul = (function(){
    let privateVar = "I am private";
    let name = "modul";
    return {
        name: "modul",
        version: '1.1.0',
        init : function(){
            console.log("IIEF")
        },
        val: function(){
            return privateVar;
        },
        getName: function(){
            return name;
        },
        setName: function(newName){
            name = newName;
            return name;
        }
    }
})();


const taskManager = (function(){
    let tasks = [];
    class Tasks{
        constructor(_name, _priority){
            this.name = _name;
            this.priority = _priority;
        }
    }
    return {
        // Add task
        addTask: function(name, priority){
            tasks.push(new Tasks(name, priority));
        },
        // Delete task
        deleteTask: function(task){
            tasks = tasks.filter(item => item !== task)
        },
        // Show all tasks
        showTasks: function(){
            tasks.forEach(task => console.log(task.name +  ", " + task.priority))
        }
    }
})();


export { modul, taskManager }