const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.log('#### TESTE ERROR HANDLER');
  // eslint-disable-next-line no-console
  console.log(error);
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000!'));
