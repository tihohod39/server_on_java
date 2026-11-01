

class AuthService {
    static async register(data) {
        const { name, email, password, confirmPassword } = data;

        if (!name || !email || !password || !confirmPassword) {
            throw new Error('Все поля обязательны для заполнения');
        }
        if (password !== confirmPassword) {
            throw new Error('Пароли не совпадают');
        }

        const existingUser = await UserModel.findByEmail(email);
        if (existingUser) {
            throw new Error('Пользователь с таким email уже зарегистрирован');
        }

        return await UserModel.create({
            name,
            email,
            password
        });
    }
}


