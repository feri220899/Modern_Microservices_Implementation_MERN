import jwt from "jsonwebtoken";

// CekToken
const CekToken = async (req, res, next) => {
    try {
        const token = req.headers[ 'authorization' ];
        jwt.verify(token, 'secret_keynya', (err, user) => {
            if (err) {
                return res.status(403).json({message: 'Token Tidak Valid'});
            } else {
                req.dataModel = user.dataModel
                next();
            }
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// CekHakakses
const CekAuthorize = (role) => async (req, res, next) => {
    try {
        if (req.dataModel[ 0 ][ role ] === 'true') {
            next();
        } else {
            res.status(403).json({ error: 'Forbidden' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default {
    CekToken,
    CekAuthorize
}