module.exports = (app) => {
    const ToDo = require('../controllers/todo.controller');

    app.get('/fetchAllTask',ToDo.FindAll);

    //app.get('/fetch/:text',CSV.FindConditional);

    app.post('/addtask',ToDo.AddNotes);
}