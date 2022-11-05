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

  app.listen(4000, () => {
    console.log("Express listening on http://localhost:4000");
    console.log("GraphQL playground: http://localhost:4000/graphql");
  });
};

main();
