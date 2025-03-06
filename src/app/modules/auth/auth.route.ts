import express  from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();


// router.get('/login', (req, res) => {
//     res.send('Login');
// });

router.post('/create-admin',  AuthController.createAdmin);
router.get("/get-admins", AuthController.getAdmin);

export const AuthRouters = router;