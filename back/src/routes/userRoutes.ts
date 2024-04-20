import   { Router }  from "express";
import { createUserController , getAllUsersController, getUserByIdController} from '../controllers/userController';

const router:Router = Router()

router.post('/users', createUserController);
router.get('/users', getAllUsersController);
router.get('/users/:id', getUserByIdController);



export default router

