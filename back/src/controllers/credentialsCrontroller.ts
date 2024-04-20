import { Request, Response } from 'express';
import { validateCredentialsAndGetId } from '../services/credentialService';

// Controlador para validar las credenciales y obtener su ID
export const validateCredentialController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        const credentialId = await validateCredentialsAndGetId(username, password);
        console.log(credentialId);
        if (credentialId !== undefined) {
            res.status(200).json({ id: credentialId, message: 'resulto' });
        } else {
            res.status(401).json({ message: 'Credenciales no válidas' });
        }
    } catch (error) {
        console.error('Error al validar las credenciales:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
