const express = require('express');
const routes = require('./routes');
const app = express();
const port = 3020;
app.use(express.static('frontend'))
app.use(express.json());

 
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});