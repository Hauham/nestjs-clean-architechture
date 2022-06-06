import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar")
    name: string

    @Column("varchar")
    mail: string

    @Column("varchar")
    password: string

    @Column("int")
    role_id: number

    @Column("int")
    rank_id: number
}