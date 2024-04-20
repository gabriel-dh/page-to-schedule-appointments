import express from 'express';
import { validateCredentialController } from '../controllers/credentialsCrontroller'

const router = express.Router();

// Ruta para validar las credenciales
router.post('/login', validateCredentialController);

export default router;
