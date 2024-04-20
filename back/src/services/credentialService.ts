

// Arreglo para almacenar las credenciales


// Función para crear un nuevo par de credenciales y retornar su ID
import { Credential } from '../entities/Credentials';
import { AppDataSource } from '../config/data-source';

export async function createCredential(username: string, password: string): Promise<number> {
    try {
        // Obtener el repositorio de la entidad Credential
        const credentialRepository = AppDataSource.getRepository(Credential);

        // Crear una nueva instancia de la entidad Credential con los datos proporcionados
        const newCredential = credentialRepository.create({
            username,
            password
        });

        // Guardar la nueva credencial en la base de datos
        const savedCredential = await credentialRepository.save(newCredential);

        // Retorna el ID de la nueva credencial guardada
        return savedCredential.id;
    } catch (error) {
        // Manejar errores, si los hay
        console.error('Error al crear la credencial:', error);
        throw error;
    }
}


export async function validateCredentialsAndGetId(username: string, password: string): Promise<number | undefined> {
    try {
        // Obtener el repositorio de la entidad Credential
        const credentialRepository = AppDataSource.getRepository(Credential);

        // Buscar las credenciales por nombre de usuario en la base de datos
        const foundCredential = await credentialRepository.findOne({
            where: {
                username
            }
        });

        console.log(foundCredential?.password , password)

        // Verificar si se encontraron las credenciales y si la contraseña es correcta
        if (foundCredential && foundCredential.password === password) {
            return foundCredential.id; // Retorna el ID del par de credenciales si las credenciales son válidas
        } else {
            return undefined; // Retorna 'undefined' si las credenciales no son válidas
        }
    } catch (error) {
        // Manejar errores, si los hay
        console.error('Error al validar las credenciales:', error);
        throw error;
    }
}