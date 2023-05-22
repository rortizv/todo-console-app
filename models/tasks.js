const Task = require('./task');


class Tasks {

    _list = {};

    get listArr() {
        const list = [];
        Object.keys(this._list).forEach(key => {
            const task = this._list[key];
            list.push(task);
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task;
        });
    }

    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

    listAllTasks() {
        this.listArr.forEach((task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedAt } = task;
            const state = (completedAt)
                ? 'Completed'.green
                : 'Pending'.red;

            console.log(`${idx}. ${desc} :: ${state}`);
        });
    }

    listCompletedPendingTasks(completed = true) {
        let counter = 0;
        this.listArr.forEach(task => {
            const { desc, completedAt } = task;
            const state = (completedAt)
                ? 'Completed'.green
                : 'Pending'.red;

            if (completed) {
                // Show completed tasks
                if (completedAt) {
                    counter += 1;
                    console.log(`${counter.toString().green}. ${desc} :: ${completedAt.green}`);
                }
            } else {
                // Show pending tasks
                if (!completedAt) {
                    counter += 1;
                    console.log(`${(counter + '.').green}. ${desc} :: ${state}`);
                }
            }
        });
    }

    toggleCompleted(ids = []) {
        ids.forEach(id => {
            const task = this._list[id];
            if (!task.completedAt) {
                task.completedAt = new Date().toISOString();
            }
        });

        this.listArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completedAt = null;
            }
        });
    }

}

module.exports = Tasks;