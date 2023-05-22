require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
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

    await pause();

    do {
        // Prints menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Create option
                const desc = await readInput('Description:');
                tasks.createTask(desc);
            break;

            case '2':
                console.log(tasks._list);
            break;
        }

        saveFileToDB(tasks.listArr);

        await pause();
    } while (opt !== '0');

}

main();