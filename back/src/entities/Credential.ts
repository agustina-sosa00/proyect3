import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'credentials'})
class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string

    // relacion de one to one 1:1 con User 
}

export default Credential;