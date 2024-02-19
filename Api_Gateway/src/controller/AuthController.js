import axios from "axios";


const urlAuthService = 'http://localhost:8001'

const AuthService = async (req, res) => {
    const dataBody = req.body;
    try {
        const data = await axios.post(`${urlAuthService}/auth-service`, dataBody, {
            headers: {
                'secret_key': 'secret_keynya',
                'Content-Type': 'application/json'
            }
        });
        res.json(data.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data});
    }
}

const AuthServiceReg = async (req, res) => {
    const dataBody = req.body;
    try {
        const data = await axios.post(`${urlAuthService}/auth-service/register`, dataBody, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(data.data);
    } catch (error) {
        res.status(500).json({ error: error.response.data });
    }
}

export default {
    AuthService,
    AuthServiceReg
}
