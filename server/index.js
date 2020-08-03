import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from "./models";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers, // optional
});

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});