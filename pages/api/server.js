const { app } = require('./app');
const dotenv = require('dotenv');

dotenv.config(); // Activate dotenv to read env variables

// Models

// Utils 
const { db } = require('./utils/database');

// Auth database credentials 
db.authenticate()
    .then(() => console.log('Database authenticated.'))
    .catch((err) => console.log(err));

// Sync Sequelize model
db.sync()
    .then(() => console.log('Database synced.'))
    .catch((err) => console.log(err));

// Server
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
