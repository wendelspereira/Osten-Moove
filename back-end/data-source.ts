import { DataSource } from "typeorm";
import { Business } from "./src/modules/business/infra/typeorm/entity/Business";
import "dotenv/config";
const environment = process.env.ENVIRONMENT;

const inProduction = environment === "production";

//Quando em produção armazena os dados em um bando postgres
const productionDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ["./build/src/modules/business/infra/typeorm/entity/*.js"],
  migrations: ["./build/src/shared/infra/typeorm/migrations/*.js"],
});

//Quando em ambiende de desenvolvimento, armazena os dados em arquivo localmente através do SQLite
const developmentDataSource = new DataSource({
  type: "better-sqlite3",
  database: "./database/database.sqlite",
  synchronize: true,
  logging: true,
  entities: ["./src/modules/business/infra/typeorm/entity/*.{js,ts}"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
});

export const AppDataSource = inProduction ? productionDataSource : developmentDataSource;

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
