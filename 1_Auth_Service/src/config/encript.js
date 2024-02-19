import bcrypt from "bcryptjs";


const bcript = async (plaintextPassword) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(plaintextPassword, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

export default {bcript};