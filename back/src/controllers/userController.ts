import { Request, Response } from 'express';
import IUser from '../interfaces/IUser';
import { createUser, getAllUsers, getUserById } from '../services/userService';
import { User } from '../entities/User';

// Controlador para crear un nuevo usuario
export const createUserController = async (req: Request, res: Response) => {
    try {
        const userData: IUser = req.body;
        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para obtener todos los usuarios
export const getAllUsersController = async (req: Request, res: Response) => {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para obtener un usuario por su ID
export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id);
        const user = await getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
