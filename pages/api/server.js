const { app } = require('./app');
const dotenv = require('dotenv');

dotenv.config(); // Activate dotenv to read env variables

// Models
const { User } = require('./models/user.model');
const { Task } = require('./models/task.model');

// Utils 
const { db } = require('./utils/database');

// Auth database credentials 
db.authenticate()
    .then(() => console.log('Database authenticated.'))
    .catch((err) => console.log(err));

// Establish models relations
User.hasMany(Task, {
    foreignKey: 'userId',
});
Task.belongsTo(User);

// Sync Sequelize model
db.sync()
    .then(() => console.log('Database synced.'))
    .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
