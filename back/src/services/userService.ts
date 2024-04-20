import { AppDataSource } from '../config/data-source';
import { User } from '../entities/User';
import IUser from '../interfaces/IUser'; // Importa la interfaz IUser
import { createCredential } from './credentialService'; // Importa la función para crear credenciales



export async function getAllUsers(){
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();
        
        console.log('User Repository:', userRepository); 
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
}


// Función para obtener un usuario por su ID
export async function getUserById2(id: number){
    // Busca el usuario por su ID
    const userRepository = AppDataSource.getRepository(User);
    const results = await userRepository.findOneBy({
        id
    })
    
    // Retorna el usuario encontrado o undefined si no se encontró ningún usuario con el ID especificado
    return results;
}


export async function getUserById(id: number) {
    // Busca el usuario por su ID
    const userRepository = AppDataSource.getRepository(User);
    const results = await userRepository.findOne({ where: { id }, relations: ['appointments'] });

    
    // Retorna el usuario encontrado o undefined si no se encontró ningún usuario con el ID especificado
    return results;
}


// Función para crear un nuevo usuario y sus credenciales correspondientes
export async function createUser(user: Omit<IUser, 'id' | 'credentialsId'>){
    
    const userRepository = AppDataSource.getRepository(User);
    const usersData = await userRepository.create(user)
  


    // Crea las credenciales para el nuevo usuario
    const newCredentialId = await createCredential(user.username, user.password);
    

    usersData.credentialsId = newCredentialId;
    const results = await userRepository.save(usersData)

   
    // Retorna el nuevo usuario creado
    return results;
}
