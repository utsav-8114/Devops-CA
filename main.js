const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('this is my revised pipeline!');
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
