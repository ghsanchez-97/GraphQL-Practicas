'use strict'
// Importación de GraphQL
const { graphql, buildSchema } = require('graphql');
// Importación de Express
const express = require('express');
// Importación de middleware GraphQL
const { graphqlHTTP } = require('express-graphql')

// Creación del servidor API
const app = express();
const port = process.env.port || 3000;


// Define the schema initial 
const schema = buildSchema(`
  type Query {
      hello: String,
      saludar: String
  }
`);

// Define the resolver
const resolver = {
    hello: () => {
        return 'Hello World!';
    },
    saludar: () => {
        return 'Hola a todos!';
    }
}

// Ejecuar el query hello
// graphql(schema, `{ saludar }`, resolver).then(result => {
//     console.log(result);
// }) 

// Difinición del middleware GraphQL
app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Server is listenig at http://localhost:${port}/api`)
});