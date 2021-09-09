'use strict'
// Importación de GraphQL
const { makeExecutableSchema } = require('graphql-tools')
// Importación de Express
const express = require('express')
// Importación de middleware GraphQL
const { graphqlHTTP } = require('express-graphql')
// Importación de otras librerías
const { readFileSync } = require('fs')
const { join } = require('path')
//Importación de los resolvers
const resolvers = require('./lib/resolvers')

// Creación del servidor API
const app = express()
const port = process.env.port || 3000

// Creación del esquema GraphQL
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')
// Define the schema initial
const schema = makeExecutableSchema({typeDefs, resolvers})

// Define the resolver
//const resolver = resolvers

// Ejecuar el query hello
// graphql(schema, `{ saludar }`, resolver).then(result => {
//     console.log(result);
// })

// Difinición del middleware GraphQL
app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listenig at http://localhost:${port}/api`)
})
