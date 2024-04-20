import { Router } from "express";
import userRoutes from './userRoutes';
import appointmentRoutes from './appointmentRoutes';
import credentialRoutes  from './credentialRoutes'


const router: Router = Router();

router.use('/',userRoutes)
router.use('/',appointmentRoutes)
router.use('/', credentialRoutes )

export default router