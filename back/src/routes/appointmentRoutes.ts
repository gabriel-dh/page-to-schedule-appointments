import   { Router }  from "express";
import { createAppointmentController, cancelAppointmentByIdController , getAllAppointmentsController, getAppointmentByIdController } from '../controllers/appointmentController';

const router:Router = Router()

router.post('/appointments', createAppointmentController);
router.get('/appointments', getAllAppointmentsController);
router.get('/appointments/:id', getAppointmentByIdController);
router.put('/appointments/:id/cancel', cancelAppointmentByIdController);

export default router