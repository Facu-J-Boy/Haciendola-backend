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
        response: { user: null, msg: 'Params required' },
      };
    }
    const authUser = await User.findOne({
      where: { user },
    });
    if (!authUser) {
      return {
        status: 400,
        response: { user: null, msg: 'User not found' },
      };
    }
    const passwordMatch = verifyPassword(password, authUser.password);
    if (!passwordMatch) {
      return {
        status: 400,
        response: { user: null, msg: 'Incorrect password' },
      };
    } else {
      const userResponse = await User.findOne({
        where: { user },
        attributes: { exclude: ['password'] },
      });
      return {
        status: 200,
        response: { user: userResponse, msg: null },
      };
    }
  },
  userSession: async (userId) => {
    if (!userId) {
      return {
        status: 400,
        response: {
          user: null,
        },
      };
    }
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return {
        status: 404,
        response: {
          user: null,
        },
      };
    } else {
      return {
        status: 200,
        response: {
          user: user,
        },
      };
    }
  },
};

module.exports = controller;
