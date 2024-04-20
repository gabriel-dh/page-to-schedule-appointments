import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Appointment } from './Appointments';

@Entity({
    name:"users"
})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    birthdate: Date;

    @Column()
    nDni: string;

    @Column()
    credentialsId: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}
