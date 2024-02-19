import express from 'express';
import Midleware from '../middleware/Midleware.js';
import AuthController from '../controller/AuthController.js';
import Service1 from '../controller/Service1.js';
import Service2 from '../controller/Service2.js';


const GatwayRouter = express.Router();
GatwayRouter.get('/cek-user', Midleware.CekToken, async(req, res)=>{
    res.json(req.dataModel)
});

// Auth Service
GatwayRouter.post('/auth', AuthController.AuthService);
GatwayRouter.post('/register-user', AuthController.AuthServiceReg);

// Router Service1
GatwayRouter.get('/service1', Midleware.CekToken, Midleware.CekAuthorize('akses_admin'), Service1.Getdata);

// Router Service1
GatwayRouter.get('/service2', Midleware.CekToken, Midleware.CekAuthorize('akses_belanja'), Service2.Getdata);

export default GatwayRouter;