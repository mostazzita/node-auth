import User from "../model/User.js";

const userController = {
    
    getOneUserByEmail: async (email) => {
        const user = await User.findOne({where: { user_mail: email}})
        return user
    }
}

export default userController