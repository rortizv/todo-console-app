require('colors');

const { inquirerMenu, pause, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

console.clear();


const main = async() => {
    let opt = '';
    const tasks = new Tasks();

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

        console.log({ opt });
        await pause();
    } while (opt !== '0');

}

main();