import express from 'express';
import { login, logout, signup } from '../controllers/auth.controller.js';

const router = express.Router();

//Auth API - signup
router.post("/signup", signup);

//Auth API - login
router.post("/login", login);

//Auth API - logout
router.post("/logout", logout);



export default router;