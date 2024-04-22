import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Appointment } from "../entities/Appointments"
import { Credential } from "../entities/Credentials"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "123456",
    database: "prueba",
    synchronize: true,
    logging: false,
    entities: [User,Appointment,Credential],
    subscribers: [],
    migrations: [],
})
