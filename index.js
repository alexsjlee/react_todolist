const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());

require('./models/Todo');

require('./routes/todoRoutes')(app);
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('****************************************');
  console.log(`Server is up and running on port ${PORT}`);
  console.log('****************************************');
});
