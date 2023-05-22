require('colors');

const { inquirerMenu, pause, readInput, listDeleteTasks, showChecklist, confirm } = require('./helpers/inquirer');
const { saveFileToDB, readFromDB } = require('./helpers/saveFile');
const Tasks = require('./models/tasks');

console.clear();


const main = async() => {
    let opt = '';
    const tasks = new Tasks();

    const dbTasks = readFromDB();

    if (dbTasks) {
        // Load tasks
        tasks.loadTasksFromArray(dbTasks);
    }

    do {
        // Prints menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create task
                const desc = await readInput('Description:');
                tasks.createTask(desc);
            break;

            case '2':
                tasks.listAllTasks();
            break;

            case '3':
                tasks.listCompletedPendingTasks(true);
            break;

            case '4':
                tasks.listCompletedPendingTasks(false);
            break;

            case '5':
                const ids = await showChecklist(tasks.listArr);
                tasks.toggleCompleted(ids);
            break;

            case '6':
                const id = await listDeleteTasks(tasks.listArr);
                if (id !== '0') {
                    const ok = await confirm('Are you sure?');
                    if (ok) {
                        tasks.deleteTask(id);
                        console.log('Task deleted'.green);
                    }
                }
            break;

        }

        saveFileToDB(tasks.listArr);

        await pause();
    } while (opt !== '0');

}

main();