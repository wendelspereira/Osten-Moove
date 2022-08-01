import { Business } from "../infra/typeorm/entity/Business";

export interface IBusinessRepository {
    create: (data: Business) => Promise<void>;
    list: () => Promise<Business[] | []>;
    findById: (id: number) => Promise<Business | null>;
    findByTradeName: (tradeName: string) => Promise<Business[] | []>;
    update: (id: number, data: Business) => Promise<void>;
    delete: (id: number) => Promise<void>;
    cnpjAlreadyRegistered: (cpnj: string) => Promise<boolean>
}
