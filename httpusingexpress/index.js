const express = require('express');
const port = 3000;
const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1 is executed');
    next();
});

app.use((req, res, next) => {
    console.log('Middleware 2 is executed');
    next();
});

app.listen(port, (err) => {
    if (err) {
        console.log('The error is', err);
    } else {
        console.log('Express server is running on port', port);
    }
});
