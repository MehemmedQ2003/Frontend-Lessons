import { modul, taskManager } from "./modules.js";

modul.init();

let val = modul.val();
console.log(val)

let name = modul.getName();
console.log(name)

let setName = modul.setName("Muhammed");
console.log(setName)


taskManager.addTask("Task 1", "High");
taskManager.addTask("Task 2", "Low");
taskManager.showTasks()