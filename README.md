# todo-console-app

This is a TODO console app using JavaScript

You can:
- Create task
- List tasks
- List completed tasks
- List pending tasks
- Complete task(s)
- Delete a task



Dependencies used:

"dependencies": {
    "colors": "^1.4.0",
    "inquirer": "^8.1.2",
    "uuid": "^9.0.0"
}

Inquirer is an npm package defined as a collection of common interactive command line user interfaces.  Makes it easier to create interactive console menus with input handling, confirm (Y/N), multi selecting and more.
Check out the documentation: https://www.npmjs.com/package/inquirer

uuid is another npm package used to generate unique universal ids.
Check out the documentation: https://www.npmjs.com/package/uuid

DB is a simple .json file with an array of tasks.


Steps to run the TODO console app:
1. Clone repo: git clone https://github.com/rortizv/todo-console-app.git
2. Install dependencies:
  - npm i colors
  - npm i inquirer@8.1.2
  - npm i uuid
3. Open terminal and type: npm start
