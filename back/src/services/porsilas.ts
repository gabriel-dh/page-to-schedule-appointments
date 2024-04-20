
// export async function createAppointment(appointment: Omit<IAppointment, 'id'>, userId: number){
//     // Verifica que se proporcione un ID de usuario
//     try {
//         // Verifica que se proporcione un ID de usuario
//         if (!userId) {
//             throw new Error('El ID de usuario es obligatorio para crear un turno.');
//         }

//         // Obtiene el repositorio de citas
//         const appointmentRepository = AppDataSource.getRepository(Appointment);

//         // Crea una nueva instancia de la entidad Appointment
//         const newAppointment = appointmentRepository.create({
//             ...appointment,
//             userId // Asigna el ID de usuario proporcionado
//         });

//         // Guarda la nueva cita en la base de datos
//         const savedAppointment = await appointmentRepository.save(newAppointment);

//         return savedAppointment; // Retorna la nueva cita guardada
//     } catch (error) {
//         console.error('Error al crear una cita:', error);
//         throw error;
//     }
// }