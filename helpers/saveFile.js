const fs = require('fs');

const file = './db/data.json';


const saveFileToDB = (data) => {
    fs.writeFileSync(file, JSON.stringify(data));
}

const readFromDB = () => {
    if (!fs.existsSync(file)) {
        return null;
    }

    try {
        const info = fs.readFileSync(file, { encoding: 'utf-8' });
        const data = JSON.parse(info);
        return data;
    } catch (error) {
        console.error('Error reading from the database:', error);
        return null;
    }
}


module.exports = {
    saveFileToDB,
    readFromDB
}