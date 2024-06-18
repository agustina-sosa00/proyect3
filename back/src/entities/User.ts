import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({name: "users"})
class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column({unique: true})
    email: string

    @Column()
    birthdate: string

    @Column()
    nDni: string

    // relacion one to one 1:1

    // especificamos la relacion 1 a 1
    @OneToOne(() => Credential)

    // nos trae los datos de esa credencial
    @JoinColumn()
    credential: Credential

    // relacion 1 a muchos appointment

    @OneToMany(()=> Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}

export default User;