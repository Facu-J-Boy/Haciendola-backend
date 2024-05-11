const User = require('../models/User');
const { hashPassword } = require('../utils/bcrypt');

const controller = {
  createUser: async (user, password) => {
    try {
      // Crear un nuevo usuario
      const hashedPassword = hashPassword(password);
      const newUser = await User.create(
        {
          user,
          password: hashedPassword,
        },
        {
          attributes: { exclude: ['password'] }, // Excluir el atributo 'password' de la respuesta
        }
      );
      return {
        status: 200,
        response: newUser,
      };
    } catch (error) {
      return {
        status: 402,
        response: { error: error.errors[0].message },
      };
    }
  },
};

module.exports = controller;
