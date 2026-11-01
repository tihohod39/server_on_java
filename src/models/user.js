
const users = []; 

class UserModel {
    static async findByEmail(email) {
        return users.find(user => user.email === email) || null;
    }

    static async create(userData) {
        const newUser = {
            id: String(users.length + 1),
            name: userData.name,
            email: userData.email,
            password: userData.password 
        };
        users.push(newUser);
        return newUser;
    }
}

module.exports = UserModel;
