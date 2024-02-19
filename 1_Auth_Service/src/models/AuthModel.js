import pool from "../config/db.js";
import Enkripsi from "../config/encript.js";

const AuthModelCekUser = async (dataBody) => {
    const { username } = dataBody
    try {
        const [ user ] = await pool.query(`
            SELECT user.username, user.email, user.phone, user.password, role_user.akses_admin, role_user.akses_belanja, role_user.akses_product 
            FROM user 
            INNER JOIN role_user ON role_user.username = user.username 
            WHERE user.username = '${username}'
        `);
        return user;
    } catch (error) {
        throw error
    }
};


const ResgiterUser = async (dataBody) => {
    const { username, email, phone, password } = dataBody
    try {
        const hashedPassword = await Enkripsi.bcript(password);
        const dataModel = await pool.query('INSERT INTO user (username, email, phone, password) VALUES (?, ?, ?, ?)',
            [ username, email, phone, hashedPassword ]
        );
        return dataModel;
    } catch (error) {
        throw error
    }
}
export default {
    AuthModelCekUser,
    ResgiterUser,
};