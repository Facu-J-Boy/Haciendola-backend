const sequelize = require('./src/db');
const app = require('./src/app');

sequelize
  .sync({ alter: true, logging: false })
  .then(() => {
    console.log('base de datos conectada! :D');
    app.listen(3001, function () {
      console.log('App is listening on port 3001!');
    });
  })
  .catch((err) => console.error(err));
