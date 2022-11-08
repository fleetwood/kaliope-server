import "reflect-metadata"
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import { buildSchema } from "type-graphql";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig)
  const em = orm.em.fork()
  await orm.getMigrator().up()
  
  const port = Number(process.env.REACT_APP_PORT) || 4000
  const host = process.env.REACT_APP_HOST || 'localhost'

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [__dirname+ "/resolvers/*.{ts,js}"],
      validate: false,
    }),
    context: () => ({ em }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  console.log(`Starting Kaliope [Server] on http://${host}:${port}...`)
  app.listen(port, host, () => {
    console.log(`...Express listening on http://${host}:${port}`);
    console.log(`...GraphQL listening on http://${host}:${port}/graphql`);
  });
};

main();
