import "reflect-metadata"
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import {context, Context} from './context'
import {resolvers} from './graphql'
import { __host__, __port__ } from "./constants";

const main = async () => {
  

  const app = express();
  const apolloServer = new ApolloServer<Context>({
    schema: await buildSchema({
      resolvers,
      validate: false,
    }),
    context
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  console.log(`Starting Kaliope [Server] on http://${__host__}:${__port__}...`)
  app.listen(__port__, __host__, () => {
    console.log(`...Express listening on http://${__host__}:${__port__}`);
    console.log(`...GraphQL listening on http://${__host__}:${__port__}/graphql`);
  });
};

main();
