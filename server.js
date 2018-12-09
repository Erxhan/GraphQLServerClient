const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/', function(req, res) {
  res.send('Go to /graphql to start');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App running on ${PORT}`));