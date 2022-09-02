const app = require('./api');

const PORT = 5000;

app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => console.log('ouvindo porta', PORT));
