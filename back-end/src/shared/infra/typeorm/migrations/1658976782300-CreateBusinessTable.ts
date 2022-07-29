import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBusinessTable1658976782300 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "business",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "corporateName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tradeName",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cnpj",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "publicPlace",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "streetNumber",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "complement",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "district",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "federatedUnit",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "prefixPhoneNumber",
            type: "int",
            isNullable: false,
          },
          {
            name: "phoneNumber",
            type: "int",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("business");
  }
}
