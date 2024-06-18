import { Column, Entity, ManyToOne, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity({name: 'appointments'})
class Appointment{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string

    @Column()
    time: string

    // cuando el usuario quiera cambiar a canceled se cambia con la fn, mientras tanto va a ser active
    @Column({default: 'active'})
    status: string


    // relacion de muchos a 1 con user
    @ManyToOne(()=> User, (user) => user.appointments)
    user: User

}

export default Appointment;