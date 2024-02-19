import express from "express";
import AuthController from "../controller/AuthController.js";
// import jwt from "jsonwebtoken";

const AuthRouter = express.Router();

AuthRouter.post('/', AuthController.LoginGetToken);
AuthRouter.post('/register', AuthController.RegisterUser);

// AuthRouter.post('/token-validate', async (req, res) => {
//     const token = req.headers['authorization'];
//     const secret_key = req.query.secret_key;
//     jwt.verify(token, secret_key, (err, user) => {
//         if (err) return res.sendStatus(403);
//         res.json(user.dataModel);
//     });
    
// });



export default AuthRouter;