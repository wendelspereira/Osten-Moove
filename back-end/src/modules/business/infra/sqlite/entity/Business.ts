import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("business")
 export class Business{
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  corporateName!: string;

  @Column()
  tradeName!: string;

  @Column()
  cnpj!: string;
  
  @Column()
  publicPlace!: string;

  @Column()
  streetNumber!: string;
  
  @Column()
  complement?: string;

  @Column()
  district!: string;
  
  @Column()
  city!: string;
  
  @Column()
  federatedUnit!: string;
  
  @Column()
  prefixPhoneNumber!: number;
  
  @Column()
  phoneNumber!: number;

  @CreateDateColumn()
  created_at!: Date;
}
