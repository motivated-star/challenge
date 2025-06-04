const express = require('express');

const app = express();
const port = 5001;

const primeRoute = require('./routes/primeRoute');
app.use('/', primeRoute);

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});