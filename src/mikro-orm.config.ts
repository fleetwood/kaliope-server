import { entities } from "./entities/";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/postgresql";
import path from "path";

export default {
  migrations: {
    // tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}",
  },
  entities,
  dbName: "fs-tut",
  type: "postgresql",
  debug: !__prod__,
  user: "pgdev",
  password: "pgdev",
} as Parameters<typeof MikroORM.init>[0];
