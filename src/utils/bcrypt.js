const bcrypt = require('bcrypt');

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
  verifyPassword: (password, hashedPassword) => {
    // Comparar la contraseña con el hash almacenado
    return bcrypt.compareSync(password, hashedPassword);
  },
};
