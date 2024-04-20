
import { AppDataSource } from '../config/data-source';
import { Appointment } from '../entities/Appointments';
import IAppointment from '../interfaces/IAppointment';
import IUser from '../interfaces/IUser'; 
import { User } from '../entities/User';


// Arreglo para almacenar los turnos
const appointments: IAppointment[] = [];



export async function getAllAppointments() {
    const appointmentRepository = AppDataSource.getRepository(Appointment);

    // Obtiene todas las citas desde la base de datos
    const appointments = await appointmentRepository.find();

    // Retorna todas las citas
    return appointments;
}


// Función para obtener el detalle de un turno por su ID

export async function getAppointmentById(id: number){
    // Obtiene el repositorio de citas
    try {
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        // Busca la cita por su ID en la base de datos
        const foundAppointment = await appointmentRepository.findOneBy({
            id
        });

        // Retorna la cita encontrada
        return foundAppointment;
    } catch (error) {
        // Maneja el error si no se encuentra la cita
        console.error('Error al obtener la cita por ID:', error);
        return undefined;
    }
}



export async function createAppointment(appointment: Omit<IAppointment, 'id'>, userId: number){
    try {
        // Verifica que se proporcione un ID de usuario
        if (!userId) {
            throw new Error('El ID de usuario es obligatorio para crear un turno.');
        }

        // Obtiene el repositorio de citas
        const appointmentRepository = AppDataSource.getRepository(Appointment);

        // Busca el usuario correspondiente en la base de datos
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOne({
            where: {
              id: userId
            }
          });
          

        // Verifica si se encontró el usuario
        if (!user) {
            throw new Error(`No se encontró un usuario con el ID ${userId}.`);
        }

        // Crea una nueva instancia de la entidad Appointment
        const newAppointment = appointmentRepository.create({
            ...appointment,
            user // Asigna el usuario encontrado
        });

        // Guarda la nueva cita en la base de datos
        const savedAppointment = await appointmentRepository.save(newAppointment);

        return savedAppointment; // Retorna la nueva cita guardada
    } catch (error) {
        console.error('Error al crear una cita:', error);
        throw error;
    }
}




export async function cancelAppointmentById(id: number): Promise<void> {
    try {
        // Obtiene el repositorio de citas
        const appointmentRepository = AppDataSource.getRepository(Appointment);
        
        // Busca la cita por su ID en la base de datos
        const foundAppointment = await appointmentRepository.findOneBy({
            id
        });

        // Si se encontró la cita
        if (foundAppointment) {
            // Cambia el estado de la cita a "cancelled"
            foundAppointment.status = "cancelled";
            
            // Guarda los cambios en la base de datos
            await appointmentRepository.save(foundAppointment);
        } else {
            // Si no se encuentra la cita, lanza un error
            throw new Error(`No se encontró ninguna cita con el ID ${id}`);
        }
    } catch (error) {
        // Maneja cualquier error que pueda ocurrir durante la cancelación
        console.error('Error al cancelar la cita por ID:', error);
        throw error;
    }
}