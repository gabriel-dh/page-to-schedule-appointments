import { Request, Response } from 'express';
import IAppointment from '../interfaces/IAppointment';
import { createAppointment, getAllAppointments, getAppointmentById, cancelAppointmentById } from '../services/appointmentService';

// Controlador para crear un nuevo turno
export const createAppointmentController = async (req: Request, res: Response) => {
    try {
        const appointmentData: IAppointment = req.body;
        const userIdFromBody = appointmentData.userId;
        const newAppointmentFromBody = await createAppointment(appointmentData, userIdFromBody);
        res.status(201).json(newAppointmentFromBody);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};


// Controlador para obtener todos los turnos
export const getAllAppointmentsController = async (req: Request, res: Response) => {
    try {
        const allAppointments = await getAllAppointments();
        res.status(200).json(allAppointments);
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para obtener un turno por su ID
export const getAppointmentByIdController = async (req: Request, res: Response) => {
    try {
        const appointmentId = parseInt(req.params.id);
        const appointment = await getAppointmentById(appointmentId);
        if (appointment) {
            res.status(200).json(appointment);
        } else {
            res.status(404).json({ message: 'Turno no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Controlador para cancelar un turno por su ID
export const cancelAppointmentByIdController = async (req: Request, res: Response)=>{
    try {
        const appointmentId = parseInt(req.params.id);
        const cancel = await cancelAppointmentById(appointmentId);
        res.status(200).json({ message: 'Turno cancelado exitosamente', cancel: `${cancel}` });
    } catch (error) {
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
