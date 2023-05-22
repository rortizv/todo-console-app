const { v4: uuidv4 } = require('uuid');

class Task {

    id = '';
    desc = '';
    completedAt = null;

    constructor( description ) {
        this.id = uuidv4();
        this.desc = description;
        this.completedAt = null;
    }
}

module.exports = Task;