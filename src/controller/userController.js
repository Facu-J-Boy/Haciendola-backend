const User = require('../models/User');
const { hashPassword, verifyPassword } = require('../utils/bcrypt');

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
  authUser: async (user, password) => {
    if (!user || !password) {
      return {
        status: 401,
        response: { msg: 'Params required' },
      };
    }
    const authUser = await User.findOne({
      where: { user },
    });
    if (!authUser) {
      return { status: 403, response: { msg: 'User not found' } };
    }
    const passwordMatch = verifyPassword(password, authUser.password);
    if (!passwordMatch) {
      return {
        status: 403,
        response: { msg: 'Incorrect password' },
      };
    } else {
      const userResponse = await User.findOne({
        where: { user },
        attributes: { exclude: ['password'] },
      });
      return { status: 200, response: userResponse };
    }
  },
};

module.exports = controller;
