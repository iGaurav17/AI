const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 6001;

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const profileRoute = require('./routes/profile');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// Use the routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/profile', profileRoute);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
