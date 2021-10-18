let displayTasks = `TASKS`;

let addTask = `NEW`;

let removeTask = `REMOVE`;

let close = `CLOSE`;

const taskManager =
`TASK MANAGER \n
What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`

//let start = true;
let userInput




while (true) {
    userInput = prompt(taskManager);

    if (userInput === close) {
        alert(`Thank you for using Task Manager`);
        break;
    } if (userInput === addTask) {
        newThing = prompt(`Please enter the new task:`);
        } while (userInput === addTask) {
            alert(`"${newThing}" has been added!`);
            break;
        }

    if (userInput === displayTasks) {
        alert(`
    Charge Mac Book
    Master JavaScript
    `
    )

    } else if (userInput !== close || userInput !== displayTasks) {
        follow = prompt(taskManager);
    }
}
