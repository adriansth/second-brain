const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
