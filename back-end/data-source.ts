import { DataSource } from "typeorm";
import { Business } from "./src/modules/business/infra/sqlite/entity/Business";
import "dotenv/config";
const env = process.env.ENVIRONMENT
export const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./database/database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Business, "__dirname + '/src/modules/business/infra/sqlite/entity/*.{js,ts}'"],
  migrations: env === "production" ? ["./build/src/shared/infra/typeorm/migrations/*.js"] : ["./src/shared/infra/typeorm/migrations/*.ts"],
});


AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
