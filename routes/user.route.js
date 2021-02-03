module.exports = (app) => {
    const User = require('../controllers/user.controller');

    app.get('/fetchData',User.FindAll);

    //app.get('/fetch/:text',CSV.FindConditional);

    app.post('/adduser',User.AddUser);
}