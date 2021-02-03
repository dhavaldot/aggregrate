module.exports = (app) => {
    const Aggregrate = require('../controllers/aggregrate.controller');

    app.get('/findTaskByUser',Aggregrate.FindTaskByUser);

    app.get('/findUserWithTasks',Aggregrate.FindUserWithTasks);

    app.get('/fetchByPaging',Aggregrate.Paging);

    //app.post('/adduser',User.AddUser);
}