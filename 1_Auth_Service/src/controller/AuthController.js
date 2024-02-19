import jwt from "jsonwebtoken";
import Res from "../config/response.js";
import AuthModel from "../models/AuthModel.js";
import bcrypt from "bcryptjs";

const LoginGetToken = async (req, res) => {
    const dataBody = req.body
    const secret_key = req.headers[ 'secret_key' ];
    try {
        const dataModel = await AuthModel.AuthModelCekUser(dataBody);
        const cekPassword = await bcrypt.compare(dataBody.password, dataModel[ 0 ].password);
        if (dataBody.username === dataModel[ 0 ].username && cekPassword === true) {
            const token = jwt.sign({ dataModel }, secret_key, { expiresIn: 30 * 60 })
            Res.successRes(res, 'success', 200, { token }, 'Users retrieved successfully')
        } else {
            Res.successRes(res, 'success', 200, "Username Tidak Valid", 'Gagal Membuat Token')
        }
    } catch (error) {
        Res.errorRes(res, 'error', error.message, 'Server Internal Errror')
    }
}

const RegisterUser = async (req, res) => {
    const dataBody = req.body
    try {
        const dataModel = await AuthModel.ResgiterUser(dataBody);
        Res.successRes(res, 'success', 200, dataModel, 'Users retrieved successfully')
    } catch (error) {
        Res.errorRes(res, 'error', error.message, 'User registration failed');
    }
}

export default {
    LoginGetToken,
    RegisterUser,
};