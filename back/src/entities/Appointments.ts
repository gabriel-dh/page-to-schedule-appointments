import { Entity, PrimaryGeneratedColumn, Column, ManyToOne  } from 'typeorm';
import {User} from './User'

@Entity({
    name:"appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp' })
    date: Date;

    @Column()
    time: string;

    @Column()
    userId: number;

    @Column({ type: 'enum', enum: ['active', 'cancelled'], default: 'active' })
    status: 'active' | 'cancelled';

    @ManyToOne(() => User, user => user.appointments) // Asegúrate de que la relación ManyToOne apunte a la entidad User
    user: User;
}